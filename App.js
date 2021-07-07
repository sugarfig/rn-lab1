import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image source={require("./assets/perry.png")} style={styles.photo} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameAndPronouns}>Perry (she/her)</Text>
      </View>
      <View style={styles.blurbContainer}>
        <Text style={styles.blurb}>chirp chirp i'm a parakeet</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photoContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    padding: 30,
  },
  nameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blurbContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    resizeMode: "contain",
    width: "90%",
    padding: 50,
  },
  nameAndPronouns: {
    fontSize: 50,
  },
  blurb: {
    fontSize: 20,
  },
});
