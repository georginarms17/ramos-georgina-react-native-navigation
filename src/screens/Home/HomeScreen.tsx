import React from "react";
import { View, FlatList } from "react-native";
import { PRODUCTS } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useCart } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";
import Styles from "./HomeScreen.styles";

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { addToCart } = useCart();
  const { colors } = useTheme();
  const styles = Styles(colors);

  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onAddToCart={() => addToCart(item)}
            colors={colors}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;