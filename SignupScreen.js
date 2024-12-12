import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useFonts } from "expo-font";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [fontsLoaded, error] = useFonts({
    OswaldStencil: require("./assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (error) {
      console.error("Error loading fonts:", error);
    }
  }, [error]);

  const isFormValid = () =>
    email.includes("@") && password === confirmPassword && password.length >= 8;

  const handleSignup = async () => {
    if (!isFormValid()) {
      Alert.alert(
        "Try again",
        "Please enter a valid email and matching passwords with at least 8 characters"
      );
      return;
    }

    setIsSubmitting(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Account created successfully");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigation.navigate("LoginScreen");
    } catch (error) {
      console.error("Error creating user:", error);
      Alert.alert("Error", `Error creating user: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground
      style={styles.container}
      source={require("./assets/images/loginpic.jpg")}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={[styles.inputContainer, styles.lastInputContainer]}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSignup}
          disabled={isSubmitting}
          accessibilityLabel="Create account"
        >
          <Text style={styles.buttonText}>
            {isSubmitting ? "Creating..." : "Create"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("LoginScreen")}
          accessibilityLabel="Return to login"
        >
          <Text style={styles.buttonText}>Return</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  inputContainer: {
    marginBottom: 10,
  },
  lastInputContainer: {
    marginBottom: 20,
  },
  input: {
    width: 300,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 10,
    fontFamily: "OswaldStencil",
  },
  button: {
    backgroundColor: "yellowgreen",
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    width: 100,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "OswaldStencil",
  },
});

export default SignupScreen;
