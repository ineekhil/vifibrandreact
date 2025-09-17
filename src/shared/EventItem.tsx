import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from './theme';
import Svg, { Path } from 'react-native-svg';

type Props = {
  title: string;
  date: string;
  location: string;
};

const EventItem = ({ title, date, location }: Props) => {
  const theme = useTheme();
  const isDark = theme.background === '#000000';
  
  const renderLogo = () => {
    if (title === 'Spotify Refresher') {
      return (
        <View style={[styles.logoContainer, { backgroundColor: '#1DB954' }]}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" fill="#ffffff"/>
          </Svg>
        </View>
      );
    } else if (title === 'VF PARALLEL') {
      return (
        <View style={[styles.logoContainer, { backgroundColor: '#FF6B35' }]}>
          <Text style={styles.vfText}>VF</Text>
        </View>
      );
    }
    return <View style={[styles.logoContainer, { backgroundColor: '#ddd' }]} />;
  };

  return (
    <View style={styles.wrapper}>
      {renderLogo()}
      <View style={styles.right}>
        <Text style={[styles.title, { color: isDark ? '#ffffff' : '#000000' }]}>{title}</Text>
        <View style={styles.infoRow}>
          <Svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <Path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" fill={isDark ? '#ffffff' : '#666666'}/>
          </Svg>
          <Text style={[styles.sub, { color: isDark ? '#ffffff' : '#666666' }]}>{date}</Text>
        </View>
        <View style={styles.infoRow}>
          <Svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <Path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill={isDark ? '#ffffff' : '#666666'}/>
          </Svg>
          <Text style={[styles.sub, { color: isDark ? '#ffffff' : '#666666' }]}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vfText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  right: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  sub: {
    marginLeft: 8,
    fontSize: 14,
  },
});

export default EventItem;


