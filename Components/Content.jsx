import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import { useState, useContext, useEffect, useLayoutEffect } from "react";
import { SelectedNavContext } from "../app/index";
const image = require("../assets/images/favicon.png");
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Content = () => {
  const { selectedNav } = useContext(SelectedNavContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://online-menu-system.onrender.com/api/menu"
        );
        const json = await response.json();

        const filteredData = json.filter((data) =>
          data.category.includes(selectedNav.name)
        );
        setItems(filteredData);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      } finally {
        setLoading(true);
      }
    };

    fetchData();
  }, [selectedNav]);

  return (
    <ScrollView style={{ marginVertical: 10 }}>
      <View style={styles.headerWithIcon}>
        <Text style={[styles.text, styles.header]}>{selectedNav.name} </Text>
        <MaterialIcons name={selectedNav.icon} size={30} color="white" />
      </View>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <View style={styles.listItems}>
          {items.map((item, i) => (
            <View key={i}>
              <Image
                source={{ uri: item.photoUrl } || image}
                alt="No Photo"
                style={styles.image}
              />
              <Text style={[styles.text, styles.itemName]}>{item.name}</Text>
              <Text style={[styles.text, styles.itemPrice]}>
                Rs. {item.discountedPrice}
              </Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  header: {
    fontSize: 25,
  },
  listItems: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: (10, 20),
    padding: 5,
    marginBottom: 70,
  },
  image: {
    minWidth: 180,
    aspectRatio: 5 / 8,
  },
  itemName: {
    maxWidth: 175,
    overflow: "hidden",
  },
  itemPrice: {
    color: "orange",
  },
  loader: {
    justifyContent: "center",
    alignItems: "center",
    height: 750,
  },
  headerWithIcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    boxShadow:"0 0 1px lightgray",
    padding: 6
  },
});

export default Content;
