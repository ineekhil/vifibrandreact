import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from './theme';
import Svg, { Path } from 'react-native-svg';

type Props = {
  width?: number;
};

// Tall hero card sized visually close to the screenshot
// Top hero area and a bottom info sheet with rounded corners
const TrendingTaskCard = ({ width }: Props) => {
  const theme = useTheme();
  const isDark = theme.background === '#000000';
  
  return (
    <View style={[styles.card, width ? { width } : null]}> 
      <View style={[styles.hero, { backgroundColor: isDark ? '#000000' : '#1DB954' }]}>
        <View style={styles.logoContainer}>
          <Svg width="60" height="60" viewBox="0 0 24 24" fill="none">
            <Path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" fill={isDark ? '#1DB954' : '#ffffff'}/>
          </Svg>
          <Text style={[styles.spotifyText, { color: isDark ? '#1DB954' : '#ffffff' }]}>Spotify Refresher</Text>
        </View>
        <View style={styles.gradientOverlay} />
      </View>
      <View style={[styles.info, { backgroundColor: isDark ? '#000000' : '#ffffff' }] }>
        <View style={styles.infoInner}>
          <Text style={[styles.title, { color: isDark ? '#ffffff' : '#000000' }]}>Spotify Refresher</Text>
          <View style={styles.row}>
            <Svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill={isDark ? '#ffffff' : '#666666'}/>
            </Svg>
            <Text style={[styles.rowText, { color: isDark ? '#ffffff' : '#666666' }]}>07:30 PM</Text>
          </View>
          <View style={styles.row}>
            <Svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <Path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" fill={isDark ? '#ffffff' : '#666666'}/>
            </Svg>
            <Text style={[styles.rowText, { color: isDark ? '#ffffff' : '#666666' }]}>Saturday, June 7 - 2 days from now</Text>
          </View>
          <View style={styles.row}>
            <Svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <Path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill={isDark ? '#ffffff' : '#666666'}/>
            </Svg>
            <Text style={[styles.rowText, { color: isDark ? '#ffffff' : '#666666' }]}>Independence Brewing Co. - Powai</Text>
          </View>
        </View>
        <View style={[styles.ribbon, { backgroundColor: '#FF6B35' }]}>
          <Text style={styles.ribbonText}>New</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  hero: {
    height: 200,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  logoContainer: {
    alignItems: 'center',
    zIndex: 2,
  },
  spotifyText: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 8,
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: 100,
    backgroundColor: 'rgba(255, 107, 53, 0.3)',
  },
  info: {
    paddingTop: 16,
    paddingBottom: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  infoInner: {
    paddingRight: 56,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  rowText: {
    marginLeft: 10,
    fontSize: 14,
  },
  ribbon: {
    position: 'absolute',
    right: -40,
    top: -10,
    transform: [{ rotate: '45deg' }],
    backgroundColor: '#0b8fad',
    paddingVertical: 6,
    paddingHorizontal: 40,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  ribbonText: {
    color: '#fff',
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});

export default TrendingTaskCard;


