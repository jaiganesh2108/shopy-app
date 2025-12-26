import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>👟 Shoe Store</Text>

      <Text style={styles.subHeading}>Popular Shoes</Text>

      {/* Dummy Shoe Cards */}
      {[1, 2, 3, 4].map((item) => (
        <View key={item} style={styles.card}>
          <Text style={styles.shoeName}>Nike Air Max</Text>
          <Text style={styles.price}>₹ 9,999</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#555',
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  shoeName: {
    fontSize: 18,
    fontWeight: '600',
  },
  price: {
    fontSize: 16,
    marginVertical: 8,
    color: '#333',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
