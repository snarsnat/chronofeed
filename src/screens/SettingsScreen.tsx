import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Moon, Bell, Shield, User, Palette, HelpCircle, Info } from '@expo/vector-icons';

export default function SettingsScreen() {
  const { theme, isDark, toggleTheme } = useTheme();

  const settingsSections = [
    {
      title: 'Preferences',
      items: [
        {
          icon: Moon,
          title: 'Dark Mode',
          subtitle: 'Use dark theme',
          hasSwitch: true,
          value: isDark,
          onToggle: toggleTheme,
        },
        {
          icon: Bell,
          title: 'Notifications',
          subtitle: 'Push notifications for mentions and DMs',
          hasSwitch: true,
          value: true,
          onToggle: () => {},
        },
      ],
    },
    {
      title: 'Account',
      items: [
        {
          icon: User,
          title: 'Edit Profile',
          subtitle: 'Change your name, bio, and avatar',
          hasSwitch: false,
          onPress: () => {},
        },
        {
          icon: Shield,
          title: 'Privacy & Safety',
          subtitle: 'Control who can see your tweets',
          hasSwitch: false,
          onPress: () => {},
        },
      ],
    },
    {
      title: 'About',
      items: [
        {
          icon: HelpCircle,
          title: 'Help Center',
          subtitle: 'Get help with using ChronoFeed',
          hasSwitch: false,
          onPress: () => {},
        },
        {
          icon: Info,
          title: 'About ChronoFeed',
          subtitle: 'Version 1.0.0',
          hasSwitch: false,
          onPress: () => {},
        },
      ],
    },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { borderBottomColor: theme.border }]}>
        <Text style={[styles.headerTitle, { color: theme.text }]}>Settings</Text>
      </View>

      {settingsSections.map((section, sectionIndex) => (
        <View key={section.title} style={styles.section}>
          <Text style={[styles.sectionTitle, { color: '#657786' }]}>{section.title}</Text>
          {section.items.map((item, index) => (
            <TouchableOpacity
              key={item.title}
              style={[
                styles.settingItem,
                { borderBottomColor: sectionIndex < settingsSections.length - 1 ? theme.border : 'transparent' },
              ]}
              onPress={item.onPress}
              disabled={!item.hasSwitch}
              activeOpacity={item.hasSwitch ? 1 : 0.7}
            >
              <View style={styles.settingLeft}>
                <item.icon size={22} color={theme.text} />
                <View style={styles.settingText}>
                  <Text style={[styles.settingTitle, { color: theme.text }]}>{item.title}</Text>
                  <Text style={[styles.settingSubtitle, { color: '#657786' }]}>{item.subtitle}</Text>
                </View>
              </View>
              {item.hasSwitch ? (
                <Switch
                  value={item.value}
                  onValueChange={item.onToggle}
                  trackColor={{ false: '#657786', true: theme.primary }}
                  thumbColor="#fff"
                />
              ) : (
                <Text style={[styles.chevron, { color: '#657786' }]}>›</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      ))}

      <View style={styles.logoutContainer}>
        <TouchableOpacity style={[styles.logoutButton, { backgroundColor: '#fee2e2' }]}>
          <Text style={[styles.logoutText, { color: '#dc2626' }]}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  section: {
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 13,
  },
  chevron: {
    fontSize: 24,
    fontWeight: '300',
  },
  logoutContainer: {
    padding: 16,
    marginTop: 16,
    marginBottom: 32,
  },
  logoutButton: {
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
