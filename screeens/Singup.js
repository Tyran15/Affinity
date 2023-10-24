import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const navigation = useNavigation();

  const Login = () => {
    navigation.navigate('Login')
  };
  const entrar = () => {
    navigation.navigate('Match')
  }

  return (
    <LinearGradient colors={['#400E57', '#004DBF']} style={styles.container}>
      <View style={styles.caixa1}>
          <Text style={styles.titulo}>Cadastro</Text>
          <TextInput 
          style={styles.input}
           placeholder='Nome'
           value={nome}
           placeholderTextColor='white'
           onChangeText={(text) => setNome(text)}
          />

        <TextInput 
          style={styles.input}
           placeholder='E-mail'
           value={email}
           placeholderTextColor='white'
           onChangeText={(text) => setEmail(text)}
          />

        <TextInput 
          style={styles.input}
           placeholder='Senha'
           secureTextEntry={true}
            passwordRules
           value={senha}
           placeholderTextColor='white'
           onChangeText={(text) => setSenha(text)}
          />
       </View>
       <View style={styles.caixa2}>
          <TouchableOpacity style={styles.button} onPress={entrar}><Text style={styles.placeholder}>Entrar</Text></TouchableOpacity>
          <TouchableOpacity style={styles.link} onPress={Login}><Text style={styles.placeholder}>Já tem uma conta?</Text></TouchableOpacity>
       </View>
        <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  caixa1: {
    marginBottom: '50%',
    alignItems: 'center',
  },
  caixa2: {
    alignItems: 'center',
  },
  titulo:{
    color: "#fff",
    fontSize: 50,
    marginBottom: "10%",
  },
  input: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    color: 'white',
    width: 250,
    marginBottom: '10%',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    borderColor: 'white',
    borderWidth: 2,
    color: 'white',
    width: 180,
    height: 44,
    textAlign: 'center',
    fontSize: 24,
    justifyContent: 'center',
    borderRadius: 35,
    fontWeight: 'bold',
    marginBottom: '15%',
  },
  link: {
    fontSize: 24,
    color: 'white',
    textDecorationLine: 'underline',  
  },
  placeholder: {
    color: 'white',
    fontSize: 24,
    textAlign: "center",
  },
});
