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
