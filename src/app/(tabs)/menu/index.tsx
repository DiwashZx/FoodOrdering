import { FlatList, View } from "react-native";
import products from "@assets/data/products";
import ProductListItem from "@components/ProductListitem";

export default function MenuScreen() {
  return (
    <View>
      {/* <ProductListItem product={products[8]} />
      <ProductListItem product={products[6]} />
      <ProductListItem product={products[2]} /> */}
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }} // gaps between bottom
        columnWrapperStyle={{ gap: 10 }} //gaps between middle
      />
    </View>
  );
}
