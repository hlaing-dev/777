import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Banner() {
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} 
    // colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
    colors={['#2c2c2c', '#000']}

      // Gradient colors
      style={styles.card}
    >
      <View style={styles.column}>
        <Text style={styles.bannerText}>အကောင့်ဖွင့်ပြီး 300 % ရယူပါ...</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>အကောင့်ဖွင့်ရန်</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.column}>
        <Image source={require('../assets/banner.png')} style={styles.bannerImage} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // This is for Android shadow
    padding: 10,
    margin: 10,
  },
  column: {
    flex: 1,
    justifyContent: 'center',
  },
  bannerText: {
    fontSize: 25,
    marginBottom: 50,
    color: '#F8C83E', // Ensure text is visible on dark background
  },
  button: {
    backgroundColor: '#F8C83E', // Gold color
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // White text on gold button
    fontSize: 14,
  },
  bannerImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});
