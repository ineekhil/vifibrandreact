import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from './theme';
import Svg, { Path } from 'react-native-svg';

interface Props {
  title: string;
  brand: string;
  type: string;
  timeLeft: string;
  dueDate: string;
  onPress?: () => void;
}

const TaskCardDetailed = ({ 
  title, 
  brand, 
  type, 
  timeLeft, 
  dueDate, 
  onPress 
}: Props) => {
  const theme = useTheme();
  const isDark = theme.background === '#000000';

  const getBrandColor = (brandName: string) => {
    switch (brandName.toLowerCase()) {
      case 'spotify':
        return theme.brandColors.spotify;
      case 'muscleblaze':
        return theme.brandColors.muscleblaze;
      case 'blinkit':
        return theme.brandColors.blinkit;
      default:
        return theme.brandColors.default;
    }
  };

  const getBrandIcon = (brandName: string) => {
    switch (brandName.toLowerCase()) {
      case 'spotify':
        return (
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" fill="#ffffff"/>
          </Svg>
        );
      default:
        return (
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#ffffff"/>
          </Svg>
        );
    }
  };

  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: theme.cardBackground, borderColor: theme.cardBorder }]} onPress={onPress}>
      {/* Top Section - Brand Background */}
      <View style={[
        styles.topSection, 
        { backgroundColor: getBrandColor(brand) }
      ]}>
        <View style={styles.brandContainer}>
          {getBrandIcon(brand)}
          <Text style={styles.brandText}>{brand}</Text>
        </View>
        <View style={styles.typeContainer}>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={styles.contentSection}>
        <Text style={[styles.title, { color: theme.textPrimary }]} numberOfLines={2}>
          {title}
        </Text>
        
        <View style={styles.detailsContainer}>
          <View style={styles.timeContainer}>
            <Text style={[styles.timeLabel, { color: theme.textSecondary }]}>Time left</Text>
            <Text style={[styles.timeValue, { color: theme.textPrimary }]}>{timeLeft}</Text>
          </View>
          <View style={styles.dueContainer}>
            <Text style={[styles.dueLabel, { color: theme.textSecondary }]}>Due date</Text>
            <Text style={[styles.dueValue, { color: theme.textPrimary }]}>{dueDate}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 16,
  },
  topSection: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
    fontFamily: 'Nunito',
  },
  typeContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  typeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Nunito',
  },
  contentSection: {
    padding: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    marginBottom: 12,
    fontFamily: 'Nunito',
  },
  detailsContainer: {
    gap: 8,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeLabel: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Nunito',
  },
  timeValue: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Nunito',
  },
  dueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dueLabel: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Nunito',
  },
  dueValue: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Nunito',
  },
});

export default TaskCardDetailed;
