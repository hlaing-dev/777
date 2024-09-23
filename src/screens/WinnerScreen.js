import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Papa from 'papaparse';  // CSV parser

const WinnerCard = ({ type, imageUrl, name, prizeLevel, backgroundColor, amount }) => (
  <View style={[styles.card, { backgroundColor }]}>
    <Image source={{uri: imageUrl}} style={styles.cardImage} />
    <View style={styles.cardContent}>
    <Text style={styles.category}>
    <Image source={prizeLevel == 1 ? require('../assets/FirstColor.png') : prizeLevel == 2 ? 
        require('../assets/SecondColor.png') : require('../assets/ThirdColor.png')
      } style={styles.prizeCardImage} />
      {type}
      </Text>
      <Text style={styles.dailyCardName}>{name}</Text>
      <Text style={styles.prize}>{formatNumber(amount)}Ks</Text>
    </View>
  </View>
);

const MonthlyWinnerCard = ({ type, imageUrl, name, amount, backgroundColor }) => (
  <View style={[styles.card, { backgroundColor }]}>
    <View style={styles.cardContent}>
      <Text style={styles.category}>
      <Image source={require('../assets/FirstColor.png')} style={styles.prizeCardImage} />
      {type}
      </Text>
      <Text style={styles.dailyCardName}>{name}</Text>
      <Text style={styles.prize}>{formatNumber(amount)}Ks</Text>
    </View>
  </View>
);

const DailyWinnerCard = ({ type, imageUrl, name, amount, backgroundColor, prizeLevel}) => (
  <View style={[prizeLevel == 1 ? styles.firstPrizeDailyCardContainer : styles.dailyCardContainer, { backgroundColor }]}>
    <View style={[styles.dailyCard]}>
      <Image source={{uri: imageUrl}} style={styles.dailyCardImage} />
      <Text style={styles.category}>
      <Image source={prizeLevel == 1 ? require('../assets/FirstColor.png') : prizeLevel == 2 ? 
        require('../assets/SecondColor.png') : require('../assets/ThirdColor.png')
      } style={styles.prizeCardImage} />
      {type}
      </Text>
    </View>
    <Text style={styles.dailyCardName}>{name}</Text>
    <Text style={styles.dailyCardPrize}>{formatNumber(amount)}Ks</Text>
  </View>
);

const WinnerSection = ({ title, winners, t }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>
      {
        title === "Daily Winner" ? t('dailyWinner') : 
        title === "Monthly Winner" ? t('monthlyWinner') : 
        t('weeklyWinner')
      }
    </Text>
    <View style={styles.cardsContainer}>
      {winners.map((winner, index) => (
        title === "Daily Winner" ? <DailyWinnerCard key={index} {...winner} /> : 
        title === "Monthly Winner" ? <MonthlyWinnerCard key={index} {...winner} /> : 
        <WinnerCard key={index} {...winner} />
      ))}
    </View>
  </View>
);

const formatNumber = (amount) => {
  return new Intl.NumberFormat('en-US').format(amount);
};

const WinnerScreen = () => {
  const { t } = useTranslation();  // Use translation hook
  const SPREADSHEET_ID = '1jef53uNBncQYqWSAeB4HkqDiuVDKN9O4C349zHzmIjw';
  const [data, setData] = useState();
  const [monthlyWinners, setMonthlyWinners] = useState();
  const [dailyWinners, setDailyWinners] = useState();
  const [weeklyWinners, setWeeklyWinners] = useState();
  const fetchCSVData = async () => {
    try {
      const response = await axios.get(
        `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet=Sheet2`
      );
      const parsedData = Papa.parse(response.data, { header: true }); // Parse CSV data
      console.log('parseddata is=>', parsedData);
      if(parsedData && parsedData.data) {
        setMonthlyWinners(parsedData.data.filter(x => x.title === 'monthly'));
        setDailyWinners(parsedData.data.filter(x => x.title === 'daily'));
        setWeeklyWinners(parsedData.data.filter(x => x.title === 'weekly'));
      }
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
      {monthlyWinners && <WinnerSection title="Monthly Winner" winners={monthlyWinners} t={t} />}
      {weeklyWinners && <WinnerSection title="Weekly Winner" winners={weeklyWinners} t={t}/>}
      {dailyWinners && <WinnerSection title="Daily Winner" winners={dailyWinners} t={t}/>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e', // Dark theme background
    padding: 16,
  },
  section: {
    marginBottom: 32,
    alignItems: 'center'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    marginRight: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  prizeCardImage: {
    width: 20,
    height: 20,
    borderRadius: 8,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
    alignItems: 'center',

  },
  category: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
    flexDirection: 'column',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',

  },
  prize: {
    fontSize: 14,
    margin: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  dailyCardContainer: {
    width: '30%',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 16,
    marginRight: 5,
  },
  firstPrizeDailyCardContainer: {
    width: '35%',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 16,
    padding: 10,
    marginRight: 5,
  },
  dailyCard: {
    width: '100%',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dailyCardImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  dailyCardName: {
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'black',
    color: '#fff',
    padding: 5,
    borderRadius: 20,
  },
  dailyCardPrize: {
    fontSize: 14,
    margin: 5,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default WinnerScreen;
