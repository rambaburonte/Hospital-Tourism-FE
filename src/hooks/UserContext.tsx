import { useEffect } from 'react';
import { useUser, useAuth } from '@clerk/clerk-react';

const LOCAL_USER_KEY = 'user_info';

export const useUserSync = (): void => {
  const { user } = useUser();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn && user) {
      const userData = {
        id: user.id,
        name: user.fullName,
        email: user.primaryEmailAddress?.emailAddress,
        imageUrl: user.imageUrl,
      };

      localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(userData));
    } else {
      localStorage.removeItem(LOCAL_USER_KEY);
    }
  }, [isSignedIn, user]);
};
