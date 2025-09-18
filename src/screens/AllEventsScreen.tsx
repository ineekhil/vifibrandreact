import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '../shared/Header.tsx';
import EventsCard from '../shared/EventsCard.tsx';
import { RootStackParamList } from '../navigation/AppNavigator';

type AllEventsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AllEvents'>;

interface Props {
  navigation: AllEventsScreenNavigationProp;
}

const AllEventsScreen = ({ navigation }: Props) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  const events = [
    {
      id: '1',
      title: 'Spotify Refresher',
      date: 'June 7',
      time: '07:30 PM',
      location: 'Independence Brewing Co. - Powai',
      icon: 'spotify' as const,
      image: true,
    },
    {
      id: '2',
      title: 'VF PARALLEL',
      date: 'June 7',
      time: '07:30 PM',
      location: 'Independence Brewing Co. - Powai',
      icon: 'vf' as const,
      image: true,
    },
    {
      id: '3',
      title: 'Spotify Refresher',
      date: 'June 8',
      time: '08:00 PM',
      location: 'Mumbai Central - Andheri',
      icon: 'spotify' as const,
      image: true,
    },
    {
      id: '4',
      title: 'VF PARALLEL',
      date: 'June 8',
      time: '09:00 PM',
      location: 'Phoenix MarketCity - Kurla',
      icon: 'vf' as const,
      image: true,
    },
    {
      id: '5',
      title: 'Spotify Refresher',
      date: 'June 9',
      time: '07:00 PM',
      location: 'High Street Phoenix - Lower Parel',
      icon: 'spotify' as const,
      image: true,
    },
    {
      id: '6',
      title: 'VF PARALLEL',
      date: 'June 9',
      time: '08:30 PM',
      location: 'Inorbit Mall - Malad',
      icon: 'vf' as const,
      image: true,
    },
    {
      id: '7',
      title: 'Spotify Refresher',
      date: 'June 10',
      time: '06:30 PM',
      location: 'R City Mall - Ghatkopar',
      icon: 'spotify' as const,
      image: true,
    },
    {
      id: '8',
      title: 'VF PARALLEL',
      date: 'June 10',
      time: '07:45 PM',
      location: 'Infiniti Mall - Andheri',
      icon: 'vf' as const,
      image: true,
    },
    {
      id: '9',
      title: 'Spotify Refresher',
      date: 'June 11',
      time: '08:15 PM',
      location: 'Crossroads Mall - Powai',
      icon: 'spotify' as const,
      image: true,
    },
    {
      id: '10',
      title: 'VF PARALLEL',
      date: 'June 11',
      time: '09:30 PM',
      location: 'Growel 101 - Kandivali',
      icon: 'vf' as const,
      image: true,
    },
    {
      id: '11',
      title: 'Spotify Refresher',
      date: 'June 12',
      time: '07:20 PM',
      location: 'Nexus Seawoods - Navi Mumbai',
      icon: 'spotify' as const,
      image: true,
    },
    {
      id: '12',
      title: 'VF PARALLEL',
      date: 'June 12',
      time: '08:45 PM',
      location: 'Viviana Mall - Thane',
      icon: 'vf' as const,
      image: true,
    },
    {
      id: '13',
      title: 'Spotify Refresher',
      date: 'June 13',
      time: '06:45 PM',
      location: 'Phoenix MarketCity - Kurla',
      icon: 'spotify' as const,
      image: true,
    },
    {
      id: '14',
      title: 'VF PARALLEL',
      date: 'June 13',
      time: '08:00 PM',
      location: 'High Street Phoenix - Lower Parel',
      icon: 'vf' as const,
      image: true,
    },
    {
      id: '15',
      title: 'Spotify Refresher',
      date: 'June 14',
      time: '07:30 PM',
      location: 'Inorbit Mall - Malad',
      icon: 'spotify' as const,
      image: true,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="All Events" onBackPress={handleBackPress} showSegmentedControl={false} showRightIcons={false} />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.eventsContainer}>
          {events.map((event, index) => (
            <View key={event.id}>
              <EventsCard
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                icon={event.icon}
                image={event.image}
              />
              {index < events.length - 1 && (
                <View style={styles.separator} />
              )}
            </View>
          ))}
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
  eventsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignSelf: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#E8F4FD',
    marginHorizontal: 16,
    borderStyle: 'dashed',
  },
});

export default AllEventsScreen;
