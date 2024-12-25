import {create} from 'zustand';
import { persist } from 'zustand/middleware';

type UserState = {
  user: { username: string; email: string } | null;
  token: string | null;
  setUser: (user: { username: string; email: string }, token: string) => void;
  logout: () => void;
};

const useUserStore = create(
  persist<UserState>(
    (set) => ({
      user: null,
      token: null,
      setUser: (user, token) => set({ user, token }),
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: 'user-store', // The key in localStorage
    }
  )
);

export default useUserStore;
