import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from './theme';

type Props = {
  width?: number;
};

// Tall hero card sized visually close to the screenshot
// Top hero area and a bottom info sheet with rounded corners
const TrendingTaskCard = ({ width }: Props) => {
  const theme = useTheme();
  return (
    <View style={[styles.card, width ? { width } : null]}> 
      <View style={styles.hero}>
        <View style={styles.logo} />
        <View style={styles.sound} />
      </View>
      <View style={[styles.info, { backgroundColor: theme.surface }] }>
        <View style={styles.infoInner}>
          <Text style={[styles.title, { color: theme.textPrimary }]}>Spotify Refresher</Text>
          <View style={styles.row}>
            <View style={[styles.iconCircle, { backgroundColor: theme.border }]} />
            <Text style={[styles.rowText, { color: theme.textSecondary }]}>07:30 PM</Text>
          </View>
          <View style={styles.row}>
            <View style={[styles.iconSquare, { backgroundColor: theme.border }]} />
            <Text style={[styles.rowText, { color: theme.textSecondary }]}>Saturday, June 7  -  2 days from now</Text>
          </View>
          <View style={styles.row}>
            <View style={[styles.iconPin, { backgroundColor: theme.border }]} />
            <Text style={[styles.rowText, { color: theme.textSecondary }]}>Independence Brewing Co. - Powai</Text>
          </View>
        </View>
        <View style={[styles.ribbon, { backgroundColor: theme.accent }]}>
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
    height: 300,
    backgroundColor: '#000',
  },
  logo: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 100,
    height: 28,
    backgroundColor: '#fff',
    borderRadius: 6,
    opacity: 0.9,
  },
  sound: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 28,
    height: 28,
    backgroundColor: '#fff',
    borderRadius: 6,
    opacity: 0.9,
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
    color: '#3d3d3d',
    fontSize: 16,
  },
  iconCircle: { width: 22, height: 22, borderRadius: 11, backgroundColor: '#cfcfcf' },
  iconSquare: { width: 22, height: 22, borderRadius: 6, backgroundColor: '#cfcfcf' },
  iconPin: { width: 22, height: 22, borderRadius: 11, backgroundColor: '#cfcfcf' },
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


