import React from "react";
import { StyleSheet, Text, View, SectionList, StatusBar } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const DATA = [
  {
    title: "Main dishes",
    data: ["🍕", "🍔", "🥘"],
  },
  {
    title: "Sides",
    data: ["🍟", "🧅", "🍤"],
  },
  {
    title: "Drinks",
    data: ["🍾", "🥤", "🍺"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

// const DATA = [
//   {
//     title: "The Shawshank Redemption",
//     year: 1994,
//     director: "Frank Darabont",
//     genres: ["Drama", "Crime"],
//     rating: 9.3,
//     image_url: "https://example.com/shawshank_redemption.jpg",
//   },
//   {
//     title: "The Godfather",
//     year: 1972,
//     director: "Francis Ford Coppola",
//     genres: ["Crime", "Drama"],
//     rating: 9.2,
//     image_url: "https://example.com/the_godfather.jpg",
//   },
//   {
//     title: "Pulp Fiction",
//     year: 1994,
//     director: "Quentin Tarantino",
//     genres: ["Crime", "Drama"],
//     rating: 8.9,
//     image_url: "https://example.com/pulp_fiction.jpg",
//   },
//   {
//     title: "The Dark Knight",
//     year: 2008,
//     director: "Christopher Nolan",
//     genres: ["Action", "Crime", "Drama"],
//     rating: 9.0,
//     image_url: "https://example.com/the_dark_knight.jpg",
//   },
//   {
//     title: "Inception",
//     year: 2010,
//     director: "Christopher Nolan",
//     genres: ["Action", "Sci-Fi", "Adventure"],
//     rating: 8.8,
//     image_url: "https://example.com/inception.jpg",
//   },
// ];

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={["top"]}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const reducedData = DATA.reduce((acc, { title, data }) => {
  acc[title] = data;
  return acc;
}, {});

console.log(reducedData);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    backgroundColor: "#f0f0f0",
  },
  item: {
    backgroundColor: "#fafafa",
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    color: "#333",
  },
});

export default App;
