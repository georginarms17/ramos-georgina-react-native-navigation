import { StyleSheet } from "react-native";

const Styles = (colors: any) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.4)",
    },
    modal: {
      width: "80%",
      padding: 20,
      borderRadius: 8,
      backgroundColor: "#fff",
    },
    title: {
      fontSize: 18,
      fontWeight: "600",
      marginBottom: 16,
      textAlign: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    button: {
      padding: 10,
      alignItems: "center",
      borderRadius: 4,
      backgroundColor: colors.accent,
    },
  });

export default Styles;