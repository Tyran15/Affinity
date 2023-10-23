import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
  return (
  <LinearGradient colors={['#400E57', '#004DBF']} style={styles.container}>      
    <View style={styles.caixa1}>
        <Text style={styles.tittle}>Login</Text>
        <TextInput style={styles.input} placeholder='E-mail' />
        <TextInput style={styles.input} placeholder='Senha' />
      </View>

      <View style={styles.caixa2}>
        <TouchableOpacity style={styles.button}>Entrar</TouchableOpacity>
        <TouchableOpacity style={styles.link}>Esqueceu a senha?</TouchableOpacity>
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
  caixa1: {
    marginBottom: '50%',
    alignItems: 'center',
  },
  caixa2: {
    alignItems: 'center',
  },
  tittle: {
    color: 'white',
    fontSize: 48,
    marginBottom: '25%',
    fontWeight: 'bold',
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
});
