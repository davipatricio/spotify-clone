import { create } from 'zustand';

interface UserSettingsState {
  volume: number;
  isCurrentDevice: boolean;
  shuffle: boolean;
  repeat: boolean;
  setSettings: (settings: Partial<UserSettingsState>) => void;
}

export const useUserSettings = create<UserSettingsState>((set) => ({
  volume: 50,
  isCurrentDevice: true,
  shuffle: false,
  repeat: false,
  setSettings: (settings) =>
    set((...prev) => ({
      ...prev,
      ...settings,
    })),
}));
