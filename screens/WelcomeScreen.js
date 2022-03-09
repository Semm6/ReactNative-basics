import React from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";
import {
  Button,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import Line from "../components/Line";

function WelcomeScreen() {
  const { landscape } = useDeviceOrientation();

  const SignIn = () => {
    Alert.alert("Sign in");
  };

  const SignUp = () => {
    Alert.alert("Sign in");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: "https://i.pinimg.com/originals/c8/ea/31/c8ea31d1fd180e7c7a97a140b3fbbc12.gif",
          width: 200,
          height: 200,
        }}
      />
      <View style={{ top: -50 }}>
        <Text style={{ fontSize: 30 }}>Welcome to the globe</Text>
        <Text style={{ top: -80, marginTop: 100, textAlign: "center" }}>
          Everything about the world is available here!
        </Text>
      </View>
      <View style={{ top: -110 }}>
        <Line />
      </View>
      <View style={{ top: 150, color: "black" }}>
        <TouchableOpacity onPress={SignIn} style={styles.btn}>
          <Text style={styles.txt}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={SignUp} style={styles.btn}>
          <Text style={styles.txt}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 8,
  },
  img: {
    top: -80,
  },
  txt: {
    justifyContent: "center",
    alignContent: "center",
  },
  btn: {
    color: "black",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "lightblue",
    marginTop: 20,
    height: 30,
    width: 300,
    bottom: 50,
    borderRadius: 50,
    justifyContent: "center",
  },
});

export default WelcomeScreen;
