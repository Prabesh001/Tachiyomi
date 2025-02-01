import { View, StatusBar, SafeAreaView, StyleSheet, Text } from "react-native";
import Navigator from "../Components/Navigator";
import Content from "../Components/Content";
import { createContext, useState } from "react";

export const SelectedNavContext = createContext();

const index = () => {
  const [selectedNav, setSelectedNav] = useState("Main Course");
  return (
    <SelectedNavContext.Provider value={{ selectedNav, setSelectedNav }}>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Navigator />
        <Content />
      </SafeAreaView>
     </SelectedNavContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    color: "white",
    position: "relative",
  },
});
export default index;
