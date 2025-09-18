import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useTheme } from './theme';
import Svg, { Path } from 'react-native-svg';

type Props = {
  brand: 'spotify' | 'muscleblaze';
  taskType: 'reels' | 'post';
  title: string;
  description: string;
  onPress?: () => void;
};

const AssignedTaskCard = ({ 
  brand, 
  taskType, 
  title, 
  description, 
  onPress 
}: Props) => {
  const theme = useTheme();
  const isDark = theme.background === '#000000';

  const handlePress = () => {
    try {
      if (onPress) {
        onPress();
      }
    } catch (error) {
      console.error('Error handling task card press:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={[
        styles.topSection, 
        { backgroundColor: brand === 'spotify' ? '#1DB954' : '#FF6B35' }
      ]}>
        <View style={styles.brandHeader}>
          {brand === 'spotify' ? (
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" fill="white"/>
            </Svg>
          ) : (
            <View style={styles.mbLogo}>
              <Text style={styles.mbText}>MB</Text>
            </View>
          )}
          <Text style={styles.brandName}>
            {brand === 'spotify' ? 'Spotify' : 'MUSCLEBLAZE'}
          </Text>
        </View>

        <View style={styles.taskBanner}>
          <View style={styles.taskIcon}>
            {taskType === 'reels' ? (
              <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="url(#gradient)"/>
              </Svg>
            ) : (
              <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="url(#gradient)"/>
              </Svg>
            )}
          </View>
          <Text style={styles.taskText}>
            {taskType === 'reels' ? 'REELS ON\nINSTAGRAM' : 'POST ON\nINSTAGRAM'}
          </Text>
        </View>
      </View>

      <View style={[styles.bottomSection, { backgroundColor: isDark ? '#ffffff' : '#ffffff' }]}>
        <Text style={[styles.title, { color: isDark ? '#000000' : '#000000' }]}>{title}</Text>
        <Text style={[styles.description, { color: isDark ? '#666666' : '#666666' }]}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    marginBottom: 12,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  topSection: {
    padding: 16,
    paddingBottom: 20,
  },
  brandHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  brandName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
  },
  mbLogo: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mbText: {
    color: '#FF6B35',
    fontSize: 12,
    fontWeight: '700',
  },
  taskBanner: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskIcon: {
    marginRight: 12,
  },
  taskText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14,
  },
  bottomSection: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default AssignedTaskCard;
