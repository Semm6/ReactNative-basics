import { useDeviceOrientation } from "@react-native-community/hooks";
import React from "react";
import { Button, View, Image } from "react-native";

const ImageExample = () => {
  // npm install @react-native-community/hooks
  // This helps with dimensions for your app. For example if you want to make a box the right size when you are in landscape mode
  const { landscape } = useDeviceOrientation();

  return (
    <View>
      <Image
        source={{
          width: "100%",
          height: landscape ? "80%" : "60%",
          uri: "https://www.clariontech.com/hubfs/Top-Mobile-App-Development-Frameworks-in-2022.jpg",
        }}
      />
    </View>
  );
};

export default ImageExample;
