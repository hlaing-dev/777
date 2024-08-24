import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const WinnerCard = ({ category, image, name, prize, backgroundColor, prizeImage }) => (
  <View style={[styles.card, { backgroundColor }]}>
    <Image source={image} style={styles.cardImage} />
    <View style={styles.cardContent}>
    <Text style={styles.category}>
      <Image source={prizeImage} style={styles.prizeCardImage} />
      {category}
      </Text>
      <Text style={styles.dailyCardName}>{name}</Text>
      <Text style={styles.prize}>{prize}</Text>
    </View>
  </View>
);

const MonthlyWinnerCard = ({ category, image, name, prize, backgroundColor }) => (
  <View style={[styles.card, { backgroundColor }]}>
    <View style={styles.cardContent}>
      <Text style={styles.category}>
      <Image source={image} style={styles.prizeCardImage} />
      {category}
      </Text>
      <Text style={styles.dailyCardName}>{name}</Text>
      <Text style={styles.prize}>{prize}</Text>
    </View>
  </View>
);

const DailyWinnerCard = ({ category, image, name, prize, backgroundColor, prizeLevel, prizeImage}) => (
  <View style={[prizeLevel === 1 ? styles.firstPrizeDailyCardContainer : styles.dailyCardContainer, { backgroundColor }]}>
    <View style={[styles.dailyCard]}>
      <Image source={image} style={styles.dailyCardImage} />
      <Text style={styles.category}>
      <Image source={prizeImage} style={styles.prizeCardImage} />
      {category}
      </Text>
    </View>
    <Text style={styles.dailyCardName}>{name}</Text>
    <Text style={styles.dailyCardPrize}>{prize}</Text>
  </View>
);

const WinnerSection = ({ title, winners }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.cardsContainer}>
      {winners.map((winner, index) => (
        title === "Daily Winner" ? <DailyWinnerCard key={index} {...winner} /> : 
        title === "Monthly Winner" ? <MonthlyWinnerCard key={index} {...winner} /> : 
        <WinnerCard key={index} {...winner} />
      ))}
    </View>
  </View>
);

const WinnerScreen = () => {
  const monthlyWinners = [
    {
      category: 'FC',
      image: require('../assets/FirstColor.png'),
      name: 'shkokochit***',
      prize: '240,000 Ks',
      backgroundColor: '#feb503',
    },
  ];

  const weeklyWinners = [
    {
      category: 'FC',
      image: require('../assets/game1.png'),
      name: 'shkokochit***',
      prize: '240,000 Ks',
      backgroundColor: '#F5A623',
      prizeImage: require('../assets/FirstColor.png'),
    },
    {
      category: 'FC',
      image: require('../assets/game1.png'),
      name: 'shkokochit***',
      prize: '240,000 Ks',
      backgroundColor: 'white',
      prizeImage: require('../assets/SecondColor.png'),
    },
    {
      category: 'FC',
      image: require('../assets/game1.png'),
      name: 'shkokochit***',
      prize: '240,000 Ks',
      backgroundColor: '#F5A623',
      prizeImage: require('../assets/FirstColor.png'),
    },
    {
      category: 'FC',
      image: require('../assets/game1.png'),
      name: 'shkokochit***',
      prize: '240,000 Ks',
      backgroundColor: 'white',
      prizeImage: require('../assets/SecondColor.png'),
    },
  ];

  const dailyWinners = [
    {
      category: 'FC',
      image: require('../assets/game1.png'),
      name: 'shkokochit***',
      prize: '80,000 Ks',
      backgroundColor: 'white',
      prizeLevel: 2,
      prizeImage: require('../assets/SecondColor.png'),
    },
    {
      category: 'FC',
      image: require('../assets/game1.png'),
      name: 'shkokochit***',
      prize: '120,000 Ks',
      backgroundColor: '#F5A623',
      prizeLevel: 1,
      prizeImage: require('../assets/FirstColor.png'),
    },
    {
      category: 'FC',
      image: require('../assets/game1.png'),
      name: 'shkokochit***',
      prize: '40,000 Ks',
      backgroundColor: '#dc7908',
      prizeLevel: 3,
      prizeImage: require('../assets/ThirdColor.png'),
    },
    {
      category: 'FC',
      image: require('../assets/game1.png'),
      name: 'shkokochit***',
      prize: '80,000 Ks',
      backgroundColor: 'white',
      prizeLevel: 2,
      prizeImage: require('../assets/SecondColor.png'),
    },
    {
      category: 'FC',
      image: require('../assets/game1.png'),
      name: 'shkokochit***',
      prize: '120,000 Ks',
      backgroundColor: '#F5A623',
      prizeLevel: 1,
      prizeImage: require('../assets/FirstColor.png'),
    },
    {
      category: 'FC',
      image: require('../assets/game1.png'),
      name: 'shkokochit***',
      prize: '40,000 Ks',
      backgroundColor: '#dc7908',
      prizeLevel: 3,
      prizeImage: require('../assets/ThirdColor.png'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <WinnerSection title="Monthly Winner" winners={monthlyWinners} />
      <WinnerSection title="Weekly Winner" winners={weeklyWinners} />
      <WinnerSection title="Daily Winner" winners={dailyWinners} />
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
    width: 50,
    height: 50,
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
