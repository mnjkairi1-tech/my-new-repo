'use client';
import { useAuth } from '@/firebase';
import {
  GoogleAuthProvider,
  User,
  signInWithPopup,
  signInWithCustomToken,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from './ui/button';
import { GalaxyLogo } from './galaxy-logo';
import { useUser } from '@/firebase/auth/use-user';
import { Input } from './ui/input';
import { useToast } from '@/hooks/use-toast';
import { AuthLoader } from './auth-loader';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { MailCheck, KeyRound } from 'lucide-react';

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

const authSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().optional(), // Password is optional for reset mode
});

function PostSignUpMessage({ email, setAuthMode }: { email: string; setAuthMode: (mode: 'signIn' | 'signUp' | 'forgotPassword') => void; }) {
  return (
    <div className="rounded-2xl bg-card/80 backdrop-blur-sm soft-shadow p-6 text-center">
        <MailCheck className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Verify Your Email</h2>
        <p className="text-muted-foreground mb-4">
            We've sent a verification link to <span className="font-semibold text-foreground">{email}</span>.
        </p>
        <p className="text-muted-foreground">
            Please check your inbox and click the link to finish creating your account.
        </p>
        <Button className="w-full mt-6 rounded-xl" onClick={() => setAuthMode('signIn')}>
            Back to Sign In
        </Button>
    </div>
  );
}

function EmailAuth() {
  const [authMode, setAuthMode] = useState<'signIn' | 'signUp' | 'forgotPassword'>('signUp');
  const [signUpState, setSignUpState] = useState<'form' | 'pendingVerification'>('form');
  const [emailForVerification, setEmailForVerification] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const auth = useAuth();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof authSchema>) => {
    setIsSubmitting(true);
    
    if (authMode === 'forgotPassword') {
        try {
            await sendPasswordResetEmail(auth, data.email);
            toast({
                title: "Reset Link Sent!",
                description: `Check your email ${data.email} to reset your password.`,
            });
            setAuthMode('signIn');
        } catch (error: any) {
            console.error("Reset Email Error:", error);
            toast({
                variant: 'destructive',
                title: "Error",
                description: error.message,
            });
        } finally {
            setIsSubmitting(false);
        }
        return;
    }

    if (authMode === 'signUp') {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password!);
        await sendEmailVerification(userCredential.user);
        toast({
          title: "Verification Email Sent!",
          description: "Please check your inbox to verify your account.",
        });
        setEmailForVerification(data.email);
        setSignUpState('pendingVerification');
      } catch (error: any) {
        console.error(`Sign Up error:`, error);
        let description = error.message;
        if (error.code === 'auth/email-already-in-use') {
          description = 'This email is already in use. Please sign in instead.';
        }
        toast({
          variant: 'destructive',
          title: `Sign Up Failed`,
          description: description,
        });
      } finally {
        setIsSubmitting(false);
      }
    } else { // Sign In logic
      try {
        await signInWithEmailAndPassword(auth, data.email, data.password!);
      } catch (error: any) {
        console.error(`Sign In error:`, error);
        let description = 'Invalid email or password.';
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
          description = 'Invalid email or password.';
        }
        toast({
          variant: 'destructive',
          title: `Sign In Failed`,
          description: description,
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  useEffect(() => {
    form.reset();
    setSignUpState('form');
  }, [authMode, form]);

  if (signUpState === 'pendingVerification' && authMode === 'signUp') {
      return <PostSignUpMessage email={emailForVerification} setAuthMode={setAuthMode} />;
  }

  return (
    <div className="rounded-2xl bg-card/80 backdrop-blur-sm soft-shadow p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {authMode === 'signUp' ? 'Create an Account' : (authMode === 'signIn' ? 'Sign In' : 'Reset Password')}
      </h2>
      
      {authMode === 'forgotPassword' && (
          <p className="text-sm text-muted-foreground mb-4 text-center">
              Don't worry! Enter your email below and we'll send you a password reset link.
          </p>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} className="h-12 rounded-xl" disabled={isSubmitting} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {authMode !== 'forgotPassword' && (
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                        <FormLabel>Password</FormLabel>
                        {authMode === 'signIn' && (
                            <Button 
                                variant="link" 
                                className="h-auto p-0 text-xs text-primary font-bold"
                                type="button"
                                onClick={() => setAuthMode('forgotPassword')}
                            >
                                Forgot password?
                            </Button>
                        )}
                    </div>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} className="h-12 rounded-xl" disabled={isSubmitting} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
          )}

          <Button type="submit" disabled={isSubmitting} className="w-full h-12 rounded-xl text-base font-bold shadow-lg shadow-primary/20">
            {isSubmitting ? 'Processing...' : (authMode === 'signUp' ? 'Create Account' : (authMode === 'signIn' ? 'Sign In' : 'Send Reset Link'))}
          </Button>
        </form>
      </Form>
      
      <div className="mt-4 text-center">
        {authMode === 'forgotPassword' ? (
            <Button variant="link" className="font-bold text-sm" onClick={() => setAuthMode('signIn')}>
                Wait, I remember it! Back to Sign In
            </Button>
        ) : (
            <Button variant="link" className="font-bold text-sm" onClick={() => setAuthMode(authMode === 'signUp' ? 'signIn' : 'signUp')}>
              {authMode === 'signUp' ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
            </Button>
        )}
      </div>
    </div>
  );
}


export function AuthScreen({ onUser }: { onUser: (user: User) => void; }) {
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
            <p className="mt-2 text-md text-muted-foreground text-center">
            Sign in or create an account to get started.
            </p>
        </div>

        <div className="w-full max-w-sm">
           <EmailAuth />
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

        <p className="text-xs text-muted-foreground max-w-sm mt-8 text-center opacity-60">
            By signing in, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}

function VerifyEmailScreen() {
    const auth = useAuth();
    const { toast } = useToast();
    const [isSending, setIsSending] = useState(false);
    const user = auth.currentUser;

    const handleResend = async () => {
        if (!user) return;
        setIsSending(true);
        try {
            await sendEmailVerification(user);
            toast({
                title: 'Verification Email Sent!',
                description: "A new verification link has been sent to your inbox.",
            });
        } catch (error: any) {
            console.error("Resend Verification Error:", error);
            let description = error.message;
            if (error.code === 'auth/too-many-requests') {
                description = 'You have requested a verification email too many times. Please try again later.'
            }
            toast({ variant: 'destructive', title: 'Error', description });
        } finally {
            setIsSending(false);
        }
    };

    const handleSignOutAndBack = async () => {
        await signOut(auth);
    };
    
    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 font-body">
            <div className="w-full max-w-sm text-center">
                <div className="flex justify-center mb-6">
                    <MailCheck className="w-20 h-20 text-primary" />
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Verify Your Email</h1>
                <p className="text-lg text-muted-foreground mb-6">
                    We've sent a verification link to <span className="font-semibold text-foreground">{user?.email}</span>. Please check your inbox and click the link to continue.
                </p>
                <div className="space-y-4">
                     <Button onClick={handleRefresh} className="w-full h-12 rounded-xl text-base font-bold shadow-lg shadow-primary/20">
                        I've Verified, Continue
                    </Button>
                    <Button onClick={handleResend} disabled={isSending} className="w-full h-12 rounded-xl" variant="secondary">
                        {isSending ? 'Sending...' : 'Resend Verification Email'}
                    </Button>
                    <Button variant="link" onClick={handleSignOutAndBack} className="w-full font-bold">
                        Back to Sign In
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-8 opacity-60">
                    Can't find the email? Check your spam folder.
                </p>
            </div>
        </div>
    );
}

export function AuthGate({ children }: { children: React.ReactNode }) {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  
  useEffect(() => {
    if (user && !user.emailVerified && user.providerData.some(p => p.providerId === 'password')) {
        const intervalId = setInterval(async () => {
            await user.reload();
            if (auth.currentUser?.emailVerified) {
                clearInterval(intervalId);
                window.location.reload(); 
            }
        }, 3000);

        return () => clearInterval(intervalId);
    }
  }, [user, auth]);

  if (isUserLoading) {
    return <AuthLoader />;
  }

  if (user) {
    const isPasswordProvider = user.providerData.some(p => p.providerId === 'password');
    if (isPasswordProvider && !user.emailVerified) {
      return <VerifyEmailScreen />;
    }
    return <>{children}</>;
  }

  return (
    <AuthScreen
      onUser={(newUser) => { }}
    />
  );
}
