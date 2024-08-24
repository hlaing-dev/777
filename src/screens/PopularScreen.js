import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ photo, label, symbolPhoto }) => (
  <View style={styles.card}>
    <Image source={photo} style={styles.photo} />
    <Text style={styles.label}>{label}</Text>
    <View style={styles.priceContainer}>
      <Text style={styles.preText}>
        RTPs
      <Text style={styles.percent}> 98%</Text>
      </Text>
      <Image source={symbolPhoto} style={styles.smallPhoto} />
    </View>
  </View>
);

const PopularScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ProductCard 
          photo={require('../assets/game2.png')} 
          label="Fortune Dragon" 
          symbolPhoto={require('../assets/symbol.png')} 
        />
        <ProductCard 
          photo={require('../assets/game1.png')} 
          label="Futebol Feber" 
          symbolPhoto={require('../assets/symbol.png')} 
        />
      </View>
      <View style={styles.row}>
        <ProductCard 
          photo={require('../assets/partystar.png')} 
          label="Party Star" 
          symbolPhoto={require('../assets/symbol.png')} 
        />
        <ProductCard 
          photo={require('../assets/threecoin.png')} 
          label="3 Coin Treasures" 
          symbolPhoto={require('../assets/symbol.png')} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10
  },
  preText: {
    color: 'gold',
  },
  percent: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'gold'
  },
  card: {
    width: '49%',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#1e1e1e',
  },
  photo: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: 'row',  // Align RTPs, 98%, and photo in a row
    alignItems: 'center',
    justifyContent: 'space-between', // Add space between items
  },
  price: {
    fontSize: 14,
    color: '#bdbdbd',
    marginRight: 10,  // Add some space between text and image
  },
  smallPhoto: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
});

export default PopularScreen;
