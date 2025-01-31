import { View, StatusBar, SafeAreaView, StyleSheet } from "react-native";
import Navigator from "../Components/Navigator";

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Navigator />
    </SafeAreaView>
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
