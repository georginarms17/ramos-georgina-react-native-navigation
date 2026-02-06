import { StyleSheet } from "react-native";

export const Styles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    emptyContainer: {
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    emptyText: {
      fontSize: 18,
      color: colors.text,
      marginTop: 20,
      marginBottom: 30,
    },
    shopButton: {
      backgroundColor: colors.accent,
      paddingHorizontal: 30,
      paddingVertical: 12,
      borderRadius: 8,
    },
    shopButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    listContainer: {
      padding: 10,
    },
    cartItem: {
      flexDirection: "row",
      backgroundColor: colors.card,
      borderRadius: 10,
      padding: 12,
      marginBottom: 12,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    checkbox: {
      justifyContent: "center",
      paddingRight: 10,
    },
    itemImage: {
      width: 80,
      height: 80,
      borderRadius: 8,
      marginRight: 12,
    },
    itemDetails: {
      flex: 1,
      justifyContent: "space-between",
    },
    itemName: {
      fontSize: 14,
      fontWeight: "bold",
      color: colors.text,
      marginBottom: 4,
    },
    itemPrice: {
      fontSize: 13,
      color: colors.text,
      opacity: 0.7,
    },
    quantityContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 8,
    },
    quantityButton: {
      width: 28,
      height: 28,
      borderRadius: 14,
      backgroundColor: colors.background,
      justifyContent: "center",
      alignItems: "center",
    },
    quantityText: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors.text,
      marginHorizontal: 15,
      minWidth: 20,
      textAlign: "center",
    },
    subtotal: {
      fontSize: 14,
      fontWeight: "bold",
      color: colors.accent,
      marginTop: 4,
    },
    footer: {
      backgroundColor: colors.card,
      padding: 16,
      borderTopWidth: 1,
      borderTopColor: colors.background,
    },
    totalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
    },
    totalLabel: {
      fontSize: 16,
      color: colors.text,
      fontWeight: "600",
    },
    totalAmount: {
      fontSize: 24,
      fontWeight: "bold",
      color: colors.accent,
    },
    checkoutButton: {
      backgroundColor: colors.accent,
      paddingVertical: 14,
      borderRadius: 8,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    checkoutButtonDisabled: {
      opacity: 0.5,
    },
    checkoutButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
  });

export default Styles;
