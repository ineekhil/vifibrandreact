import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import EventsCard from './EventsCard';
import { useTheme } from './theme';
import { RootStackParamList } from '../navigation/AppNavigator';

type EventsListNavigationProp = StackNavigationProp<RootStackParamList, 'Brands'>;

const EventsList = () => {
  const theme = useTheme();
  const navigation = useNavigation<EventsListNavigationProp>();

  const handleSeeAllPress = () => {
    navigation.navigate('AllEvents');
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
      date: 'June 7',
      time: '07:30 PM',
      location: 'Independence Brewing Co. - Powai',
      icon: 'spotify' as const,
      image: true,
    },
    {
      id: '4',
      title: 'VF PARALLEL',
      date: 'June 7',
      time: '07:30 PM',
      location: 'Independence Brewing Co. - Powai',
      icon: 'vf' as const,
      image: true,
    },
  ];

  return (
    <View>
      <View style={styles.card}>
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
      <TouchableOpacity 
        style={[styles.seeAllBtn, { backgroundColor: theme.textPrimary }]}
        onPress={handleSeeAllPress}
      >
        <Text style={[styles.seeAllText, { color: theme.background }]}>See all →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignSelf: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#E8F4FD',
    marginHorizontal: 16,
    borderStyle: 'dashed',
  },
  seeAllBtn: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 8,
    marginHorizontal: 16,
    width: 358,
    alignSelf: 'center',
  },
  seeAllText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Nunito',
  },
});

export default EventsList;
