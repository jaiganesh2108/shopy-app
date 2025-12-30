import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>

      {/* HERO */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Shoe Shopy</Text>
        <Text style={styles.heroSubtitle}>
          Premium footwear. Modern experience.
        </Text>
      </View>

      {/* MAIN CARD */}
      <View style={styles.card}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>ABOUT APP</Text>
        </View>

        <Text style={styles.description}>
          Discover premium shoe brands crafted with a smooth, modern, and
          intuitive shopping experience. Designed for users who value both
          performance and aesthetics.
        </Text>

        <View style={styles.divider} />

        <View style={styles.featureRow}>
          <Text style={styles.bullet}>✓</Text>
          <Text style={styles.featureText}>Clean UI with fluid animations</Text>
        </View>

        <View style={styles.featureRow}>
          <Text style={styles.bullet}>✓</Text>
          <Text style={styles.featureText}>Handpicked premium brands</Text>
        </View>

        <View style={styles.featureRow}>
          <Text style={styles.bullet}>✓</Text>
          <Text style={styles.featureText}>Optimized for speed & elegance</Text>
        </View>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerLabel}>Crafted by</Text>
        <Text style={styles.name}>Jai Ganesh H.</Text>
        <Text style={styles.company}>Charteq Solutions Pvt. Ltd.</Text>
        <Text style={styles.version}>Version 1.0.0</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  /* HERO */
  hero: {
    marginBottom: 24,
  },
  heroTitle: {
    fontSize: 34,
    fontWeight: '900',
    color: '#000',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#333',
    marginTop: 4,
  },

  /* CARD */
  card: {
    backgroundColor: '#f6ebebff',
    borderRadius: 22,
    padding: 24,
    elevation: 8,
  },

  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#000',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 14,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },

  description: {
    fontSize: 16,
    color: '#444',
    lineHeight: 23,
    marginBottom: 18,
  },

  divider: {
    height: 1,
    backgroundColor: '#EEE',
    marginBottom: 16,
  },

  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bullet: {
    fontSize: 16,
    color: '#FFA500',
    marginRight: 10,
    fontWeight: '900',
  },
  featureText: {
    fontSize: 15,
    color: '#333',
  },

  /* FOOTER */
  footer: {
    alignItems: 'center',
    marginTop: 30,
  },
  footerLabel: {
    fontSize: 13,
    color: '#222',
    marginBottom: 2,
  },
  name: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000',
  },
  company: {
    fontSize: 14,
    color: '#0033FF',
    marginTop: 2,
  },
  version: {
    fontSize: 12,
    color: '#333',
    marginTop: 8,
  },
});
