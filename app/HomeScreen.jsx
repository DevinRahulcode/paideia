import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

// Define the primary color for consistency
const PRIMARY_COLOR = "#00796B";

// Card Component: A reusable component for our feature cards
const PaideiaCard = ({ icon, title, description, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <MaterialCommunityIcons name={icon} size={40} color={PRIMARY_COLOR} />
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDescription}>{description}</Text>
  </TouchableOpacity>
);

// Header Component: Just the greeting
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.headerTitle}>Knowledge is Power</Text>
        <Text style={styles.headerSubtitle}>Ready to learn something new?</Text>
      </View>
    </View>
  );
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardsContainer}>
          <PaideiaCard
            icon="brain"
            title="Learn"
            description="Explore new topics and expand your knowledge."
            
          />
          <PaideiaCard
            icon="magnify"
            title="Research"
            description="Dive deep into subjects with powerful tools."
            onPress={() => console.log('Research card pressed')}
          />
          <Link href="/Summary" asChild>
          <PaideiaCard
            icon="file-document-outline"
            title="Summary"
            description="Get key insights from articles and documents."
            onPress={() => console.log('Summary card pressed')}
          />
          </Link>
          <PaideiaCard
            icon="meditation"
            title="Meditation"
            description="Clear your mind and improve your focus."
            onPress={() => console.log('Meditation card pressed')}
          />
          <PaideiaCard
            icon="lightbulb-on-outline"
            title="Creative"
            description="Unleash your innovative and creative potential."
            onPress={() => console.log('Creative card pressed')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // A light, clean background
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom:8
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom:30,
  },
  scrollContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20, // Modern rounded corners
    padding: 20,
    width: '48%', // Two cards per row with a small gap
    marginBottom: 15,
    // Modern shadow for a "lifted" effect
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
    alignItems: 'flex-start', // Align content to the start
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },


});