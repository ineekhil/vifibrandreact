import React, { useRef, useState } from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '../shared/Header.tsx';
import BrandChip from '../shared/BrandChip.tsx';
import TaskCard from '../shared/TaskCard.tsx';
import EventItem from '../shared/EventItem.tsx';
import TrendingTaskCard from '../shared/TrendingTaskCard.tsx';
import ActiveCampaignCard from '../shared/ActiveCampaignCard.tsx';
import AssignedTaskCard from '../shared/AssignedTaskCard.tsx';
import { useTheme } from '../shared/theme';
import Svg, { Path } from 'react-native-svg';
import { RootStackParamList } from '../navigation/AppNavigator';

type BrandsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Brands'>;

const BrandsScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation<BrandsScreenNavigationProp>();

  const handleBackPress = () => {
    navigation.navigate('Welcome');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]} edges={['top']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Header title="Brands" showSegmentedControl={true} onBackPress={handleBackPress} />

      <Section title="Trending tasks">
        <Carousel />
      </Section>

      <Section title="Active campaigns" showCount={7}>
        <ActiveCampaignsCarousel />
      </Section>

      <Section title="Assigned tasks">
        <AssignedTasksGrid />
      </Section>

      <Section title="Events for you">
        <View style={styles.eventsList}>
          {Array.from({ length: 4 }).map((_, i) => (
            <EventItem key={i} title={i % 2 === 0 ? 'Spotify Refresher' : 'VF PARALLEL'} date="June 7 · 07:30 PM" location="Independence Brewing Co - Powai" />
          ))}
          <TouchableOpacity style={[styles.seeAllBtn, { backgroundColor: theme.textPrimary }]}>
            <Text style={[styles.seeAllText, { color: theme.background }]}>See all →</Text>
          </TouchableOpacity>
        </View>
      </Section>

      <Section title="Tasks">
        <View style={styles.tasksGrid}>
          {Array.from({ length: 6 }).map((_, i) => (
            <TaskCard
              key={i}
              brand="Spotify"
              type={i % 2 === 0 ? 'Photo' : 'Design'}
            />
          ))}
          <TouchableOpacity style={[styles.seeAllBtnWide, { backgroundColor: theme.textPrimary }]}>
            <Text style={[styles.seeAllText, { color: theme.background }]}>See all tasks →</Text>
          </TouchableOpacity>
        </View>
      </Section>

      </ScrollView>
    </SafeAreaView>
  );
};

const Section = ({ title, children, showCount }: { title: string; children: React.ReactNode; showCount?: number }) => {
  const theme = useTheme();
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>{title}</Text>
        {showCount && (
          <View style={styles.countBadge}>
            <Text style={styles.countText}>{showCount}</Text>
          </View>
        )}
      </View>
      {children}
    </View>
  );
};

const AssignedTasksGrid = () => {
  const assignedTasksData = [
    { id: '1', brand: 'spotify' as const, taskType: 'reels' as const, title: 'Spotify', description: 'How Spotify shapes your moments, memories, and every beat of your life.' },
    { id: '2', brand: 'muscleblaze' as const, taskType: 'post' as const, title: 'Muscle Blaze', description: 'Fuel your grind—post your gains on Instagram.' },
    { id: '3', brand: 'spotify' as const, taskType: 'reels' as const, title: 'Spotify', description: 'How Spotify shapes your moments, memories, and every beat of your life.' },
    { id: '4', brand: 'muscleblaze' as const, taskType: 'post' as const, title: 'Muscle Blaze', description: 'Fuel your grind—post your gains on Instagram.' },
    { id: '5', brand: 'spotify' as const, taskType: 'reels' as const, title: 'Spotify', description: 'How Spotify shapes your moments, memories, and every beat of your life.' },
    { id: '6', brand: 'muscleblaze' as const, taskType: 'post' as const, title: 'Muscle Blaze', description: 'Fuel your grind—post your gains on Instagram.' },
  ];

  return (
    <View style={styles.assignedGrid}>
      {assignedTasksData.map((item) => (
        <AssignedTaskCard
          key={item.id}
          brand={item.brand}
          taskType={item.taskType}
          title={item.title}
          description={item.description}
          onPress={() => {
            console.log('Task pressed:', item.title);
          }}
        />
      ))}
    </View>
  );
};

const ActiveCampaignsCarousel = () => {
  const data = [
    { id: '1', brand: 'blinkit' as const },
    { id: '2', brand: 'spotify' as const },
    { id: '3', brand: 'blinkit' as const },
    { id: '4', brand: 'blinkit' as const },
    { id: '5', brand: 'spotify' as const },
    { id: '6', brand: 'blinkit' as const },
    { id: '7', brand: 'spotify' as const },
    { id: '8', brand: 'blinkit' as const },
    { id: '9', brand: 'spotify' as const },
    { id: '10', brand: 'blinkit' as const },
    { id: '11', brand: 'spotify' as const },
    { id: '12', brand: 'blinkit' as const },
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.campaignsContainer}
      renderItem={({ item }) => (
        <ActiveCampaignCard brand={item.brand} />
      )}
    />
  );
};

const Carousel = () => {
  const screenWidth = Dimensions.get('window').width;
  const cardWidth = 320;
  const smallCardWidth = 310;
  const cardSpacing = 4;
  const data = Array.from({ length: 9 }).map((_, i) => ({ id: `trend-${i}` }));
  const [scrollX, setScrollX] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onScroll = (event: any) => {
    setScrollX(event.nativeEvent.contentOffset.x);
  };

  const getCardStyle = (index: number) => {
    const itemWidth = cardWidth + cardSpacing;
    const centerOffset = (screenWidth - cardWidth) / 2;
    const cardCenter = index * itemWidth + cardWidth / 2;
    const screenCenter = scrollX + screenWidth / 2;
    const distance = Math.abs(cardCenter - screenCenter);
    
    // Calculate scale and opacity based on distance
    const maxDistance = itemWidth * 1.5;
    const normalizedDistance = Math.min(distance / maxDistance, 1);
    
    const scale = 1 - (normalizedDistance * 0.08); // Scale from 1 to 0.92
    const opacity = 1 - (normalizedDistance * 0.15); // Opacity from 1 to 0.85
    
    return {
      transform: [{ scale }],
      opacity,
      width: scale > 0.98 ? cardWidth : smallCardWidth,
    };
  };

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={cardWidth + cardSpacing}
        snapToAlignment="center"
        decelerationRate="normal"
        onScroll={onScroll}
        scrollEventThrottle={8}
        contentContainerStyle={{
          paddingHorizontal: (screenWidth - cardWidth) / 2,
        }}
        renderItem={({ item, index }) => {
          const cardStyle = getCardStyle(index);
          
          return (
            <View style={[
              styles.carouselItem,
              cardStyle,
              {
                marginRight: index < data.length - 1 ? cardSpacing : 0,
              }
            ]}>
              <TrendingTaskCard 
                width={cardStyle.width}
                isSmallCard={cardStyle.width !== cardWidth}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  countBadge: {
    backgroundColor: '#FF0000',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  countText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  trendingRow: {
    flexDirection: 'row',
    gap: 12,
  },
  trendingCard: {
    height: 160,
    flex: 1,
    backgroundColor: '#000',
    borderRadius: 12,
  },
  trendingCardMuted: {
    height: 160,
    width: 80,
    backgroundColor: '#ddd',
    borderRadius: 12,
  },
  brandsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  assignedGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  eventsList: {
    gap: 10,
  },
  seeAllBtn: {
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#111',
    marginTop: 6,
  },
  seeAllBtnWide: {
    alignSelf: 'stretch',
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#111',
    marginTop: 6,
    alignItems: 'center',
  },
  seeAllText: {
    color: '#fff',
    fontWeight: '600',
  },
  tasksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  carouselContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  campaignsContainer: {
    paddingHorizontal: 4,
  },
});

export default BrandsScreen;


