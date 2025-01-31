import {
  Image,
  Modal,
  Text,
  View,
  ScrollView,
  Pressable,
  Button,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState } from "react";
const icon = require("../assets/images/favicon.png");

const Greet = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <ActivityIndicator size="large" color="orange" />
      <StatusBar backgroundColor="aqua" barStyle="dark-content" />

      <Button
        title="Alert 2"
        onPress={() =>
          Alert.alert("INVALID!", "This is an alert 2.", [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
            { text: "Ok", onPress: () => console.log("Ok Pressed") },
          ])
        }
      />

      <Button
        title="Alert"
        onPress={() => Alert.alert("Hello World", "This is an alert")}
      />
      <Pressable>
        <Text>Hi!</Text>
        <Text
          onPress={() => {
            console.log("Text Pressed");
          }}
        >
          Hello World!
        </Text>
      </Pressable>

      <Pressable onPress={() => console.log("Image Pressed")}>
        <Image source={icon} style={{ width: 200, height: 200 }} />
      </Pressable>
      <Button
        title="Press"
        onPress={() => {
          setModalVisible(true);
        }}
        color="red"
      />

      {/* <Modal
          visible={modalVisible}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View
            style={{
              height: 100,
              width: "100%",
              backgroundColor: "lightgreen",
            }}
          >
            <Text>Warning</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </Modal> */}
    </View>
  );
};

export default Greet;
