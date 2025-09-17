import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from './theme';
import SegmentedControl from './SegmentedControl';

const Header = ({ title, showSegmentedControl = true }: { 
  title?: string,
  showSegmentedControl?: boolean 
}) => {
  const theme = useTheme();
  const [activeSegment, setActiveSegment] = useState(0);
  
  const segments = ['Explore', 'My tasks', 'Insights'];

  return (
    <View style={styles.container}>
      {title && (
        <View style={styles.titleWrapper}>
          <View style={styles.left}>
            <Text style={[styles.title, { color: theme.textPrimary }]}>{title}</Text>
          </View>
          <View style={styles.right}>
            <TouchableOpacity style={[styles.icon, { backgroundColor: theme.textPrimary }]} />
            <TouchableOpacity style={[styles.avatar, { backgroundColor: theme.textSecondary }]} />
          </View>
        </View>
      )}
      
      {showSegmentedControl && (
        <View style={styles.segmentedControlWrapper}>
          <SegmentedControl 
            segments={segments}
            activeIndex={activeSegment}
            onSegmentChange={setActiveSegment}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  icon: {
    width: 24,
    height: 24,
    borderRadius: 6,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  segmentedControlWrapper: {
    alignItems: 'center',
  },
});

export default Header;


