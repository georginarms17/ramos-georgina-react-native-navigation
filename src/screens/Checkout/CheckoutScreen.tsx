import React, { useState } from 'react';
import { View, Text, Pressable, FlatList, Image } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';
import CheckoutModal from '../../components/Modal/Modal';
import Styles from './Checkout.styles';

const CheckoutScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { items, clearSelectedItems, selectedTotal } = useCart();
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const styles = Styles(colors);

  const selectedItems = items.filter(item => item.selected);

  const handleCompleteCheckout = () => {
    clearSelectedItems();
    setModalVisible(true);
  };

  const handleModalConfirm = () => {
    setModalVisible(false);

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      })
    );
  };

  const renderSelectedItem = ({ item }: { item: any }) => (
    <View style={styles.itemCard}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName} numberOfLines={2}>{item.name}</Text>
        <Text style={styles.itemPrice}>₱{item.price.toFixed(2)}</Text>
        <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
        <Text style={styles.itemSubtotal}>
          Subtotal: ₱{(item.price * item.quantity).toFixed(2)}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="receipt" size={32} color={colors.accent} />
        <Text style={styles.headerTitle}>Order Summary</Text>
      </View>

      <FlatList
        data={selectedItems}
        keyExtractor={item => item.id}
        renderItem={renderSelectedItem}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No items selected</Text>
          </View>
        }
      />

      <View style={styles.footer}>
        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Items ({selectedItems.length}):</Text>
            <Text style={styles.summaryValue}>₱{selectedTotal.toFixed(2)}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Amount:</Text>
            <Text style={styles.totalValue}>₱{selectedTotal.toFixed(2)}</Text>
          </View>
        </View>

        <Pressable
          style={[
            styles.checkoutButton,
            selectedItems.length === 0 && styles.checkoutButtonDisabled
          ]}
          onPress={handleCompleteCheckout}
          disabled={selectedItems.length === 0}
        >
          <Ionicons name="checkmark-circle" size={24} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.checkoutButtonText}>Complete Checkout</Text>
        </Pressable>
      </View>

      <CheckoutModal
        visible={modalVisible}
        onConfirm={handleModalConfirm}
      />
    </View>
  );
};

export default CheckoutScreen;