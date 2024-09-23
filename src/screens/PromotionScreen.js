/**
 * @format
 */
import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Papa from 'papaparse';
import { Linking } from 'react-native';

const PromotionScreen = ({handleSetIsWebViewVisible}) => {
  const { t } = useTranslation();  // Use translation hook
  const SPREADSHEET_ID = '1jef53uNBncQYqWSAeB4HkqDiuVDKN9O4C349zHzmIjw';
  const [data, setData] = useState([]);
  
  const fetchCSVData = async () => {
    try {
      const response = await axios.get(
        `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet=Sheet1`
      );
      console.log('response is=>', response);
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
    <ScrollView style={styles.container}>
      {/* Bonus Sections */}
      {
        data.map((d, i) => {
          return (
            <View style={styles.card} key={i}>
              <Image
                source={{ uri: d.imageUrl }}
                style={styles.bonusImage}
              />
              <TouchableOpacity style={styles.button}>
                <Text
                  onPress={() => Linking.openURL(d.link)}
                  style={styles.buttonText}
                >
                  {t("getPromotion")}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })
      }
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
