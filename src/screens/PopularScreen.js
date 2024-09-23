import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import Papa from 'papaparse';  // CSV parser

const ProductCard = ({ imageUrl, name, symbolImageUrl, percent }) => (
  <View style={styles.card}>
    <Image source={{ uri: imageUrl }} style={styles.photo} />
    <Text style={styles.label}>{name}</Text>
    <View style={styles.priceContainer}>
      <Text style={styles.preText}>
        RTPs
      <Text style={styles.percent}> {percent}%</Text>
      </Text>
      <Image source={{ uri: symbolImageUrl }} style={styles.smallPhoto} />
    </View>
  </View>
);

const PopularScreen = () => {
  const SPREADSHEET_ID = '1jef53uNBncQYqWSAeB4HkqDiuVDKN9O4C349zHzmIjw';
  const [data, setData] = useState();
  const fetchCSVData = async () => {
    try {
      const response = await axios.get(
        `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet=Sheet3`
      );
      const parsedData = Papa.parse(response.data, { header: true }); // Parse CSV data
      console.log('parseddata is=>', parsedData);
      setData(parsedData.data); // Store parsed data in state
    } catch (error) {
      console.error('Error fetching CSV data', error);
    }
  };
  useEffect(()=>{
    fetchCSVData();
  },[]);
  return (
    <View style={styles.container}>
      {data && data.map((game, index) => (
        <View style={styles.item} key={index}>
          <ProductCard
            imageUrl={game.imageUrl}
            name={game.name}
            symbolImageUrl={game.symbolImageUrl}
            percent={game.percent}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  item: {
    width: '50%' // is 50% of container width
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  preText: {
    color: 'gold',
  },
  percent: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gold'
  },
  card: {
    width: '95%',
    marginBottom: 10,  
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
