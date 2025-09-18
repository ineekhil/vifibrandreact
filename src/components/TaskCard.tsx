import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from './theme';
import Svg, { Path } from 'react-native-svg';

const TaskCard = ({ brand, type }: { brand: string; type: string }) => {
  const theme = useTheme();
  const isDark = theme.background === '#000000';
  
  const renderTopSection = () => {
    if (brand === 'Spotify') {
      return (
        <View style={[styles.topSection, { backgroundColor: '#1DB954' }]}>
          <View style={styles.brandContainer}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" fill="#ffffff"/>
            </Svg>
            <Text style={styles.brandText}>Spotify</Text>
          </View>
          <View style={styles.typeContainer}>
            <Svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <Path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" fill="#F56040"/>
            </Svg>
            <Text style={styles.typeText}>REELS ON INSTAGRAM</Text>
          </View>
        </View>
      );
    } else if (brand === 'Muscle Blaze') {
      return (
        <View style={[styles.topSection, { backgroundColor: '#FFE15D' }]}>
          <View style={styles.brandContainer}>
            <Text style={[styles.brandText, { color: '#000000' }]}>MB MUSCLEBLAZE</Text>
          </View>
          <View style={styles.typeContainer}>
            <Svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <Path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" fill="#F56040"/>
            </Svg>
            <Text style={[styles.typeText, { color: '#000000' }]}>POST ON INSTAGRAM</Text>
          </View>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={[styles.card, { backgroundColor: isDark ? '#000000' : '#ffffff' }]}>
      {renderTopSection()}
      <View style={[styles.bottomSection, { backgroundColor: isDark ? '#000000' : '#ffffff' }]}>
        <Text style={[styles.brandName, { color: isDark ? '#ffffff' : '#000000' }]}>{brand}</Text>
        <Text style={[styles.description, { color: isDark ? '#ffffff' : '#000000' }]}>
          {brand === 'Spotify' 
            ? 'How Spotify shapes your moments, memories, and every beat of your life.'
            : 'Fuel your grind—post your gains on Instagram.'
          }
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
  },
  topSection: {
    padding: 16,
    alignItems: 'center',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  brandText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    marginLeft: 8,
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
    marginLeft: 6,
  },
  bottomSection: {
    padding: 16,
  },
  brandName: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default TaskCard;


