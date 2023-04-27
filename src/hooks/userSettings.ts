import { create } from 'zustand';

interface UserSettingsState {
  volume: number;
  isCurrentDevice: boolean;
  setSettings: (settings: Partial<UserSettingsState>) => void;
}

export const useUserSettings = create<UserSettingsState>((set) => ({
  volume: 50,
  isCurrentDevice: true,
  setSettings: (settings) =>
    set((...prev) => ({
      ...prev,
      ...settings,
    })),
}));
