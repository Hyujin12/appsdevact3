import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ref, onValue, set } from "firebase/database";
import { rtdb } from "./firebaseConfig";

function AboutScreen() {
  const navigation = useNavigation();
  const [value, setValue] = useState(0);

  useEffect(() => {
    const valueRef = ref(rtdb, "value");
    return onValue(valueRef, (snapshot) => {
      setValue(snapshot.val() ?? 0);
    });
  }, []);

  const handlePlus = async () => {
    const valueRef = ref(rtdb, "value");
    try {
      await set(valueRef, value + 1);
    } catch (error) {
      console.error("Error updating value:", error);
    }
  };

  const handleMinus = async () => {
    const valueRef = ref(rtdb, "value");
    try {
      await set(valueRef, value - 1);
    } catch (error) {
      console.error("Error updating value:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>COUNTER</Text>
        <Text style={styles.value}>{value}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleMinus}
            accessibilityLabel="Decrease counter"
            accessible={true}
          >
            <Text style={styles.countText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handlePlus}
            accessibilityLabel="Increase counter"
            accessible={true}
          >
            <Text style={styles.countText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={styles.buttonText}>Home</Text>
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

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  countContainer: {
    justifyContent: "center",
    backgroundColor: "#ffffff",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  countText: {
    fontSize: 50,
    color: "#336234",
    textAlign: "center",
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: "darkgreen",
  },
  button: {
    backgroundColor: "yellowgreen",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    width: screenWidth * 0.3,
  },
  buttonText: {
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  value: {
    fontSize: 100,
    color: "#434a2a",
    textAlign: "center",
  },
});

export default AboutScreen;
