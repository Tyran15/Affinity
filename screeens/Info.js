import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import Carlos from "../assets/Imagens/Fundadores/Carlos.jpg";
import Felipe from "../assets/Imagens/Fundadores/Felipe.jpg";

export default function Info() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desenvolvedores do Affinity</Text>
      <View style={styles.viewBase}>
        <View style={styles.containerDev}>
          <Image
            style={styles.image}
            source={require("../assets/Imagens/Fundadores/Carlos.jpg")}
          />
          <Text style={styles.devName}>Carlos Eduardo</Text>
        </View>
        <View style={styles.containerDev}>
          <Image
            style={styles.image}
            source={require("../assets/Imagens/Fundadores/Felipe.jpg")}
          />
          <Text style={styles.devName}>Felipe Felix</Text>
        </View>
        <View style={styles.containerDev}>
          <Image
            style={styles.image}
            source={require("../assets/Imagens/Fundadores/Heitor.jpg")}
          />
          <Text  style={styles.devName}>Heitor de Oliveira</Text>
        </View>
        <View style={styles.containerDev}>
          <Image
            style={styles.image}
            source={require("../assets/Imagens/Fundadores/Campos.jpg")}
          />
          <Text style={styles.devName}>Matheus Campos</Text>
        </View>
        <View style={styles.containerDev}>
          <Image
            style={styles.image}
            source={require("../assets/Imagens/Fundadores/Henrique.jpg")}
          />
          <Text style={styles.devName}>Matheus Henrique</Text>
        </View>
      </View>
      <StatusBar style="auto" />
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
  image: {
    height: 150,
    width: 150,
    marginBottom: 10,
  }, 
  viewBase: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: "center",
    justifyContent: "center",
  },
  containerDev: {
    marginBottom: 10,
    marginRight: 5,
  },
  title: {
    marginTop: 80,
    fontSize: 24,
    marginBottom:50,
    fontWeight: 'bold',
  },
  devName: {
    textAlign: 'center',
  }
});
