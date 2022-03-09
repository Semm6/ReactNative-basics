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
