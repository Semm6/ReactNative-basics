import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";

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
