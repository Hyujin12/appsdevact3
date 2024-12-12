import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/images/controlpic.jpg")}
        style={styles.image}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.paragraphContainer}>
          <Text style={styles.paragraph}>
            "Embrace the warmth and joy of Christmas in the cozy confines of
            home. With twinkling lights, festive decorations, and the comforting
            scent of holiday treats, this special place transforms into a haven
            of holiday cheer. The laughter of loved ones and the sounds of
            carols fill the air, creating a magical atmosphere where the true
            spirit of Christmas is felt in every corner."
          </Text>
        </View>
      </ScrollView>
      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AppScreen")}
        >
          <Text style={styles.buttonText}>Control Room</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    backgroundColor: "black",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  button: {
    backgroundColor: "yellowgreen",
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    width: 100,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "OswaldStencil",
  },
  image: {
    width: "100%",
    height: "auto",
    resizeMode: "cover",
  },
  paragraphContainer: {
    padding: 10,
    backgroundColor: "black",
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 15,
    color: "white",
    marginBottom: 20,
    fontFamily: "OswaldStencil",
    textAlign: "center",
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
});

export default HomeScreen;
