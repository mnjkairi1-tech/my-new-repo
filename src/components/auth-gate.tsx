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
import { cn } from '@/lib/utils';

function GoogleSignInButton({
  onClick,
  isSigningIn,
}: {
  onClick: (e: React.MouseEvent) => void;
  isSigningIn: boolean;
}) {
  return (
    <Button
      type="button"
      variant="outline"
      size="lg"
      className="w-full h-14 text-lg rounded-2xl bg-card border-2 border-primary/20 soft-shadow hover:bg-accent relative z-10"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick(e);
      }}
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
  password: z.string().optional(),
});

function EmailAuth() {
  const [authMode, setAuthMode] = useState<'signIn' | 'signUp' | 'forgotPassword'>('signIn');
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
        toast({
          variant: 'destructive',
          title: `Sign Up Failed`,
          description: error.message,
        });
      } finally {
        setIsSubmitting(false);
      }
    } else { // Sign In logic
      try {
        await signInWithEmailAndPassword(auth, data.email, data.password!);
      } catch (error: any) {
        console.error(`Sign In error:`, error);
        toast({
          variant: 'destructive',
          title: `Sign In Failed`,
          description: 'Invalid email or password.',
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (signUpState === 'pendingVerification' && authMode === 'signUp') {
      return (
        <div className="rounded-2xl bg-card/80 backdrop-blur-sm soft-shadow p-6 text-center">
            <MailCheck className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Verify Your Email</h2>
            <p className="text-muted-foreground mb-4">
                We've sent a verification link to <span className="font-semibold text-foreground">{emailForVerification}</span>.
            </p>
            <Button className="w-full mt-6 rounded-xl" onClick={() => { setAuthMode('signIn'); setSignUpState('form'); }}>
                Back to Sign In
            </Button>
        </div>
      );
  }

  const isFlipped = authMode === 'signUp';

  return (
    <div className="w-full perspective-1000">
      <div className={cn(
        "relative w-full transition-transform duration-700 preserve-3d min-h-[400px]",
        isFlipped && "[transform:rotateY(180deg)]"
      )}>
        {/* Front Side: Sign In / Forgot Password */}
        <div className="backface-hidden w-full h-full bg-card/80 backdrop-blur-sm soft-shadow rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {authMode === 'forgotPassword' ? 'Reset Password' : 'Sign In'}
          </h2>
          
          {authMode === 'forgotPassword' && (
              <p className="text-xs text-muted-foreground mb-4 text-center">
                  Enter your email and we'll send you a password reset link.
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
                            <Button 
                                variant="link" 
                                className="h-auto p-0 text-xs text-primary font-bold"
                                type="button"
                                onClick={(e) => { e.preventDefault(); setAuthMode('forgotPassword'); }}
                            >
                                Forgot?
                            </Button>
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
                {isSubmitting ? 'Loading...' : (authMode === 'forgotPassword' ? 'Send Link' : 'Sign In')}
              </Button>
            </form>
          </Form>
          
          <div className="mt-4 text-center">
            {authMode === 'forgotPassword' ? (
                <Button variant="link" className="font-bold text-sm text-primary" onClick={(e) => { e.preventDefault(); setAuthMode('signIn'); }}>
                    Back to Sign In
                </Button>
            ) : (
                <Button variant="link" className="font-bold text-sm text-primary" onClick={(e) => { e.preventDefault(); setAuthMode('signUp'); }}>
                  Don't have an account? Sign Up
                </Button>
            )}
          </div>
        </div>

        {/* Back Side: Sign Up */}
        <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] w-full h-full bg-card/80 backdrop-blur-sm soft-shadow rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Create an Account</h2>
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
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} className="h-12 rounded-xl" disabled={isSubmitting} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting} className="w-full h-12 rounded-xl text-base font-bold shadow-lg shadow-primary/20">
                {isSubmitting ? 'Creating...' : 'Create Account'}
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-center">
            <Button variant="link" className="font-bold text-sm text-primary" onClick={(e) => { e.preventDefault(); setAuthMode('signIn'); }}>
              Already have an account? Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}


export function AuthScreen({ onUser }: { onUser: (user: User) => void; }) {
  const auth = useAuth();
  const { toast } = useToast();
  const [isSigningIn, setIsSigningIn] = useState(false);
  
  const handleGoogleSignIn = async (e: React.MouseEvent) => {
    // Explicitly prevent any default link behavior
    e.preventDefault();
    e.stopPropagation();

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
        // Set custom parameters to ensure we stay in the flow
        provider.setCustomParameters({ prompt: 'select_account' });
        const result = await signInWithPopup(auth, provider);
        onUser(result.user);
    } catch (error: any) {
        console.error("Google Sign-In Error:", error);
        // Special check for user cancellation to avoid scary toasts
        const silentErrors = ['auth/popup-closed-by-user', 'auth/cancelled-popup-request'];
        if (!silentErrors.includes(error.code)) {
            toast({
                variant: 'destructive',
                title: 'Google Sign-In Failed',
                description: error.message || 'Could not complete the sign-in process.',
            });
        }
    } finally {
        setIsSigningIn(false);
    }
  };

  useEffect(() => {
    if (!auth) return;
  
    (window as any).handleCustomTokenSignIn = async (token: string) => {
      if (!token) return;
      try {
        setIsSigningIn(true);
        const userCredential = await signInWithCustomToken(auth, token);
        onUser(userCredential.user);
      } catch (error) {
        console.error("Custom Token Sign-In Error:", error);
      } finally {
        setIsSigningIn(false);
      }
    };
  
    return () => {
      delete (window as any).handleCustomTokenSignIn;
    };
  }, [auth, onUser]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 font-body overflow-x-hidden">
      <div className="flex flex-col items-center justify-center w-full max-w-sm z-10">
        <div className="flex flex-col items-center mb-8">
            <GalaxyLogo className="w-16 h-16 mb-4 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">
            Welcome to Ai Atlas
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
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 text-center">
            <MailCheck className="w-20 h-20 text-primary mb-6" />
            <h1 className="text-3xl font-bold mb-4">Check Your Inbox</h1>
            <p className="text-lg text-muted-foreground mb-8">
                We've sent a verification email to <strong>{user.email}</strong>. 
                Please verify your email to access the full features of Ai Atlas.
            </p>
            <Button onClick={() => window.location.reload()} className="rounded-full h-12 px-8">
                I've Verified, Continue
            </Button>
            <Button variant="link" onClick={() => signOut(auth)} className="mt-4 font-bold">
                Back to Sign In
            </Button>
        </div>
      );
    }
    return <>{children}</>;
  }

  return (
    <AuthScreen
      onUser={() => { }}
    />
  );
}
