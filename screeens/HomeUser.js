import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomeUser() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 'bold',
  }
});
