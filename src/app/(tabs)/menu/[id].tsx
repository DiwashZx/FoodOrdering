<<<<<<< HEAD
import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: 'Details: ' + id }} />
      <Text style={{ fontSize: 20 }}>ProductDetailsScreens for id: {id}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
=======
import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const ProductDetailsScreen = () => {

  const {id} = useLocalSearchParams();
  return (
    <View>
      <Text style={{fontSize:20}}>ProductDetailsScreens for id: {id}</Text>
    </View>
  )
}

export default ProductDetailsScreen
>>>>>>> 05805b7f7d66ae72671f9985b3e62646dc6f28b2
