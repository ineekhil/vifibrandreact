import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from './theme';

const BrandChip = ({ label }: { label: string }) => {
  const theme = useTheme();
  return (
    <View style={[styles.wrapper, { backgroundColor: theme.surface, borderColor: theme.border, borderWidth: 1 }] }>
      <View style={[styles.logo, label === 'spotify' ? styles.logoGreen : styles.logoYellow]} />
      <Text style={[styles.text, { color: theme.textPrimary }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 16,
  },
  logo: {
    width: 24,
    height: 24,
    borderRadius: 6,
  },
  logoGreen: { backgroundColor: '#1DB954' },
  logoYellow: { backgroundColor: '#FFE15D' },
  text: {
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});

export default BrandChip;


