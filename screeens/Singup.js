import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  

  return (
    <LinearGradient colors={['#400E57', '#004DBF']} style={styles.container}>
      <View style={styles.container}>
        <View>
          <Text style={styles.titulo}>Cadastro</Text>
        </View>
        <View>
          <TextInput 
          style={styles.textInput}
           placeholder='Nome'
           value={nome}
           onChangeText={(text) => setNome(text)}
          />

        <TextInput 
          style={styles.textInput}
           placeholder='E-mail'
           value={email}
           onChangeText={(text) => setEmail(text)}
          />

        <TextInput 
          style={styles.textInput}
           placeholder='Senha'
           value={senha}
           onChangeText={(text) => setSenha(text)}
          />
        </View>
        <StatusBar style="auto" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color: "#fff",
    fontSize: 50,
    marginBottom: "10%",
  },
  textInput:{
    color: "#fff",
    fontSize: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
    width: 250,
    marginBottom: '10%',
  }
});
