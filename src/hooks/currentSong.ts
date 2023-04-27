import { create } from 'zustand';

interface CurrentSongState {
  name: string;
  artists: string[];
  albumImage: string;
  albumUrl: string;

  setSong: (song: Omit<CurrentSongState, 'setSong'>) => void;
}

const DEMO_SONG: Omit<CurrentSongState, 'setSong'> = {
  name: 'Too Many Nights (feat. Don Toliver & with Future)',
  artists: ['Metro Boomin', 'Future', 'Don Toliver', 'Don Toliver', 'Don Toliver', 'Don Toliver', 'Don Toliver', 'Don Toliver', 'Don Toliver'],
  albumImage:
    'https://i.scdn.co/image/ab67616d00001e02cdce39ecb633bea9ef7705a6',
  albumUrl: 'https://open.spotify.com/album/7txGsnDSqVMoRl6RQ9XyZP',
};

export const useCurrentSong = create<CurrentSongState>((set) => ({
  ...DEMO_SONG,

  setSong: (song) => set({ ...song }),
}));
