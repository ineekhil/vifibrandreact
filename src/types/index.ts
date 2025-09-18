// Navigation types
export type { RootStackParamList } from '../navigation/AppNavigator';

// Component prop types
export interface BaseScreenProps {
  navigation: any; // Will be properly typed by each screen
}

// Task types
export interface Task {
  id: string;
  title: string;
  brand: string;
  type: string;
  timeLeft: string;
  dueDate: string;
}

// Event types
export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  icon: 'spotify' | 'vf';
  image: boolean;
}

// Brand types
export type BrandType = 'spotify' | 'blinkit' | 'muscleblaze' | 'vf';

// Task type variants
export type TaskType = 'Photo' | 'Design' | 'reels' | 'post';

// Theme types
export type { Theme } from '../components/theme';
