import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from './theme';

const SegmentedControl = ({ segments, activeIndex = 0, onSegmentChange }: { 
  segments: string[], 
  activeIndex?: number,
  onSegmentChange?: (index: number) => void 
}) => {
  const [active, setActive] = useState(activeIndex);
  const theme = useTheme();
  
  const handlePress = (index: number) => {
    setActive(index);
    onSegmentChange?.(index);
  };

  const isDark = theme.background === '#000000';
  
  return (
    <View style={[styles.wrapper, { backgroundColor: isDark ? '#2a2a2a' : '#f5f5f5' }]}>
      {segments.map((label, index) => {
        const selected = index === active;
        return (
          <TouchableOpacity
            key={label}
            style={[
              styles.segment, 
              selected && [styles.activeSegment, { backgroundColor: isDark ? '#ffffff' : '#ffffff' }]
            ]}
            onPress={() => handlePress(index)}
            activeOpacity={0.8}
          >
            <Text style={[
              styles.segmentText, 
              { color: selected ? (isDark ? '#000000' : '#000000') : (isDark ? '#ffffff' : '#666666') }
            ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    padding: 6,
    borderRadius: 16,
  },
  segment: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeSegment: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  segmentText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SegmentedControl;


