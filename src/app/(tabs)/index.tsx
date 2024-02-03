import {  View } from "react-native";
import products from "@assets/data/products";
import ProductListItem from "@components/ProductListitem";



export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product={products[8]} />
      <ProductListItem product={products[6]} />
      <ProductListItem product={products[2]} />
    </View>
  );
}

