import { create } from 'zustand';

interface UserSettingsState {
  isCurrentDevice: boolean;
  repeat: boolean;
  setSettings(settings: Partial<UserSettingsState>): void;
  shuffle: boolean;
  volume: number;
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
