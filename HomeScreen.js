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
      <ScrollView style={[styles.scrollView, { marginBottom: 100 }]}>
        <View style={styles.paragraphContainer}>
          <Image
            source={require("../my-app/assets/cdm.png")}
            style={styles.image}
          />
          <Text style={styles.paragraph}>
            Vision is to "Transform individuals into responsible citizens
            capable of meeting the challenges of modern times."" While the
            Mission is "To prepare student to become useful citizens,
            God-fearing, value-oriented and disciplined individuals, who are
            universally competitive professionals engaged in the noble task of
            uplifting the quality of life in the community.""
          </Text>
        </View>
        <View style={styles.paragraphContainer}>
          <Image
            source={require("../my-app/assets/img1.png")}
            style={styles.image}
          />
          <Text style={styles.paragraph}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </Text>
        </View>
        <View style={styles.paragraphContainer}>
          <Image
            source={require("../my-app/assets/img1.png")}
            style={styles.image}
          />
          <Text style={styles.paragraph}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magna aliqua.
          </Text>
        </View>
      </ScrollView>
      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AboutScreen")}
        >
          <Text style={styles.buttonText}>About</Text>
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
  itemContainer: {
    flex: 1,
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 5,
    backgroundColor: "black",
  },
  button: {
    backgroundColor: "yellowgreen",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    width: 100,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "OswaldStencil",
  },
  image: {
    width: "100%",
    height: 200,
  },
  paragraphContainer: {
    padding: 10,
    backgroundColor: "black",
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 15,
    color: "#fff",
    marginBottom: 20,
    fontFamily: "OswaldStencil",
    textAlign: "center",
  },
  scrollView: {
    padding: 20,
  },
});

export default HomeScreen;
