import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from './theme';
import Svg, { Path } from 'react-native-svg';

const BrandChip = ({ label }: { label: string }) => {
  const theme = useTheme();
  const isDark = theme.background === '#000000';
  
  const renderLogo = () => {
    if (label === 'spotify') {
      return (
        <View style={[styles.logo, styles.logoGreen]}>
          <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <Path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" fill="#ffffff"/>
          </Svg>
        </View>
      );
    } else if (label === 'blinkit') {
      return (
        <View style={[styles.logo, styles.logoYellow]}>
          <Text style={styles.blinkitText}>blinkit</Text>
        </View>
      );
    }
    return <View style={[styles.logo, styles.logoDefault]} />;
  };

  return (
    <View style={[styles.wrapper, { backgroundColor: isDark ? '#2a2a2a' : '#f5f5f5' }]}>
      {renderLogo()}
      <Text style={[styles.text, { color: isDark ? '#ffffff' : '#000000' }]}>Brand</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 12,
    width: 80,
    height: 80,
    justifyContent: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoGreen: { backgroundColor: '#1DB954' },
  logoYellow: { backgroundColor: '#FFE15D' },
  logoDefault: { backgroundColor: '#ddd' },
  blinkitText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#1DB954',
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default BrandChip;


