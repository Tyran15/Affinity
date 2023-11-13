import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomeUser() {
  return (
    <View style={styles.container}>
      <View style={styles.deshboard}>
        <Text style={styles.title}>Home</Text>
      </View>
      <View style={styles.deshboard}>
        <Text style={styles.title}>Home</Text>
      </View>
      <View style={styles.deshboard}>
        <Text style={styles.title}>Home</Text>
      </View>
      <View style={styles.deshboard}>
        <Text style={styles.title}>Home</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    display: 'flex',
  },
  title: {
    color: 'red',
    fontWeight: 'bold',
  },
  deshboard:{
    width: 150,
    height: 175,
    borderColor: 'red',
    borderWidth: 3,
  },  
});
