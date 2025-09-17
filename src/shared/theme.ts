import { useColorScheme } from 'react-native';

export type Theme = {
  background: string;
  surface: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  accent: string;
};

const lightTheme: Theme = {
  background: '#ffffff',
  surface: '#ffffff',
  textPrimary: '#0f0f0f',
  textSecondary: '#5a5a5a',
  border: '#e9e9e9',
  accent: '#0b8fad',
};

const darkTheme: Theme = {
  background: '#000000',
  surface: '#121212',
  textPrimary: '#ffffff',
  textSecondary: '#e0e0e0',
  border: '#2a2a2a',
  accent: '#22b6d2',
};

export const useTheme = (): Theme => {
  const scheme = useColorScheme();
  return scheme === 'dark' ? darkTheme : lightTheme;
};


