import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const Navigator = () => {
  const navigatorItems = ["Library", "Updates", "History", "Browse", "More"];
  return (
    <View style={styles.navigator}>
      {navigatorItems.map((item) => (
        <Pressable key={item} onPress={() => console.log(item)}>
          <View key={item} style={styles.navigatorItem}>
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
  },
  navigatorItem: {
    padding: 10,
  },
  navigatorText: {
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default Navigator;
