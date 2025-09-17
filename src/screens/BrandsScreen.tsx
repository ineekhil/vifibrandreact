import React from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Header from '../shared/Header.tsx';
import BrandChip from '../shared/BrandChip.tsx';
import TaskCard from '../shared/TaskCard.tsx';
import EventItem from '../shared/EventItem.tsx';
import TrendingTaskCard from '../shared/TrendingTaskCard.tsx';
import { useTheme } from '../shared/theme';
import Svg, { Path } from 'react-native-svg';

const BrandsScreen = () => {
  const theme = useTheme();
  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]} contentContainerStyle={styles.content}>
      <Header title="Brands" showSegmentedControl={true} />

      <Section title="Trending tasks">
        <Carousel />
      </Section>

      <Section title="Active campaigns" showCount={7}>
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
      
      {/* Bottom Navigation */}
      <View style={[styles.bottomNav, { backgroundColor: theme.background }]}>
        <TouchableOpacity style={styles.navItem}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill={theme.textPrimary}/>
          </Svg>
          <View style={[styles.navIndicator, { backgroundColor: theme.textPrimary }]} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#FF6B35"/>
          </Svg>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill={theme.textPrimary}/>
          </Svg>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <View style={[styles.profilePic, { backgroundColor: theme.textSecondary }]}>
            <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <Path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill={theme.background}/>
            </Svg>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#2a2a2a',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  navIndicator: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginTop: 4,
  },
  profilePic: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BrandsScreen;


