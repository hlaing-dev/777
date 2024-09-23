import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import PromotionScreen from "./PromotionScreen";
import WinnerScreen from "./WinnerScreen";
import PopularScreen from "./PopularScreen";
import WebViewScreen from "./WebviewScreen"; // Adjust the path as needed
import { useTranslation } from 'react-i18next';

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState("Tab1");
  const [isWebViewVisible, setIsWebViewVisible] = useState(false);
  const scrollViewRef = useRef(null);
  const images = [
    require("../assets/bannerMyanmar.png"),
    require("../assets/bannerMyanmar2.png"),
  ];
  const { t, i18n } = useTranslation();  // Use translation hook
  const [language, setLanguage] = useState('en');  // Default language

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };


  useEffect(() => {
    let scrollValue = 0;
    const intervalId = setInterval(() => {
      scrollValue = scrollValue === (images.length - 1) * width ? 0 : scrollValue + width;
      scrollViewRef.current.scrollTo({ x: scrollValue, animated: true });
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <ScrollView style={styles.container}>
      {/* WebView Modal */}
      <WebViewScreen
        visible={isWebViewVisible}
        onClose={() => setIsWebViewVisible(false)}
        url="https://shal777.com/" // Replace with your actual URL
      />

      {/* Header with Logo */}
      <View style={styles.header}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <TouchableOpacity onPress={() => changeLanguage(language === 'en' ? 'my' : 'en')}>
          {language !== 'en' ? (
            <View style={styles.languageFrame}>
              <Image source={require('../assets/MM.png')} style={styles.languageIcon} /> 
              <Text style={styles.languageText}> မြန်မာ</Text>
            </View>
          ) : (
            <View style={styles.languageFrame}>
              <Image source={require('../assets/Eng.png')} style={styles.languageIcon} />
              <Text style={styles.languageText}> English</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Banner Section with Slideshow */}
      <View style={styles.bannerContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}
        >
          {images.map((image, index) => (
            <View key={index} style={styles.card}>
              <Image source={image} style={styles.bannerImage} />
            </View>
          ))}
        </ScrollView>
        <View style={styles.openAccountButton}>
          <TouchableOpacity style={styles.button} onPress={() => setIsWebViewVisible(true)}>
            <Text style={styles.buttonText}>{t('openAccount')}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs Section */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={
            selectedTab === "Tab1"
              ? styles.selectedBottomLine
              : styles.bottomLine
          }
          onPress={() => setSelectedTab("Tab1")}
        >
          <Text
            style={[styles.tab, selectedTab === "Tab1" && styles.selectedTab]}
          >
            <Image
              source={
                selectedTab === "Tab1"
                  ? require("../assets/PromotionSelected.png")
                  : require("../assets/Promotion.png")
              }
              style={styles.searchIcon}
            />
            <Text style={[styles.tabText, selectedTab === "Tab1" && styles.selectedTabText]}>
              {" "}
              {t('promotions')}
            </Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            selectedTab === "Tab2"
              ? styles.selectedBottomLine
              : styles.bottomLine
          }
          onPress={() => setSelectedTab("Tab2")}
        >
          <Text
            style={[styles.tab, selectedTab === "Tab2" && styles.selectedTab]}
          >
            <Image
              source={
                selectedTab === "Tab2"
                  ? require("../assets/WinnerSelected.png")
                  : require("../assets/Winner.png")
              }
              style={styles.searchIcon}
            />
            <Text style={[styles.tabText, selectedTab === "Tab2" && styles.selectedTabText]}>
              {" "}
              {t('winners')}
            </Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            selectedTab === "Tab3"
              ? styles.selectedBottomLine
              : styles.bottomLine
          }
          onPress={() => setSelectedTab("Tab3")}
        >
          <Text
            style={[styles.tab, selectedTab === "Tab3" && styles.selectedTab]}
          >
            <Image
              source={
                selectedTab === "Tab3"
                  ? require("../assets/HighSelected.png")
                  : require("../assets/High.png")
              }
              style={styles.searchIcon}
            />
            <Text style={[styles.tabText, selectedTab === "Tab3" && styles.selectedTabText]}>
              {" "}
              {t('highGames')}
            </Text>
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      <ScrollView style={styles.content}>
        {selectedTab === "Tab1" && <PromotionScreen handleSetIsWebViewVisible={() => setIsWebViewVisible(true)} />}
        {selectedTab === "Tab2" && <WinnerScreen />}
        {selectedTab === "Tab3" && <PopularScreen />}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  languageText: {
    color: "gold",
    fontSize: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  languageFrame: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'gold',
    borderRadius: 5,
    padding: 5,
    width: 70
  },
  logo: {
    width: 170,
    height: 50,
    marginLeft: -35,
  },
  languageIcon: {
    width: 20,
    height: 20,
  },
  bannerContainer: {
    height: 200,
    marginBottom: 20,
  },
  card: {
    width,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  bannerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  tabContainer: {
    flexDirection: "row",
    margin: "auto",
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginHorizontal: 3,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "#FFD700",
  },
  bottomLine: {
    borderBottomWidth: 2,
    paddingBottom: 40,
    borderBottomColor: "#2c2c2c",
    marginBottom: 40,
  },
  selectedBottomLine: {
    borderBottomWidth: 2,
    paddingBottom: 40,
    borderBottomColor: "gold",
    marginBottom: 40,
  },
  tabText: {
    fontSize: 10,
    color: "white",
  },
  selectedTab: {
    backgroundColor: "#FFD700",
  },
  selectedTabText: {
    color: "black",
  },
  searchIcon: {
    width: 17,
    height: 17,
  },
  button: {
    backgroundColor: "#383327",
    borderRadius: 5,
    padding: 10,
    width: 150,
    alignItems: "center",
    marginTop: -70,
    marginBottom: 70,
    marginLeft: 30,
  },
  buttonText: {
    color: "gold",
    fontSize: 14,
  },
  openAccountButton: {},
  content: {
    // padding: 8,
  },
});

export default HomeScreen;
