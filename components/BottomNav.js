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
