import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from './theme';
import SegmentedControl from './SegmentedControl';
import Svg, { Path } from 'react-native-svg';

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
            <TouchableOpacity style={styles.iconButton}>
              <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <Path d="M21 4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H21C22.1 20 23 19.1 23 18V6C23 4.9 22.1 4 21 4ZM21 18H3V8H21V18ZM21 6H3V6H21V6Z" fill={theme.textPrimary}/>
                <Path d="M7 12H9V14H7V12ZM11 12H13V14H11V12ZM15 12H17V14H15V12Z" fill={theme.textPrimary}/>
              </Svg>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <Path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V7.5C15 8.3 14.3 9 13.5 9S12 8.3 12 7.5V6.5L6 7V9L12 8.5V9.5C12 10.3 12.7 11 13.5 11S15 10.3 15 9.5V8.5L21 9ZM6 12V10L12 9.5V10.5C12 11.3 12.7 12 13.5 12S15 11.3 15 10.5V9.5L21 10V12L15 11.5V12.5C15 13.3 14.3 14 13.5 14S12 13.3 12 12.5V11.5L6 12Z" fill={theme.textPrimary}/>
              </Svg>
            </TouchableOpacity>
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
  iconButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentedControlWrapper: {
    alignItems: 'center',
  },
});

export default Header;


