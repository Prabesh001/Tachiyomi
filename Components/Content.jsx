import { StyleSheet, Text, ScrollView, View, Image } from "react-native";
import { useState, useContext } from "react";
import { SelectedNavContext } from "../app/index";

const Content = () => {
  const { selectedNav } = useContext(SelectedNavContext);
  return (
    <ScrollView style={{margin: 10}}>
      <Text style={[styles.text]}>{selectedNav}</Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Content;
