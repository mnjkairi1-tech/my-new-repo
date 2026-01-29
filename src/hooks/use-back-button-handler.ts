
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useCustomBack = () => {
  const router = useRouter();

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      // Potentially handle state differently if needed
      // For now, we let the browser handle the back navigation,
      // and Next.js router will pick up the URL change.
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [router]);
};

export default useCustomBack;

    