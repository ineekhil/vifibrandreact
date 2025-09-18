import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '../shared/Header.tsx';
import AssignedTaskCard from '../shared/AssignedTaskCard.tsx';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useTheme } from '../shared/theme';

type AllTasksScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AllTasks'>;

interface Props {
  navigation: AllTasksScreenNavigationProp;
}

const AllTasksScreen = ({ navigation }: Props) => {
  const theme = useTheme();
  
  const handleBackPress = () => {
    navigation.goBack();
  };


  const tasks = [
    {
      id: '1',
      title: 'How Spotify shapes your moments, memories, and every beat of your life.',
      brand: 'Spotify',
      type: 'Photo',
      timeLeft: '2 weeks to go',
      dueDate: '15 Jun, 11:59 PM',
    },
    {
      id: '2',
      title: 'Order from Blinkit in your posts',
      brand: 'Blinkit',
      type: 'Design',
      timeLeft: '1 week to go',
      dueDate: '10 Jun, 11:59 PM',
    },
    {
      id: '3',
      title: 'How Spotify shapes your moments, memories, and every beat of your life.',
      brand: 'Spotify',
      type: 'Photo',
      timeLeft: '3 days to go',
      dueDate: '8 Jun, 11:59 PM',
    },
    {
      id: '4',
      title: 'Order from Blinkit in your posts',
      brand: 'Blinkit',
      type: 'Design',
      timeLeft: '5 days to go',
      dueDate: '12 Jun, 11:59 PM',
    },
    {
      id: '5',
      title: 'How Spotify shapes your moments, memories, and every beat of your life.',
      brand: 'Spotify',
      type: 'Photo',
      timeLeft: '1 day to go',
      dueDate: '6 Jun, 11:59 PM',
    },
    {
      id: '6',
      title: 'Order from Blinkit in your posts',
      brand: 'Blinkit',
      type: 'Design',
      timeLeft: '4 days to go',
      dueDate: '11 Jun, 11:59 PM',
    },
    {
      id: '7',
      title: 'How Spotify shapes your moments, memories, and every beat of your life.',
      brand: 'Spotify',
      type: 'Photo',
      timeLeft: '6 days to go',
      dueDate: '13 Jun, 11:59 PM',
    },
    {
      id: '8',
      title: 'Order from Blinkit in your posts',
      brand: 'Blinkit',
      type: 'Design',
      timeLeft: '2 days to go',
      dueDate: '9 Jun, 11:59 PM',
    },
    {
      id: '9',
      title: 'How Spotify shapes your moments, memories, and every beat of your life.',
      brand: 'Spotify',
      type: 'Photo',
      timeLeft: '1 week to go',
      dueDate: '14 Jun, 11:59 PM',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="All Tasks" onBackPress={handleBackPress} showSegmentedControl={false} showRightIcons={false} />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.tasksContainer}>
          <View style={styles.tasksGrid}>
            {tasks.map((task) => (
              <AssignedTaskCard
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
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingVertical: 16,
  },
  tasksContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
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
