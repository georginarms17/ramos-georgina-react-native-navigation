import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import Styles from "./ProductCard.styles";
import { Ionicons } from "@expo/vector-icons";

interface ProductCardProps {
  product: any;
  onAddToCart: () => void;
  colors: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, colors }) => {
  const styles = Styles(colors);

  return (
    <View style={styles.card}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>₱{product.price}</Text>
        <Pressable style={styles.button} onPress={onAddToCart}>
          <Ionicons name="cart-outline" size={20} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
};

export default ProductCard;