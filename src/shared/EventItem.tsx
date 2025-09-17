import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from './theme';

type Props = {
  title: string;
  date: string;
  location: string;
};

const EventItem = ({ title, date, location }: Props) => {
  const theme = useTheme();
  return (
    <View style={styles.wrapper}>
      <View style={[styles.leftThumb, { backgroundColor: theme.border }]} />
      <View style={styles.right}>
        <Text style={[styles.title, { color: theme.textPrimary }]}>{title}</Text>
        <Text style={[styles.sub, { color: theme.textSecondary }]}>{date}</Text>
        <Text style={[styles.sub, { color: theme.textSecondary }]}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 8,
  },
  leftThumb: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
  right: {
    flex: 1,
  },
  title: {
    fontWeight: '700',
  },
  sub: {
    color: '#666',
    marginTop: 2,
    fontSize: 12,
  },
});

export default EventItem;


