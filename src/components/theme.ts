import { useColorScheme } from 'react-native';

export type Theme = {
  background: string;
  surface: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  accent: string;
  cardBackground: string;
  cardBorder: string;
  screenBackground: string;
  brandColors: {
    spotify: string;
    muscleblaze: string;
    blinkit: string;
    default: string;
  };
  statusColors: {
    error: string;
    success: string;
    warning: string;
  };
};

const isValidHexColor = (color: string): boolean => {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
};

const validateTheme = (theme: Theme): boolean => {
  const requiredColors = [
    theme.background,
    theme.surface,
    theme.textPrimary,
    theme.textSecondary,
    theme.border,
    theme.accent,
    theme.cardBackground,
    theme.cardBorder,
    theme.screenBackground,
    theme.brandColors.spotify,
    theme.brandColors.muscleblaze,
    theme.brandColors.blinkit,
    theme.brandColors.default,
    theme.statusColors.error,
    theme.statusColors.success,
    theme.statusColors.warning,
  ];

  return requiredColors.every(color => isValidHexColor(color));
};

const lightTheme: Theme = {
  background: '#ffffff',
  surface: '#ffffff',
  textPrimary: '#0f0f0f',
  textSecondary: '#5a5a5a',
  border: '#e9e9e9',
  accent: '#0b8fad',
  cardBackground: '#FFFFFF',
  cardBorder: '#E0E0E0',
  screenBackground: '#F5F5F5',
  brandColors: {
    spotify: '#1DB954',
    muscleblaze: '#FF6B35',
    blinkit: '#00D4AA',
    default: '#6B7280',
  },
  statusColors: {
    error: '#FF0000',
    success: '#10B981',
    warning: '#F59E0B',
  },
};

const darkTheme: Theme = {
  background: '#000000',
  surface: '#121212',
  textPrimary: '#ffffff',
  textSecondary: '#e0e0e0',
  border: '#2a2a2a',
  accent: '#22b6d2',
  cardBackground: '#1E1E1E',
  cardBorder: '#3A3A3A',
  screenBackground: '#0F0F0F',
  brandColors: {
    spotify: '#1DB954',
    muscleblaze: '#FF6B35',
    blinkit: '#00D4AA',
    default: '#6B7280',
  },
  statusColors: {
    error: '#FF0000',
    success: '#10B981',
    warning: '#F59E0B',
  },
};

export const useTheme = (): Theme => {
  const scheme = useColorScheme();
  const selectedTheme = scheme === 'dark' ? darkTheme : lightTheme;
  
  if (!validateTheme(selectedTheme)) {
    console.warn('Theme validation failed, using light theme as fallback');
    return lightTheme;
  }
  
  return selectedTheme;
};


