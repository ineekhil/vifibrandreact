import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '../components/Header';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useTheme } from '../components/theme';

type FetchApiScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FetchApi'>;

interface Props {
  navigation: FetchApiScreenNavigationProp;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const FetchApiScreen = ({ navigation }: Props) => {
  const theme = useTheme();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const data = await response.json();
      setComments(data.slice(0, 10)); // Show first 10 comments
    } catch (error) {
      console.error('Error fetching comments:', error);
      Alert.alert('Error', 'Failed to fetch comments. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.screenBackground }]}>
      <Header 
        title="Fetch API Demo" 
        onBackPress={handleBackPress} 
        showSegmentedControl={false} 
        showRightIcons={false} 
      />
      
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.content}
      >
        <View style={[styles.mainContainer, { backgroundColor: theme.cardBackground, borderColor: theme.cardBorder }]}>
          <Text style={[styles.title, { color: theme.textPrimary }]}>
            Fetch API Implementation
          </Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Demonstrating how to use the Fetch API to retrieve data from external sources
          </Text>

          <View style={styles.apiInfo}>
            <Text style={[styles.apiUrl, { color: theme.accent }]}>
              API Endpoint: https://jsonplaceholder.typicode.com/comments
            </Text>
            <Text style={[styles.apiDescription, { color: theme.textSecondary }]}>
              This API returns a list of comments with postId, id, name, email, and body fields.
            </Text>
          </View>

          <TouchableOpacity
            style={[styles.fetchButton, { backgroundColor: theme.accent }]}
            onPress={fetchComments}
            disabled={loading}
            activeOpacity={0.8}
          >
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={styles.buttonText}>Fetch Data</Text>
            )}
          </TouchableOpacity>

          {loading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={theme.accent} />
              <Text style={[styles.loadingText, { color: theme.textSecondary }]}>
                Fetching data...
              </Text>
            </View>
          )}

          {comments.length > 0 && !loading && (
            <View style={styles.resultsSection}>
              <Text style={[styles.resultsTitle, { color: theme.textPrimary }]}>
                API Response ({comments.length} comments)
              </Text>
              
              <View style={styles.commentsList}>
                {comments.map((comment) => (
                  <View key={comment.id} style={[styles.commentItem, { borderColor: theme.border }]}>
                    <Text style={[styles.commentName, { color: theme.textPrimary }]}>
                      {comment.name}
                    </Text>
                    <Text style={[styles.commentEmail, { color: theme.textSecondary }]}>
                      {comment.email}
                    </Text>
                    <Text style={[styles.commentBody, { color: theme.textPrimary }]}>
                      {comment.body}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}
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
  mainContainer: {
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
  apiInfo: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  apiUrl: {
    fontSize: 14,
    fontFamily: 'Nunito-VariableFont_wght',
    fontWeight: '600',
    marginBottom: 8,
  },
  apiDescription: {
    fontSize: 14,
    fontFamily: 'Nunito-VariableFont_wght',
    lineHeight: 20,
  },
  fetchButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Nunito-VariableFont_wght',
  },
  loadingContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Nunito-VariableFont_wght',
  },
  resultsSection: {
    marginTop: 16,
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'DMSerifDisplay-Regular',
    marginBottom: 16,
  },
  commentsList: {
    gap: 12,
  },
  commentItem: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  commentName: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Nunito-VariableFont_wght',
    marginBottom: 4,
  },
  commentEmail: {
    fontSize: 12,
    fontFamily: 'Nunito-VariableFont_wght',
    marginBottom: 8,
  },
  commentBody: {
    fontSize: 14,
    fontFamily: 'Nunito-VariableFont_wght',
    lineHeight: 20,
  },
});

export default FetchApiScreen;
