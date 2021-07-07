import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.nameContainer}>
        <Text style={styles.name}>Erica</Text>
        <Text style = {styles.pronouns}> (she / her)</Text>
      </View>

      <View style={styles.photoContainer}>
        <Image source={require("./assets/bunny1.jpeg")} style={styles.photo} />
      </View>

      <TouchableOpacity
        onPress={() => alert('How do trees access the internet? ---- They log on.')}
        style={styles.dontClickButton}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Don't click me :)</Text>
      </TouchableOpacity>

      <View style={styles.blurbContainer}>
        <Text style={styles.blurb}>Hello ! My name is Erica and I enjoy figure skating, hiking, and programming. </Text>
        
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },

  photoContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor: "#82EEFD",
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
    backgroundColor: "#99EDC3",
    
  },

  photo: {
    resizeMode: "contain",
    width: "90%",
    padding: 50,
  },

  name: {
    fontSize: 50,
  },

  pronouns:{
    fontSize: 20,
  },

  blurb: {
    textAlign: "center",
    padding: 30,
    fontSize: 20,
  },

  dontClickButton:
  {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BCA0DC", 
  }
});
