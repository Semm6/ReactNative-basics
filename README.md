# React native basics

## Setup

```
1. create-react-native-app {YOURAPPNAME}
2. cd into folder
3. sudo npm install -g expo-cli
4. expo init {YOURAPPNAME}
5. cd into app folder
6. npm run ios
```

## Basiscs

### Text

```javascript
import React from "react";
import { View, Text } from "react-native";

const TextExample = () => {
  return (
    <View>
      <Text>hey</Text>
    </View>
  );
};

export default TextExample;

```

### Button

```javascript
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
```

### Alert

```javascript
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
```

### Image

```javascript
import { useDeviceOrientation } from "@react-native-community/hooks";
import React from "react";
import { View, Image } from "react-native";

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

```

### Line

```javascript
import React from "react";
import { View } from "react-native";

export default function Line() {
  return (
    <View
      style={{
        height: 0.5,
        backgroundColor: "black",
        width: 300,
      }}
    />
  );
}
```

### FlexBox

```javascript
import React from "react";
import { View, StyleSheet, Text } from "react-native";

const FlexboxExample = () => {
  return (
    <View style={styles.con}>
      <View style={styles.con1}>
        <Text>1</Text>
      </View>
      <View style={styles.con2}>
        <Text>2</Text>
      </View>
      <View style={styles.con3}>
        <Text>3</Text>
      </View>
      <View style={styles.con4}>
        <Text>4</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  con: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  con1: {
    height: 100,
    width: "20%",
    backgroundColor: "dodgerblue",
  },
  con2: {
    height: 100,
    width: "20%",
    backgroundColor: "red",
  },
  con3: {
    height: 100,
    width: "20%",
    backgroundColor: "yellow",
  },
  con4: {
    height: 100,
    width: "20%",
    backgroundColor: "green",
  },
});

export default FlexboxExample;

```

### Top navigation

```javascript
import * as React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";

const TopNav = () => (
  <Appbar.Header style={styles.appBar}>
    <Appbar.Content
      title="React native basics"
      titleStyle={styles.appBarTitle}
    />
  </Appbar.Header>
);

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: "#7198FF",
  },
  appBarTitle: {
    fontSize: 24,
    color: "#ffff",
  },
});

export default TopNav;

```

### Bottom navigation

```javascript
import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";

const Route1 = () => <Text>Route1</Text>;

const Route2 = () => <Text>Route2</Text>;

const Route3 = () => <Text>Route3</Text>;

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "route1", title: "Route1" },
    { key: "route2", title: "Route2" },
    { key: "route3", title: "Route3" },
  ]);

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case "home":
        return <Route1 jumpTo={Route1} />;
      case "music":
        return <Route2 jumpTo={Route2} />;
      case "podcast":
        return <Route3 jumpTo={Route3} />;
    }
  };

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={false}
      barStyle={{ backgroundColor: "#7198FF" }}
    />
  );
};

export default BottomNav;

```

# Sample screen

```javascript

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

```

# API request

```javascript

import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

const APIRequest = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: 20,
      }}
    >
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <FlatList
            data={data.data}
            renderItem={({ item }) => <Text>{item.email}</Text>}
          />
        </View>
      )}
    </View>
  );
};

export default APIRequest;

```

