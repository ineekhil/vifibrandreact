import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '../components/Header.tsx';
import TaskCardDetailed from '../components/TaskCardDetailed.tsx';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useTheme } from '../components/theme';
import { Task } from '../types';

type AllTasksScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AllTasks'>;

interface Props {
  navigation: AllTasksScreenNavigationProp;
}

const AllTasksScreen = ({ navigation }: Props) => {
  const theme = useTheme();
  
  const handleBackPress = () => {
    navigation.goBack();
  };


  const tasks: Task[] = [
    {
      id: '1',
      title: 'How Spotify shapes your moments, memories, and every beat of your life.',
      brand: 'spotify',
      type: 'Photo',
      timeLeft: '2 weeks to go',
      dueDate: '15 Jun, 11:59 PM',
    },
    {
      id: '2',
      title: 'Order from Blinkit in your posts',
      brand: 'muscleblaze',
      type: 'Design',
      timeLeft: '1 week to go',
      dueDate: '10 Jun, 11:59 PM',
    },
    {
      id: '3',
      title: 'How Spotify shapes your moments, memories, and every beat of your life.',
      brand: 'spotify',
      type: 'Photo',
      timeLeft: '3 days to go',
      dueDate: '8 Jun, 11:59 PM',
    },
    {
      id: '4',
      title: 'Order from Blinkit in your posts',
      brand: 'muscleblaze',
      type: 'Design',
      timeLeft: '5 days to go',
      dueDate: '12 Jun, 11:59 PM',
    },
    {
      id: '5',
      title: 'How Spotify shapes your moments, memories, and every beat of your life.',
      brand: 'spotify',
      type: 'Photo',
      timeLeft: '1 day to go',
      dueDate: '6 Jun, 11:59 PM',
    },
    {
      id: '6',
      title: 'Order from Blinkit in your posts',
      brand: 'muscleblaze',
      type: 'Design',
      timeLeft: '4 days to go',
      dueDate: '11 Jun, 11:59 PM',
    },
    {
      id: '7',
      title: 'How Spotify shapes your moments, memories, and every beat of your life.',
      brand: 'spotify',
      type: 'Photo',
      timeLeft: '6 days to go',
      dueDate: '13 Jun, 11:59 PM',
    },
    {
      id: '8',
      title: 'Order from Blinkit in your posts',
      brand: 'muscleblaze',
      type: 'Design',
      timeLeft: '2 days to go',
      dueDate: '9 Jun, 11:59 PM',
    },
    {
      id: '9',
      title: 'How Spotify shapes your moments, memories, and every beat of your life.',
      brand: 'spotify',
      type: 'Photo',
      timeLeft: '1 week to go',
      dueDate: '14 Jun, 11:59 PM',
    },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.screenBackground }]}>
      <Header title="All Tasks" onBackPress={handleBackPress} showSegmentedControl={false} showRightIcons={false} />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={[styles.tasksContainer, { backgroundColor: theme.cardBackground, borderColor: theme.cardBorder }]}>
          <View style={styles.tasksGrid}>
            {tasks.map((task) => (
              <TaskCardDetailed
                key={task.id}
                title={task.title}
                brand={task.brand}
                type={task.type}
                timeLeft={task.timeLeft}
                dueDate={task.dueDate}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingVertical: 16,
  },
  tasksContainer: {
    borderRadius: 12,
    marginHorizontal: 16,
    borderWidth: 1,
    alignSelf: 'center',
    padding: 16,
  },
  tasksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
});

export default AllTasksScreen;
