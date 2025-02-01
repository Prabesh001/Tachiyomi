import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import { SelectedNavContext } from "../app/index";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Navigator = () => {
  const { setSelectedNav, selectedNav } = useContext(SelectedNavContext);
  const navigatorItems = [
    {name: "Main Course", icon: "food-bank"},
    {name: "Side Dish", icon: "fastfood"},
    {name: "Appetizer", icon: "donut-small"},
    {name: "Beverage", icon: "emoji-food-beverage"},
    {name: "Soup", icon: "soup-kitchen"}
  ];
  return (
    <View style={styles.navigator}>
      {navigatorItems.map((item) => (
        <Pressable key={item.name} onPress={() => setSelectedNav(item)}>
          <View
            key={item.name}
            style={[
              styles.navigatorItem,
              selectedNav.name === item.name && styles.activeNavigatorItem,
            ]}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <MaterialIcons
                name={item.icon}
                size={30}
                color="white"
              />
            </View>
            <Text style={styles.navigatorText}>{item.name}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navigator: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#0a0a0a",
    height: 70,
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 1000,
    padding: 3,
    boxShadow: "0px 3px 5px lightgray",
  },
  navigatorItem: {
    paddingVertical: 4,
    paddingHorizontal: 7,
    backgroundColor: "#0a0a0a",
  },
  activeNavigatorItem: {
    backgroundColor: "black",
    borderRadius: 7,
  },
  navigatorText: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
});

export default Navigator;
