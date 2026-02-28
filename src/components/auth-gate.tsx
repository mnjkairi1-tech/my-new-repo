'use client';
import { useAuth } from '@/firebase';
import {
  GoogleAuthProvider,
  User,
  signInWithRedirect,
  getRedirectResult,
  signInWithCustomToken,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  setPersistence,
  browserLocalPersistence,
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
import { MailCheck, Loader2, KeyRound, Mail, UserPlus, LogIn, Sparkles } from 'lucide-react';
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
      className="w-full h-14 text-base rounded-full bg-card border-2 border-primary/10 shadow-md hover:bg-accent relative z-10 transition-all active:scale-95 group overflow-hidden"
      onClick={onClick}
      disabled={isSigningIn}
    >
      <div className="flex items-center justify-center relative z-10">
        {isSigningIn ? (
            <Loader2 className="w-5 h-5 animate-spin mr-3 text-primary" />
        ) : (
            <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48">
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
        <span className="font-bold">{isSigningIn ? 'Processing...' : 'Google Account'}</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
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
        <div className="rounded-[2.5rem] bg-card/90 backdrop-blur-xl shadow-2xl p-10 text-center border border-white/20 animate-fade-in-up">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MailCheck className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-2xl font-black mb-3 tracking-tight">Check Mail</h2>
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed px-2">
                We've sent a magic link to <br/><span className="font-bold text-foreground break-all">{emailForVerification}</span>
            </p>
            <Button className="w-full h-14 rounded-full font-bold shadow-lg" onClick={() => { setAuthMode('signIn'); setSignUpState('form'); }}>
                Back to Login
            </Button>
        </div>
      );
  }

  return (
    <div className="w-full bg-card/80 backdrop-blur-2xl shadow-2xl rounded-[2.5rem] border border-white/30 overflow-hidden animate-fade-in-up">
        {/* Cute Mode Toggle */}
        {authMode !== 'forgotPassword' && (
            <div className="p-2 mt-4 mx-6 flex bg-secondary/50 rounded-full relative">
                <div 
                    className={cn(
                        "absolute top-2 bottom-2 w-[calc(50%-8px)] bg-background rounded-full shadow-sm transition-all duration-500 ease-spring",
                        authMode === 'signUp' ? "translate-x-full" : "translate-x-0"
                    )}
                />
                <button 
                    className={cn(
                        "flex-1 py-3 text-sm font-black relative z-10 transition-colors duration-300",
                        authMode === 'signIn' ? "text-primary" : "text-muted-foreground"
                    )}
                    onClick={() => setAuthMode('signIn')}
                >
                    Login
                </button>
                <button 
                    className={cn(
                        "flex-1 py-3 text-sm font-black relative z-10 transition-colors duration-300",
                        authMode === 'signUp' ? "text-primary" : "text-muted-foreground"
                    )}
                    onClick={() => setAuthMode('signUp')}
                >
                    Join
                </button>
            </div>
        )}

        <div className="p-8 pt-6">
            <div className="space-y-6">
                {authMode === 'forgotPassword' && (
                    <div className="text-center mb-4">
                        <h2 className="text-2xl font-black tracking-tight mb-2">Reset Key</h2>
                        <p className="text-xs text-muted-foreground leading-relaxed">Enter your email to receive a recovery link.</p>
                    </div>
                )}

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex items-center gap-2 mb-1 px-1">
                                        <Mail className="w-3.5 h-3.5 text-primary/60" />
                                        <FormLabel className="text-xs font-black uppercase tracking-widest text-muted-foreground">Email</FormLabel>
                                    </div>
                                    <FormControl>
                                        <Input 
                                            placeholder="hello@atlas.com" 
                                            {...field} 
                                            className="h-14 rounded-3xl bg-secondary/30 border-none shadow-inner focus-visible:ring-primary/20 text-base" 
                                            disabled={isSubmitting} 
                                        />
                                    </FormControl>
                                    <FormMessage className="text-[10px] font-bold" />
                                </FormItem>
                            )}
                        />
                        
                        {authMode !== 'forgotPassword' && (
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center justify-between px-1 mb-1">
                                            <div className="flex items-center gap-2">
                                                <KeyRound className="w-3.5 h-3.5 text-primary/60" />
                                                <FormLabel className="text-xs font-black uppercase tracking-widest text-muted-foreground">Password</FormLabel>
                                            </div>
                                            {authMode === 'signIn' && (
                                                <button 
                                                    type="button"
                                                    className="text-[10px] text-primary font-black uppercase tracking-tighter hover:underline"
                                                    onClick={() => setAuthMode('forgotPassword')}
                                                >
                                                    Forgot?
                                                </button>
                                            )}
                                        </div>
                                        <FormControl>
                                            <Input 
                                                type="password" 
                                                placeholder="••••••••" 
                                                {...field} 
                                                className="h-14 rounded-3xl bg-secondary/30 border-none shadow-inner focus-visible:ring-primary/20 text-base" 
                                                disabled={isSubmitting} 
                                            />
                                        </FormControl>
                                        <FormMessage className="text-[10px] font-bold" />
                                    </FormItem>
                                )}
                            />
                        )}

                        <Button 
                            type="submit" 
                            disabled={isSubmitting} 
                            className="w-full h-14 rounded-full text-base font-black shadow-xl shadow-primary/20 transition-all active:scale-95 mt-4"
                        >
                            {isSubmitting ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <div className="flex items-center gap-2">
                                    {authMode === 'signIn' ? <LogIn className="w-5 h-5" /> : (authMode === 'signUp' ? <UserPlus className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />)}
                                    <span>{authMode === 'forgotPassword' ? 'Send Link' : (authMode === 'signUp' ? 'Create Account' : 'Login Now')}</span>
                                </div>
                            )}
                        </Button>
                    </form>
                </Form>
                
                {authMode === 'forgotPassword' && (
                    <div className="text-center pt-2">
                        <button 
                            className="text-xs font-black text-primary uppercase tracking-widest" 
                            onClick={() => setAuthMode('signIn')}
                        >
                            Back to Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
}


export function AuthScreen({ onUser }: { onUser: (user: User) => void; }) {
  const auth = useAuth();
  const { toast } = useToast();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isCheckingRedirect, setIsCheckingRedirect] = useState(true);
  
  useEffect(() => {
    if (!auth) return;

    setPersistence(auth, browserLocalPersistence);

    getRedirectResult(auth).then((result) => {
      if (result?.user) {
        onUser(result.user);
      }
      setIsCheckingRedirect(false);
    }).catch((error) => {
      console.error("Redirect Result Error:", error);
      setIsCheckingRedirect(false);
    });
  }, [auth, onUser]);

  const handleGoogleSignIn = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!auth) return;
    setIsSigningIn(true);
    
    try {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        
        if ((window as any).flutter_inappwebview) {
            (window as any).flutter_inappwebview.callHandler('requestGoogleSignIn');
            return;
        }
        
        await signInWithRedirect(auth, provider);
    } catch (error: any) {
        console.error("Google Sign-In Error:", error);
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

  if (isCheckingRedirect || isSigningIn) {
      return <AuthLoader />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-6 font-body overflow-x-hidden relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-sm z-10">
        <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 bg-white rounded-[2.5rem] shadow-2xl flex items-center justify-center mb-6 border-4 border-secondary animate-bounce-subtle">
                <GalaxyLogo className="w-14 h-14 text-primary" />
            </div>
            <h1 className="text-4xl font-black text-foreground tracking-tighter">
            Ai Atlas
            </h1>
            <p className="mt-2 text-[10px] text-muted-foreground font-black uppercase tracking-[0.3em] text-center opacity-60">
            Gateway to Intelligence
            </p>
        </div>

        <div className="w-full">
           <EmailAuth />
        </div>
        
        <div className="relative my-8 w-full">
            <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-muted-foreground/10" />
            </div>
            <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
                <span className="bg-background px-4 text-muted-foreground/40">
                Quick Connect
                </span>
            </div>
        </div>

        <div className="w-full">
            <GoogleSignInButton
            onClick={handleGoogleSignIn}
            isSigningIn={isSigningIn}
            />
        </div>

        <p className="text-[10px] font-black text-muted-foreground/40 max-w-sm mt-12 text-center uppercase tracking-widest">
            AI Secured Protocol • v1.2
        </p>
      </div>

      <style jsx global>{`
        @keyframes bounce-subtle {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        .animate-bounce-subtle {
            animation: bounce-subtle 4s ease-in-out infinite;
        }
        .ease-spring {
            transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>
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
        <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8 text-center animate-fade-in-up">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8">
                <MailCheck className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-3xl font-black mb-4 tracking-tight">Verify Your Email</h1>
            <p className="text-sm text-muted-foreground mb-10 leading-relaxed max-w-xs mx-auto">
                We've sent a secure link to <br/><strong>{user.email}</strong>. <br/>
                Please check your inbox to continue.
            </p>
            <Button onClick={() => window.location.reload()} className="w-full max-w-xs h-14 rounded-full text-base font-black shadow-xl shadow-primary/20">
                I've Verified My Email
            </Button>
            <Button variant="link" onClick={() => signOut(auth)} className="mt-6 font-bold text-xs text-muted-foreground uppercase tracking-widest">
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
