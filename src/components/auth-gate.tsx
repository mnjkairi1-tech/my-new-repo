'use client';
import { useAuth } from '@/firebase';
import {
  GoogleAuthProvider,
  User,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
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
import { MailCheck, Loader2 } from 'lucide-react';
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
      className="w-full h-14 text-lg rounded-2xl bg-card border-2 border-primary/20 shadow-lg hover:bg-accent relative z-10 transition-all active:scale-95"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick(e);
      }}
      disabled={isSigningIn}
    >
      <div className="flex items-center justify-center">
        {isSigningIn ? (
            <Loader2 className="w-6 h-6 animate-spin mr-3 text-primary" />
        ) : (
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
        )}
        <span>{isSigningIn ? 'Signing in...' : 'Sign in with Google'}</span>
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
        <div className="rounded-2xl bg-card/80 backdrop-blur-sm shadow-xl p-6 text-center border-t-4 border-primary animate-fade-in-up">
            <MailCheck className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Verify Your Email</h2>
            <p className="text-muted-foreground mb-4">
                We've sent a link to <span className="font-semibold text-foreground">{emailForVerification}</span>.
            </p>
            <Button className="w-full mt-6 rounded-xl" onClick={() => { setAuthMode('signIn'); setSignUpState('form'); }}>
                Back to Sign In
            </Button>
        </div>
      );
  }

  const isFlipped = authMode === 'signUp';

  return (
    <div className="w-full perspective-1000 relative">
      <div className={cn(
        "relative w-full transition-transform duration-700 preserve-3d min-h-[420px]",
        isFlipped && "[transform:rotateY(180deg)]"
      )}>
        {/* Front Side: Sign In / Forgot Password */}
        <div className="backface-hidden w-full h-full bg-card/80 backdrop-blur-sm shadow-2xl rounded-3xl p-8 border border-white/20">
          <h2 className="text-2xl font-black mb-6 text-center tracking-tight">
            {authMode === 'forgotPassword' ? 'Reset Password' : 'Sign In'}
          </h2>
          
          {authMode === 'forgotPassword' && (
              <p className="text-xs text-muted-foreground mb-6 text-center leading-relaxed">
                  Enter your email and we'll send you a password reset link.
              </p>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold ml-1">Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} className="h-12 rounded-xl bg-background/50 border-none shadow-inner" disabled={isSubmitting} />
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
                        <div className="flex items-center justify-between px-1">
                            <FormLabel className="font-bold">Password</FormLabel>
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
                          <Input type="password" placeholder="••••••••" {...field} className="h-12 rounded-xl bg-background/50 border-none shadow-inner" disabled={isSubmitting} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              )}

              <Button type="submit" disabled={isSubmitting} className="w-full h-14 rounded-2xl text-lg font-black shadow-lg shadow-primary/20 transition-all active:scale-95">
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : (authMode === 'forgotPassword' ? 'Send Reset Link' : 'Login Now')}
              </Button>
            </form>
          </Form>
          
          <div className="mt-6 text-center">
            {authMode === 'forgotPassword' ? (
                <Button variant="link" className="font-bold text-sm text-primary" onClick={(e) => { e.preventDefault(); setAuthMode('signIn'); }}>
                    Back to Sign In
                </Button>
            ) : (
                <Button variant="link" className="font-bold text-sm text-primary" onClick={(e) => { e.preventDefault(); setAuthMode('signUp'); }}>
                  Create a new account
                </Button>
            )}
          </div>
        </div>

        {/* Back Side: Sign Up */}
        <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] w-full h-full bg-card/80 backdrop-blur-sm shadow-2xl rounded-3xl p-8 border border-white/20">
          <h2 className="text-2xl font-black mb-6 text-center tracking-tight">Join AI Atlas</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold ml-1">Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} className="h-12 rounded-xl bg-background/50 border-none shadow-inner" disabled={isSubmitting} />
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
                    <FormLabel className="font-bold ml-1">Choose Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} className="h-12 rounded-xl bg-background/50 border-none shadow-inner" disabled={isSubmitting} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting} className="w-full h-14 rounded-2xl text-lg font-black shadow-lg shadow-primary/20 transition-all active:scale-95">
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Register Now'}
              </Button>
            </form>
          </Form>
          <div className="mt-6 text-center">
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
  
  // Handle redirect result on component mount (critical for webviews)
  useEffect(() => {
    if (!auth) return;
    getRedirectResult(auth).then((result) => {
      if (result?.user) {
        onUser(result.user);
      }
    }).catch((error) => {
      console.error("Redirect Result Error:", error);
    });
  }, [auth, onUser]);

  const handleGoogleSignIn = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Native bridge support
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
        provider.setCustomParameters({ prompt: 'select_account' });
        
        // Use redirect instead of popup for better webviewer compatibility
        await signInWithRedirect(auth, provider);
        // Page will redirect, execution stops here.
    } catch (error: any) {
        console.error("Google Sign-In Error:", error);
        const silentErrors = ['auth/popup-closed-by-user', 'auth/cancelled-popup-request'];
        if (!silentErrors.includes(error.code)) {
            toast({
                variant: 'destructive',
                title: 'Sign-In Failed',
                description: 'Could not connect to Google. Please try again.',
            });
        }
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 font-body overflow-x-hidden relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-sm z-10">
        <div className="flex flex-col items-center mb-10">
            <div className="w-20 h-20 bg-white rounded-[2.5rem] shadow-xl flex items-center justify-center mb-6 border-4 border-secondary">
                <GalaxyLogo className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl font-black text-foreground tracking-tighter">
            Ai Atlas
            </h1>
            <p className="mt-2 text-sm text-muted-foreground font-bold uppercase tracking-widest text-center opacity-70">
            Gateway to the Intelligence
            </p>
        </div>

        <div className="w-full max-w-sm">
           <EmailAuth />
        </div>
        
        <div className="relative my-8 w-full max-w-sm">
            <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-muted-foreground/20" />
            </div>
            <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
                <span className="bg-background px-4 text-muted-foreground/60">
                Fast Connect
                </span>
            </div>
        </div>

        <div className="w-full max-w-sm">
            <GoogleSignInButton
            onClick={handleGoogleSignIn}
            isSigningIn={isSigningIn}
            />
        </div>

        <p className="text-[10px] font-bold text-muted-foreground max-w-sm mt-10 text-center opacity-40 uppercase tracking-tighter">
            Protected by AI Security • Version 1.0.0
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
        <div className="flex flex-col items-center justify-center min-h-screen bg-background p-6 text-center animate-fade-in-up">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8">
                <MailCheck className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-3xl font-black mb-4 tracking-tight">Verify Your Email</h1>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xs mx-auto">
                We've sent a secure link to <strong>{user.email}</strong>. 
                Please check your inbox.
            </p>
            <Button onClick={() => window.location.reload()} className="w-full max-w-xs h-14 rounded-2xl text-lg font-black shadow-xl shadow-primary/20">
                I've Verified My Email
            </Button>
            <Button variant="link" onClick={() => signOut(auth)} className="mt-6 font-bold text-muted-foreground">
                Logout & Use Different Account
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
