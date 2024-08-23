/**
 * @format
 */
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const PromotionScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Bonus Sections */}
      <View style={styles.card}>
        <Image
          source={require('../assets/thaiMyanmarBouns.webp')}
          style={styles.bonusImage}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Promotion</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Image
          source={require('../assets/dailyBonus.webp')}
          style={styles.bonusImage}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Promotion</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Image
          source={require('../assets/shalBonus.webp')}
          style={styles.bonusImage}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Promotion</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    position: 'relative',
    marginBottom: 20, // Add some space between cards
  },
  bonusImage: {
    width: '100%',
    resizeMode: 'cover',
    height: 130, // Adjust height as needed
    borderRadius: 10,
  },
  button: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: '#FFD700', // Gold color for the button
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000', // Text color for visibility on the gold button
    fontSize: 14,
  },
});

export default PromotionScreen;
