import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import { SelectedNavContext } from "../app/index";

const Navigator = () => {
  const { setSelectedNav, selectedNav } = useContext(SelectedNavContext);
  const navigatorItems = ["Main Course", "Side Dish", "Appetizer", "Beverage", "Soup"];
  return (
    <View style={styles.navigator}>
      {navigatorItems.map((item) => (
        <Pressable
          key={item}
          onPress={() => setSelectedNav(item)}
        >
          <View
            key={item}
            style={[
              styles.navigatorItem,
              selectedNav === item && styles.activeNavigatorItem,
            ]}
          >
            <Text style={styles.navigatorText}>{item}</Text>
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
    height: 50,
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 1000,
    padding: 3,
    boxShadow: '0px 1px 5px white'
  },
  navigatorItem: {
    paddingVertical:9,
    paddingHorizontal: 7,
    backgroundColor: "#0a0a0a",
  },
  activeNavigatorItem: {
    backgroundColor: "black",
    borderRadius: 7,
  },
  navigatorText: {
    fontSize: 16,
    color:"white",
    fontWeight: "bold",
  },
});

export default Navigator;
