import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Clock, Heart, MessageCircle, Repeat, Share, MoreHorizontal } from '@expo/vector-icons';

interface Tweet {
  id: string;
  author: string;
  handle: string;
  content: string;
  time: string;
  likes: number;
  comments: number;
  retweets: number;
  avatar: string;
}

const SAMPLE_TWEETS: Tweet[] = [
  {
    id: '1',
    author: 'Tech Insider',
    handle: '@techinsider',
    content: 'Breaking: New AI model achieves human-level reasoning on complex tasks. The implications are enormous for the future of work and creativity. 🚀',
    time: '2h',
    likes: 2340,
    comments: 156,
    retweets: 890,
    avatar: 'https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg',
  },
  {
    id: '2',
    author: 'Elon Musk',
    handle: '@elonmusk',
    content: 'We are going to Mars this decade. The timeline is clearer than ever before.',
    time: '4h',
    likes: 45000,
    comments: 2300,
    retweets: 12000,
    avatar: 'https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg',
  },
  {
    id: '3',
    author: 'AI News',
    handle: '@ai_news',
    content: 'OpenAI releases new documentation for API developers. Key updates include improved streaming and lower latency for real-time applications.',
    time: '6h',
    likes: 890,
    comments: 67,
    retweets: 234,
    avatar: 'https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg',
  },
];

export default function TimelineScreen() {
  const { theme } = useTheme();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  const renderTweet = ({ item }: { item: Tweet }) => (
    <TouchableOpacity style={[styles.tweetCard, { backgroundColor: theme.card, borderBottomColor: theme.border }]}>
      <View style={styles.avatarContainer}>
        <View style={[styles.avatar, { backgroundColor: theme.primary }]}>
          <Text style={styles.avatarText}>{item.author[0]}</Text>
        </View>
      </View>
      <View style={styles.tweetContent}>
        <View style={styles.tweetHeader}>
          <Text style={[styles.authorName, { color: theme.text }]}>{item.author}</Text>
          <Text style={[styles.handle, { color: '#657786' }]}>{item.handle}</Text>
          <Text style={[styles.time, { color: '#657786' }]}>· {item.time}</Text>
        </View>
        <Text style={[styles.tweetText, { color: theme.text }]}>{item.content}</Text>
        <View style={styles.tweetActions}>
          <TouchableOpacity style={styles.action}>
            <MessageCircle size={18} color="#657786" />
            <Text style={[styles.actionText, { color: '#657786' }]}>{item.comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action}>
            <Repeat size={18} color="#657786" />
            <Text style={[styles.actionText, { color: '#657786' }]}>{item.retweets}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action}>
            <Heart size={18} color="#657786" />
            <Text style={[styles.actionText, { color: '#657786' }]}>{item.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action}>
            <Share size={18} color="#657786" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { borderBottomColor: theme.border }]}>
        <Text style={[styles.headerTitle, { color: theme.text }]}>Home</Text>
        <Clock size={24} color={theme.primary} />
      </View>
      <FlatList
        data={SAMPLE_TWEETS}
        renderItem={renderTweet}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tweetCard: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
  },
  avatarContainer: {
    marginRight: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tweetContent: {
    flex: 1,
  },
  tweetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  authorName: {
    fontWeight: 'bold',
    fontSize: 15,
    marginRight: 4,
  },
  handle: {
    fontSize: 15,
    marginRight: 4,
  },
  time: {
    fontSize: 15,
  },
  tweetText: {
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 8,
  },
  tweetActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 32,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  actionText: {
    fontSize: 12,
  },
});
