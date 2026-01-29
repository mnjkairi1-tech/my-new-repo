'use client';

import { useFirebase } from '@/firebase/provider';
import { type UserHookResult } from '@/firebase/provider';

/**
 * Hook to access the current user's authentication state.
 * This is a thin wrapper around useFirebase() to isolate user-related concerns.
 */
export const useUser = (): UserHookResult => {
  const { user, isUserLoading, userError } = useFirebase();
  return { user, isUserLoading, userError };
};
