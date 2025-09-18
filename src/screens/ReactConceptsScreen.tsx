import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '../components/Header.tsx';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useTheme } from '../components/theme';

type ReactConceptsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ReactConcepts'>;

interface Props {
  navigation: ReactConceptsScreenNavigationProp;
}

const ReactConceptsScreen = ({ navigation }: Props) => {
  const theme = useTheme();
  const [showWebView, setShowWebView] = useState(false);

  const handleBackPress = () => {
    if (showWebView) {
      setShowWebView(false);
    } else {
      navigation.goBack();
    }
  };

  const concepts = [
    'WebView',
    'Fetch API',
  ];

  const handleConceptPress = (concept: string) => {
    if (concept === 'Fetch API') {
      navigation.navigate('FetchApi');
    } else if (concept === 'WebView') {
      setShowWebView(true);
    } else {
      console.log('Concept pressed:', concept);
      Alert.alert(concept, 'This concept will be implemented soon!');
    }
  };

  if (showWebView) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.screenBackground }]}>
        <Header 
          title="WebView Demo - YouTube" 
          onBackPress={handleBackPress} 
          showSegmentedControl={false} 
          showRightIcons={false} 
        />
        <WebView
          source={{ uri: 'https://youtube.com' }}
          style={styles.webView}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          scalesPageToFit={true}
          allowsInlineMediaPlayback={true}
          mediaPlaybackRequiresUserAction={false}
          onError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            console.error('WebView error: ', nativeEvent);
            Alert.alert('Error', 'Failed to load YouTube. Please check your internet connection.');
          }}
          onHttpError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            console.error('WebView HTTP error: ', nativeEvent);
          }}
          onLoadStart={() => {
            console.log('WebView started loading');
          }}
          onLoadEnd={() => {
            console.log('WebView finished loading');
          }}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.screenBackground }]}>
      <Header 
        title="React Native Concepts" 
        onBackPress={handleBackPress} 
        showSegmentedControl={false} 
        showRightIcons={false} 
      />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={[styles.conceptsContainer, { backgroundColor: theme.cardBackground, borderColor: theme.cardBorder }]}>
          <Text style={[styles.title, { color: theme.textPrimary }]}>
            React Native Concepts
          </Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            WebView and Fetch API demonstrations
          </Text>
          
          <View style={styles.conceptsList}>
            {concepts.map((concept, index) => (
              <TouchableOpacity
                key={concept}
                style={[styles.conceptItem, { borderColor: theme.border }]}
                onPress={() => handleConceptPress(concept)}
                activeOpacity={0.7}
              >
                <View style={styles.conceptContent}>
                  <View style={[styles.conceptNumber, { backgroundColor: theme.accent }]}>
                    <Text style={styles.conceptNumberText}>{index + 1}</Text>
                  </View>
                  <Text style={[styles.conceptName, { color: theme.textPrimary }]}>
                    {concept}
                  </Text>
                </View>
                <Text style={[styles.arrow, { color: theme.textSecondary }]}>→</Text>
              </TouchableOpacity>
            ))}
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
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
    paddingVertical: 16,
  },
  conceptsContainer: {
    borderRadius: 12,
    marginHorizontal: 16,
    borderWidth: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'DMSerifDisplay-Regular',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Nunito-VariableFont_wght',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  conceptsList: {
    gap: 12,
  },
  conceptItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  conceptContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  conceptNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  conceptNumberText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  conceptName: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Nunito-VariableFont_wght',
  },
  arrow: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  webView: {
    flex: 1,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
});

export default ReactConceptsScreen;
