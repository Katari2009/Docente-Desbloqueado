import { useState, useCallback } from 'react';
import type { UserProfile } from '../types';

const PROFILE_KEY = 'gamified-teacher-profile';

export function useUserProfile(): [UserProfile | null, (profile: UserProfile | null) => void] {
  const [profile, setProfile] = useState<UserProfile | null>(() => {
    try {
      const item = window.localStorage.getItem(PROFILE_KEY);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Error reading profile from localStorage", error);
      return null;
    }
  });

  const setProfileAndStorage = useCallback((newProfile: UserProfile | null) => {
    try {
      if (newProfile) {
        window.localStorage.setItem(PROFILE_KEY, JSON.stringify(newProfile));
      } else {
        window.localStorage.removeItem(PROFILE_KEY);
      }
      setProfile(newProfile);
    } catch (error) {
      console.error("Error saving profile to localStorage", error);
    }
  }, []);

  return [profile, setProfileAndStorage];
}
