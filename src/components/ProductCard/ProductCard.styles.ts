import { StyleSheet } from "react-native";

const Styles = (colors: any) =>
  StyleSheet.create({
    card: {
      backgroundColor: colors.card,
      padding: 15,
      borderRadius: 10,
      flex: 1,
      maxWidth: "48%",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      marginBottom: 10,
      flexDirection: "column", 
      justifyContent: "space-between", 
      height: 300, 
    },
    image: {
      width: "100%",
      height: 160,
      borderRadius: 8,
      marginBottom: 5,
    },
    name: {
      fontSize: 16,
      fontWeight: "800",
      color: colors.text,
      marginBottom: 5,
    },
    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    },
    price: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.accent,
    },
    button: {
      backgroundColor: colors.accent,
      padding: 8,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
    },
  });

export default Styles;
