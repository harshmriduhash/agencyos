import { create } from 'zustand';
import { getClientInfo } from '@/lib/mockApi';

interface ClientInfo {
  name: string;
  email: string;
  company: string;
  avatarUrl: string;
}

interface AuthState {
  isAuthenticated: boolean;
  client: ClientInfo | null;
  login: (token: string) => Promise<void>;
  logout: () => void;
  setClientInfo: (info: ClientInfo) => void;
}

const TOKEN_KEY = 'agencyos_jwt';

export const useAuth = create<AuthState>((set) => ({
  isAuthenticated: typeof window !== 'undefined' && !!localStorage.getItem(TOKEN_KEY),
  client: null,
  login: async (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
    const client = await getClientInfo();
    set({ isAuthenticated: true, client });
  },
  logout: () => {
    localStorage.removeItem(TOKEN_KEY);
    set({ isAuthenticated: false, client: null });
  },
  setClientInfo: (info: ClientInfo) => set({ client: info }),
})); 