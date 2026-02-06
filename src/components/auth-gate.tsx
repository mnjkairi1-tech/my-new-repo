'use client';
import { useAuth } from '@/firebase';
import {
  GoogleAuthProvider,
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithCustomToken,
} from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from './ui/button';
import { GalaxyLogo } from './galaxy-logo';
import { useUser } from '@/firebase/auth/use-user';
import { Input } from './ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { useToast } from '@/hooks/use-toast';
import { AuthLoader } from './auth-loader';
import { cn } from '@/lib/utils';
import { AuthState } from './auth-cartoon';

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

const signInSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

const signUpSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' }),
});

type AuthFormProps = {
  isSigningIn: boolean;
  setIsSigningIn: (isSigningIn: boolean) => void;
  onUser: (user: User) => void;
  onSwitch: () => void;
};

const SignInForm = ({
  isSigningIn,
  setIsSigningIn,
  onUser,
  onSwitch,
}: AuthFormProps) => {
  const auth = useAuth();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    if (!auth) return;
    setIsSigningIn(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      onUser(userCredential.user);
    } catch (error: any) {
       let description = 'An unexpected error occurred. Please try again.';
      if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
        description = 'Invalid email or password. Please try again.';
      }
      toast({ variant: 'destructive', title: 'Sign In Failed', description });
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <div className="text-center text-foreground">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} className="h-12 rounded-xl" />
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
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} className="h-12 rounded-xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSigningIn} className="w-full h-12 rounded-xl text-base">
            {isSigningIn ? 'Signing In...' : 'Login'}
          </Button>
        </form>
      </Form>
      <p className="mt-4">Don't have an account? <span onClick={onSwitch} className="text-primary cursor-pointer font-semibold">Register</span></p>
    </div>
  );
};

const SignUpForm = ({
  isSigningIn,
  setIsSigningIn,
  onUser,
  onSwitch,
}: AuthFormProps) => {
  const auth = useAuth();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    if (!auth) return;
    setIsSigningIn(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      onUser(userCredential.user);
    } catch (error: any) {
      let description = 'An unexpected error occurred. Please try again.';
      if (error.code === 'auth/email-already-in-use') {
        description = 'This email is already in use. Please sign in instead.';
      }
      toast({ variant: 'destructive', title: 'Sign Up Failed', description });
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <div className="text-center text-foreground">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} className="h-12 rounded-xl" />
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
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} className="h-12 rounded-xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSigningIn} className="w-full h-12 rounded-xl text-base">
            {isSigningIn ? 'Registering...' : 'Register'}
          </Button>
        </form>
      </Form>
      <p className="mt-4">Already have an account? <span onClick={onSwitch} className="text-primary cursor-pointer font-semibold">Login</span></p>
    </div>
  );
};


function AuthScreen({ onUser }: { onUser: (user: User) => void; }) {
  const auth = useAuth();
  const { toast } = useToast();
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
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

        <div className={cn("relative w-full max-w-sm h-[420px] overflow-hidden rounded-2xl bg-card/80 backdrop-blur-sm soft-shadow")}>
            <div className={cn(
              "absolute inset-0 transition-all duration-700 ease-in-out p-6",
              authMode === 'signin' ? 'translate-x-0 opacity-100 blur-0' : '-translate-x-full opacity-0 blur-md'
            )}>
              <SignInForm onUser={onUser} isSigningIn={isSigningIn} setIsSigningIn={setIsSigningIn} onSwitch={() => setAuthMode('signup')} setAuthState={() => {}} />
            </div>

            <div className={cn(
              "absolute inset-0 transition-all duration-700 ease-in-out p-6",
              authMode === 'signup' ? 'translate-x-0 opacity-100 blur-0' : 'translate-x-full opacity-0 blur-md'
            )}>
              <SignUpForm onUser={onUser} isSigningIn={isSigningIn} setIsSigningIn={setIsSigningIn} onSwitch={() => setAuthMode('signin')} setAuthState={() => {}}/>
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
