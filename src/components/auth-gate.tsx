'use client';
import { useAuth } from '@/firebase';
import {
  GoogleAuthProvider,
  User,
  signInWithPopup,
  signInWithCustomToken,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult,
} from 'firebase/auth';
import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { GalaxyLogo } from './galaxy-logo';
import { useUser } from '@/firebase/auth/use-user';
import { Input } from './ui/input';
import { useToast } from '@/hooks/use-toast';
import { AuthLoader } from './auth-loader';
import { cn } from '@/lib/utils';

function GoogleSignInButton({
  onClick,
  isSigningIn,
}: {
  onClick: () => void;
  isSigningIn: boolean;
}) {
  return (
    <Button
      variant="outline"
      size="lg"
      className="w-full h-14 text-lg rounded-2xl bg-card border-2 border-primary/20 soft-shadow hover:bg-accent"
      onClick={onClick}
      disabled={isSigningIn}
    >
      <div className="flex items-center justify-center">
        <svg className="w-6 h-6 mr-3" viewBox="0 0 48 48">
          <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
          <path
            fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
          ></path>
          <path
            fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          ></path>
          <path
            fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C42.022,35.244,44,30.036,44,24C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
        </svg>
        <span>Sign in with Google</span>
      </div>
    </Button>
  );
}

const PhoneAuthForm = ({
  isSigningIn,
  setIsSigningIn,
  onUser,
}: {
  isSigningIn: boolean;
  setIsSigningIn: (isSigningIn: boolean) => void;
  onUser: (user: User) => void;
}) => {
  const auth = useAuth();
  const { toast } = useToast();
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const recaptchaContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!auth) return;

    const setupRecaptcha = () => {
      if (!recaptchaContainerRef.current) return;
      if ((window as any).recaptchaVerifier) {
        (window as any).recaptchaVerifier.clear();
      }
      (window as any).recaptchaVerifier = new RecaptchaVerifier(auth, recaptchaContainerRef.current, {
        'size': 'invisible',
        'callback': (response: any) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        }
      });
    };

    // Delay setup to ensure DOM is ready
    const timeoutId = setTimeout(setupRecaptcha, 100);

    return () => {
      clearTimeout(timeoutId);
      if ((window as any).recaptchaVerifier) {
        (window as any).recaptchaVerifier.clear();
      }
    };
  }, [auth]);

  const handleSendOtp = async () => {
    if (!auth || !(window as any).recaptchaVerifier) {
        toast({
            variant: 'destructive',
            title: 'Error',
            description: 'Authentication service not ready. Please try again in a moment.',
        });
        return;
    }
    setIsSigningIn(true);
    try {
      const result = await signInWithPhoneNumber(auth, `+${phone}`, (window as any).recaptchaVerifier);
      setConfirmationResult(result);
      setShowOtpInput(true);
      toast({ title: 'OTP Sent!', description: 'Please check your phone.' });
    } catch (error: any) {
      console.error("Error sending OTP:", error);
      toast({
        variant: 'destructive',
        title: 'Failed to Send OTP',
        description: error.message || 'Please check the phone number and try again.',
      });
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!confirmationResult) return;
    setIsSigningIn(true);
    try {
      const userCredential = await confirmationResult.confirm(otp);
      onUser(userCredential.user);
    } catch (error: any) {
      console.error("Error verifying OTP:", error);
      toast({
        variant: 'destructive',
        title: 'Invalid OTP',
        description: 'The code you entered is incorrect. Please try again.',
      });
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <div className="text-center text-foreground space-y-4">
       <h2 className="text-2xl font-bold mb-4">Sign In with Phone</h2>
       {!showOtpInput ? (
         <>
           <Input
             type="tel"
             placeholder="91XXXXXXXXXX (include country code)"
             value={phone}
             onChange={(e) => setPhone(e.target.value)}
             className="h-12 rounded-xl"
             disabled={isSigningIn}
           />
           <Button onClick={handleSendOtp} disabled={isSigningIn || !phone} className="w-full h-12 rounded-xl text-base">
             {isSigningIn ? 'Sending...' : 'Send OTP'}
           </Button>
         </>
       ) : (
         <>
           <Input
             type="text"
             placeholder="Enter OTP"
             value={otp}
             onChange={(e) => setOtp(e.target.value)}
             className="h-12 rounded-xl"
             disabled={isSigningIn}
           />
           <Button onClick={handleVerifyOtp} disabled={isSigningIn || otp.length < 6} className="w-full h-12 rounded-xl text-base">
             {isSigningIn ? 'Verifying...' : 'Verify OTP & Sign In'}
           </Button>
         </>
       )}
       <div id="recaptcha-container" ref={recaptchaContainerRef}></div>
    </div>
  );
};


function AuthScreen({ onUser }: { onUser: (user: User) => void; }) {
  const auth = useAuth();
  const { toast } = useToast();
  const [isSigningIn, setIsSigningIn] = useState(false);
  
  const handleGoogleSignIn = async () => {
    if ((window as any).flutter_inappwebview) {
        (window as any).flutter_inappwebview.callHandler('requestGoogleSignIn');
        return;
    }
    if (window.parent && window.parent !== window) {
       window.parent.postMessage(JSON.stringify({ type: 'requestGoogleSignIn' }), '*');
       return;
    }

    if (!auth) return;
    setIsSigningIn(true);
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        onUser(result.user);
    } catch (error: any) {
        console.error("Google Sign-In Error:", error);
        let description = 'Could not complete the sign-in process.';
        if (error.code === 'auth/popup-closed-by-user') {
            description = 'The sign-in window was closed before completion.';
        } else if (error.code === 'auth/popup-blocked') {
            description = 'The sign-in pop-up was blocked by your browser. Please allow pop-ups for this site.';
        }
        toast({
            variant: 'destructive',
            title: 'Google Sign-In Failed',
            description,
        });
    } finally {
        setIsSigningIn(false);
    }
  };

  useEffect(() => {
    if (!auth) return;
  
    (window as any).handleCustomTokenSignIn = async (token: string) => {
      if (!token) {
        toast({ variant: 'destructive', title: 'Sign-In Failed', description: 'Received an empty token from native app.' });
        return;
      }
      try {
        setIsSigningIn(true);
        const userCredential = await signInWithCustomToken(auth, token);
        onUser(userCredential.user);
      } catch (error) {
        console.error("Custom Token Sign-In Error:", error);
        toast({
          variant: 'destructive',
          title: 'Sign-In Failed',
          description: 'Failed to sign in with custom token.',
        });
      } finally {
        setIsSigningIn(false);
      }
    };
  
    return () => {
      delete (window as any).handleCustomTokenSignIn;
    };
  }, [auth, onUser, toast]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 font-body">
      <div className="flex flex-col items-center justify-center w-full max-w-sm z-10">
        <div className="flex flex-col items-center mb-8">
            <GalaxyLogo className="w-16 h-16 mb-4 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">
            Welcome to AI Atlas
            </h1>
            <p className="mt-2 text-md text-muted-foreground">
            Sign in or create an account to get started.
            </p>
        </div>

        <div className="w-full max-w-sm">
            <div className="rounded-2xl bg-card/80 backdrop-blur-sm soft-shadow p-6">
                <PhoneAuthForm onUser={onUser} isSigningIn={isSigningIn} setIsSigningIn={setIsSigningIn} />
            </div>
        </div>
        
        <div className="relative my-6 w-full max-w-sm">
            <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                Or continue with
                </span>
            </div>
        </div>

        <div className="w-full max-w-sm">
            <GoogleSignInButton
            onClick={handleGoogleSignIn}
            isSigningIn={isSigningIn}
            />
        </div>

        <p className="text-xs text-muted-foreground max-w-sm mt-8 text-center">
            By signing in, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}

export function AuthGate({ children }: { children: React.ReactNode }) {
  const { user, isUserLoading } = useUser();

  useEffect(() => {
    // This is a workaround for a Firebase Auth issue where the reCAPTCHA
    // verifier can sometimes persist across page loads.
    if (!(window as any).recaptchaVerifier) {
      (window as any).recaptchaVerifier = {} as RecaptchaVerifier;
      (window as any).recaptchaVerifier.clear = () => {};
    }
  }, []);

  if (isUserLoading) {
    return <AuthLoader />;
  }

  if (user) {
    return <>{children}</>;
  }

  return (
    <AuthScreen
      onUser={(newUser) => { /* The useUser hook will update automatically */ }}
    />
  );
}
