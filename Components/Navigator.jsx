import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import { SelectedNavContext } from "../app/index";

const Navigator = () => {
  const { setSelectedNav, selectedNav } = useContext(SelectedNavContext);
  const navigatorItems = ["Library", "Updates", "History", "Browse", "More"];
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
    backgroundColor: "lightgray",
    height: 50,
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 1000,
  },
  navigatorItem: {
    padding: 10,
    backgroundColor: "lightgray",
  },
  activeNavigatorItem: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  navigatorText: {
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default Navigator;
