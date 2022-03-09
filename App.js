import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import AlertExample from "./components/AlertExample";
import BottomNav from "./components/BottomNav";
import ButtonExample from "./components/ButtonExample";
import FlexboxExample from "./components/FlexboxExample";
import ImageExample from "./components/ImageExample";
import TextExample from "./components/TextExample";
import TopNav from "./components/TopNav";
import APIRequest from "./screens/APIRequest";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <TopNav />
      <APIRequest />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
