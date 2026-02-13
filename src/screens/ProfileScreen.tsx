import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Settings, Calendar, MapPin, Link as LinkIcon } from '@expo/vector-icons';

export default function ProfileScreen() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: theme.border }]}>
        <Text style={[styles.headerTitle, { color: theme.text }]}>Profile</Text>
        <Settings size={24} color={theme.text} />
      </View>

      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <View style={[styles.avatar, { backgroundColor: theme.primary }]}>
          <Text style={styles.avatarText}>Y</Text>
        </View>
        <Text style={[styles.name, { color: theme.text }]}>Your Name</Text>
        <Text style={[styles.handle, { color: '#657786' }]}>@yourhandle</Text>
        
        <Text style={[styles.bio, { color: theme.text }]}>
          Building apps and sharing ideas. Tech enthusiast. 🚀
        </Text>

        <View style={styles.profileStats}>
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: theme.text }]}>245</Text>
            <Text style={[styles.statLabel, { color: '#657786' }]}>Following</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: theme.text }]}>1.2K</Text>
            <Text style={[styles.statLabel, { color: '#657786' }]}>Followers</Text>
          </View>
        </View>
      </View>

      {/* Tabs */}
      <View style={[styles.tabs, { borderBottomColor: theme.border }]}>
        <View style={styles.tab}>
          <Text style={[styles.tabText, { color: theme.primary }]}>Tweets</Text>
          <View style={[styles.activeIndicator, { backgroundColor: theme.primary }]} />
        </View>
        <View style={styles.tab}>
          <Text style={[styles.tabText, { color: '#657786' }]}>Replies</Text>
        </View>
        <View style={styles.tab}>
          <Text style={[styles.tabText, { color: '#657786' }]}>Media</Text>
        </View>
        <View style={styles.tab}>
          <Text style={[styles.tabText, { color: '#657786' }]}>Likes</Text>
        </View>
      </View>

      {/* Sample Tweet */}
      <View style={[styles.tweetCard, { backgroundColor: theme.card, borderBottomColor: theme.border }]}>
        <View style={styles.tweetHeader}>
          <View style={[styles.smallAvatar, { backgroundColor: theme.primary }]}>
            <Text style={styles.smallAvatarText}>Y</Text>
          </View>
          <View>
            <Text style={[styles.authorName, { color: theme.text }]}>Your Name</Text>
            <Text style={[styles.handle, { color: '#657786' }]}>@yourhandle · 2h</Text>
          </View>
        </View>
        <Text style={[styles.tweetText, { color: theme.text }]}>
          Just set up ChronoFeed! A chronological Twitter client built with React Native. Check it out! 📱
        </Text>
      </View>
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
  profileHeader: {
    padding: 16,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  handle: {
    fontSize: 15,
    marginBottom: 8,
  },
  bio: {
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 12,
  },
  profileStats: {
    flexDirection: 'row',
    gap: 24,
  },
  statItem: {
    flexDirection: 'row',
    gap: 4,
  },
  statNumber: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  statLabel: {
    fontSize: 15,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    position: 'relative',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    width: 60,
    height: 4,
    borderRadius: 2,
  },
  tweetCard: {
    padding: 12,
    borderBottomWidth: 1,
  },
  tweetHeader: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  smallAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallAvatarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  authorName: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  tweetText: {
    fontSize: 14,
    lineHeight: 18,
  },
});
