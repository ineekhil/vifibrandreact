import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from './theme';

const TaskCard = ({ brand, type }: { brand: string; type: string }) => {
  const theme = useTheme();
  return (
    <View style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }] }>
      <View style={[styles.thumbnail, { backgroundColor: theme.border }]} />
      <View style={styles.metaRow}>
        <View style={[styles.brandDot, brand === 'Spotify' ? styles.dotGreen : styles.dotYellow]} />
        <Text style={[styles.brand, { color: theme.textSecondary }]}>{brand}</Text>
      </View>
      <View style={styles.titleRow}>
        <View style={styles.igBadge} />
        <Text style={[styles.title, { color: theme.textPrimary }]}>{type}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  thumbnail: {
    height: 90,
    backgroundColor: '#ccc',
    borderRadius: 10,
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  brandDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#999',
  },
  dotGreen: { backgroundColor: '#1DB954' },
  dotYellow: { backgroundColor: '#FFB703' },
  brand: {
    fontSize: 12,
    color: '#555',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 6,
  },
  igBadge: {
    width: 16,
    height: 16,
    borderRadius: 4,
    backgroundColor: '#F56040',
  },
  title: {
    fontWeight: '700',
    fontSize: 13,
  },
});

export default TaskCard;


