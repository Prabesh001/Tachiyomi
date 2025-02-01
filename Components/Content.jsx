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

const Content = () => {
  const { selectedNav } = useContext(SelectedNavContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://online-menu-system.onrender.com/api/menu"
        );
        const json = await response.json();

        const filteredData = json.filter((data) =>
          data.category.includes(selectedNav)
        );
        setItems(filteredData);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedNav]);

  return (
    <ScrollView style={{ margin: 10 }}>
      <Text style={[styles.text]}>{selectedNav}</Text>
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
              <Text style={[styles.text, styles.itemPrice]}>Rs. {item.discountedPrice}</Text>
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
  listItems: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: (10, 20),
    padding: 5,
    marginBottom: 50,
  },
  image: {
    minWidth: 180,
    aspectRatio: 5/8,
  },
  itemName: {
    maxWidth: 175,
    overflow: "hidden",
  },
  itemPrice:{
    color:"orange"
  },
  loader: {
    justifyContent:"center",
    alignItems:"center",
    height: 800
  },
});

export default Content;
