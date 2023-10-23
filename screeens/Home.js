import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Home() {
  
  const realizarLogin = () => {
    navigation.navigate('Login');
  }
  const realizarCadastro = () => {
    navigation.navigate('Sinup')
  }


  return (
      <LinearGradient colors={['#400E57', '#004DBF']} style={styles.container}>
        <View style={styles.caixa1}>
          <Image source={require('../assets/Imagens/Logo.png')} style={styles.imagem}/>
          <Text style={styles.text}>O seu parceiro está a um clique de Distância</Text>
        </View>
        <View style={styles.caixa2}>
          <Text style={styles.text}>Ao tentar entrar você concorda com nossos Termos de uso e privacidade</Text>
          <TouchableOpacity style={styles.button} onPress={() => realizarLogin}>
            Entrar
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=> realizarCadastro}>
            Cadastrar
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    height: '12rem',
    width: '100%',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    width: '20rem',
    fontSize: 16,
  },
  caixa1: {
    marginBottom: '50%',
  },
  caixa2: {
    alignItems: 'center',
  },
  button: {
    borderWidth: 2,
    padding: 5,
    width: 180,
    marginTop: 30,
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    borderColor: 'white',
    borderRadius: 35,
  },
});
