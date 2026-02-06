import { StyleSheet } from "react-native";

export const Styles = (colors: any) =>
  StyleSheet.create({
    card: {
      backgroundColor: colors.card,
      padding: 15,
      margin: 5,
      borderRadius: 10,
      flex: 1,
      maxWidth: "48%",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      position: "relative",
    },
    image: {
      width: "100%",
      height: 150,
      borderRadius: 8,
      marginBottom: 10,
    },
    name: {
      fontSize: 18,
      fontWeight: "800",
      color: colors.text,
      marginBottom: 40,
    },
    price: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.accent,
      marginBottom: 5,
      marginLeft: 5,
      position: "absolute",
      bottom: 10,
      left: 10,
    },
    button: {
      backgroundColor: colors.accent,
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      position: "absolute",
      bottom: 10,
      right: 10,
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
    },
  });

export default Styles;
