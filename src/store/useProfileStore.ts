import { create } from 'zustand';
import { Profile } from '@/types/profile';

interface ProfileStore {
  profile: Profile;
  setProfile: (profile: Partial<Profile>) => void;
  resetProfile: () => void;
}

const initialProfile: Profile = {
  name: '',
  role: '',
  bio: '',
  skills: [],
  projects: [],
  theme: 'light',
};

export const useProfileStore = create<ProfileStore>((set) => ({
  profile: initialProfile,
  setProfile: (newProfile) =>
    set((state) => ({
      profile: { ...state.profile, ...newProfile },
    })),
  resetProfile: () => set({ profile: initialProfile }),
})); 