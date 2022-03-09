import React from "react";
import { Button, View, Alert } from "react-native";

// This function gives options in an alert
const func1 = () => {
  Alert.alert("my title", "My Message", [
    { text: "Yes", onPress: () => console.log("Yes") },
    { text: "No", onPress: () => console.log("No") },
  ]);
};

// This function makes it possible to write messages
const func2 = () => {
  Alert.prompt("my title", "My Message", (text) => console.log(text));
};

const AlertExample = () => {
  return (
    <View>
      <Button title="Alert button" onPress={func2}></Button>
    </View>
  );
};

export default AlertExample;
