/**
 * @format
 */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import PromotionScreen from './PromotionScreen';
import WinnerScreen from './WinnerScreen';
import PopularScreen from './PopularScreen';
import Banner from '../components/Banner';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Tab1');

  return (
    <ScrollView style={styles.container}>
      {/* Header with Logo, Search Bar, and Language Selector */}
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      {/* <View style={styles.customContainer}>
        <TextInput
          placeholder="Search"
          style={styles.searchBar}
          placeholderTextColor="#fff">
          <Image
            source={require('../assets/Search.png')}
            style={styles.searchIcon}
          />
          <Text> ရှာဖွေရန်</Text>
        </TextInput>
      </View> */}

      {/* Banner Section */}
      <View style={styles.customContainer}>
        <Banner />
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={selectedTab === 'Tab1' ? styles.selectedBottomLine : styles.bottomLine}
          onPress={() => setSelectedTab('Tab1')}>
            <Text style={[styles.tab, selectedTab === 'Tab1' && styles.selectedTab]}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Tab1' && styles.selectedTabText,
            ]}>
            <Image
              source={selectedTab === 'Tab1' ? require('../assets/PromotionSelected.png') : require('../assets/Promotion.png')}
              style={styles.searchIcon}
            />
            <Text> ပရိုမိုးရှင်းများ</Text>
          </Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selectedTab === 'Tab2' ? styles.selectedBottomLine : styles.bottomLine}
          onPress={() => setSelectedTab('Tab2')}>
          <Text style={[styles.tab, selectedTab === 'Tab2' && styles.selectedTab]}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Tab2' && styles.selectedTabText,
            ]}>
            <Image
              source={selectedTab === 'Tab2' ? require('../assets/WinnerSelected.png') : require('../assets/Winner.png')}
              style={styles.searchIcon}
            />
            <Text> အနိုင်ရရှိသူများ</Text>
          </Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selectedTab === 'Tab3' ? styles.selectedBottomLine : styles.bottomLine}
          onPress={() => setSelectedTab('Tab3')}>
          <Text style={[styles.tab, selectedTab === 'Tab3' && styles.selectedTab]}>

          <Text
            style={[
              styles.tabText,
              selectedTab === 'Tab3' && styles.selectedTabText,
            ]}>
            <Image
              source={selectedTab === 'Tab3' ? require('../assets/HighSelected.png') : require('../assets/High.png')}
              style={styles.searchIcon}
            />
            <Text> အလျော်ကြမ်းဂိမ်းများ</Text>
          </Text>
          </Text>
        </TouchableOpacity>
      </View>

      {/* Bonus Sections */}
      {/* <View style={styles.bonusContainer}>
        <PromotionScreen />
      </View> */}
      <ScrollView style={styles.content}>
        {selectedTab === 'Tab1' && <PromotionScreen />}
        {selectedTab === 'Tab2' && <WinnerScreen />}
        {selectedTab === 'Tab3' && <PopularScreen />}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  tabContainer: {
    flexDirection: 'row',
    margin: 'auto',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#FFD700',
  },
  bottomLine: {
    borderBottomWidth: 2,
    paddingBottom: 40,
    borderBottomColor: '#2c2c2c',
    marginBottom: 40,
  },
  selectedBottomLine: {
    borderBottomWidth: 2,
    paddingBottom: 40,
    borderBottomColor: 'gold',
    marginBottom: 40,
  },
  tabText: {
    fontSize: 10,
    color: 'white',
  },
  selectedTab: {
    backgroundColor: '#FFD700',
  },
  selectedTabText: {
    color: 'black',
  },
  customContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 170,
    height: 50,
    // resizeMode: 'cover',
    marginLeft: -35,
  },
  searchBar: {
    flex: 1,
    padding: 8,
    margin: 5,
    backgroundColor: '#2c2c2c',
    borderRadius: 8,
    color: '#fff',
  },
  searchIcon: {
    width: 17,
    height: 17,
  },
  banner: {
    padding: 16,
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  bannerText: {
    marginTop: 8,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  bonusContainer: {
    padding: 5,
  },
  bonusCard: {
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#333',
    padding: 16,
    alignItems: 'center',
  },
  bonusImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  bonusText: {
    marginTop: 8,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
