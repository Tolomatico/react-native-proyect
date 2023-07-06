import { StyleSheet,StatusBar } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: "white",
    },
    container: {
      flex: 1,
      marginHorizontal: 20,
      paddingTop: StatusBar.currentHeight,
    },
    main: {
      flex: 1,
    },
    text: {
      textAlign: "center",
      color: "white",
    },
  });
  