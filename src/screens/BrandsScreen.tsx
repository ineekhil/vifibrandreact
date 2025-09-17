import React from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Header from '../shared/Header.tsx';
import BrandChip from '../shared/BrandChip.tsx';
import TaskCard from '../shared/TaskCard.tsx';
import EventItem from '../shared/EventItem.tsx';
import TrendingTaskCard from '../shared/TrendingTaskCard.tsx';
import { useTheme } from '../shared/theme';

const BrandsScreen = () => {
  const theme = useTheme();
  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]} contentContainerStyle={styles.content}>
      <Header title="Brands" showSegmentedControl={true} />

      <Section title="Trending tasks">
        <Carousel />
      </Section>

      <Section title="Active campaigns">
        <View style={styles.brandsRow}>
          {Array.from({ length: 6 }).map((_, i) => (
            <BrandChip key={i} label={i % 2 === 0 ? 'blinkit' : 'spotify'} />
          ))}
        </View>
      </Section>

      <Section title="Assigned tasks">
        <View style={styles.assignedGrid}>
          {Array.from({ length: 6 }).map((_, i) => (
            <TaskCard key={i} brand={i % 2 === 0 ? 'Spotify' : 'Muscle Blaze'} type={i % 2 === 0 ? 'Reels on Instagram' : 'Post on Instagram'} />
          ))}
        </View>
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

      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>{title}</Text>
      {children}
    </View>
  );
};

const Carousel = () => {
  const screenWidth = Dimensions.get('window').width;
  const sidePeek = 24; // how much of neighbors to show
  const itemWidth = screenWidth - sidePeek * 2;
  const data = Array.from({ length: 6 }).map((_, i) => ({ id: `trend-${i}` }));

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={itemWidth}
      snapToAlignment="start"
      decelerationRate="fast"
      contentContainerStyle={{ paddingHorizontal: sidePeek }}
      renderItem={() => (
        <View style={{ width: itemWidth }}>
          <TrendingTaskCard width={itemWidth} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
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
    gap: 12,
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
  bottomSpacer: {
    height: 24,
  },
});

export default BrandsScreen;


