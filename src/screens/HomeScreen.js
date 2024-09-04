/**
 * @format
 */
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import PromotionScreen from "./PromotionScreen";
import WinnerScreen from "./WinnerScreen";
import PopularScreen from "./PopularScreen";
import Banner from "../components/Banner";
import WebViewScreen from "./WebviewScreen"; // Adjust the path as needed

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState("Tab1");
  const [isWebViewVisible, setIsWebViewVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Header with Logo, Search Bar, and Language Selector */}
      <WebViewScreen
        visible={isWebViewVisible}
        onClose={() => setIsWebViewVisible(false)}
        url="https://shal777.com/" // Replace with your actual URL
      />
      <View style={styles.header}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
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
      <View>
        <View style={styles.card}>
          <Image
            source={require("../assets/bannerMyanmar.png")}
            style={styles.bannerImage}
          />
        </View>

        <View style={styles.openAccountButton}>
        <TouchableOpacity style={styles.button} onPress={() => setIsWebViewVisible(true)}>
          <Text style={styles.buttonText}>အကောင့်ဖွင့်ရန်</Text>
        </TouchableOpacity>
        </View>
      </View>
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
            <Text
              style={[
                styles.tabText,
                selectedTab === "Tab1" && styles.selectedTabText,
              ]}
            >
              <Image
                source={
                  selectedTab === "Tab1"
                    ? require("../assets/PromotionSelected.png")
                    : require("../assets/Promotion.png")
                }
                style={styles.searchIcon}
              />
              <Text> ပရိုမိုးရှင်းများ</Text>
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
            <Text
              style={[
                styles.tabText,
                selectedTab === "Tab2" && styles.selectedTabText,
              ]}
            >
              <Image
                source={
                  selectedTab === "Tab2"
                    ? require("../assets/WinnerSelected.png")
                    : require("../assets/Winner.png")
                }
                style={styles.searchIcon}
              />
              <Text> အနိုင်ရရှိသူများ</Text>
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
            <Text
              style={[
                styles.tabText,
                selectedTab === "Tab3" && styles.selectedTabText,
              ]}
            >
              <Image
                source={
                  selectedTab === "Tab3"
                    ? require("../assets/HighSelected.png")
                    : require("../assets/High.png")
                }
                style={styles.searchIcon}
              />
              <Text> အလျော်ကြမ်းဂိမ်းများ</Text>
            </Text>
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {selectedTab === "Tab1" && <PromotionScreen />}
        {selectedTab === "Tab2" && <WinnerScreen />}
        {selectedTab === "Tab3" && <PopularScreen />}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
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
  customContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    backgroundColor: "#2c2c2c",
    borderRadius: 8,
    color: "#fff",
  },
  searchIcon: {
    width: 17,
    height: 17,
  },
  banner: {
    padding: 16,
    alignItems: "center",
  },
  bannerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10
  },
  bannerText: {
    marginTop: 8,
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  bonusContainer: {
    padding: 5,
  },
  bonusCard: {
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: "#333",
    padding: 16,
    alignItems: "center",
  },
  bonusImage: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },
  bonusText: {
    marginTop: 8,
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  // bannerImage: {
  //   width: 200,
  //   height: 200,
  //   borderRadius: 10,
  // },
  card: {
    flexDirection: "row",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // This is for Android shadow
    padding: 5,
    margin: 5,
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
    color: "gold", // White text on gold button
    fontSize: 14,
  },
  openAccountButton: {

  }
});

export default HomeScreen;
