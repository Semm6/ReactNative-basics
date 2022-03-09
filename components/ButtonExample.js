import React from "react";
import { Button, View } from "react-native";

const func = () => {
  console.log("Tapped it!");
};

const ButtonExample = () => {
  return (
    <View>
      <Button title="Button" onPress={func}></Button>
    </View>
  );
};

export default ButtonExample;
