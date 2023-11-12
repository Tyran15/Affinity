import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  const entrar = () => {
    navigation.navigate('TabRoutes')
  }
  return (
  <LinearGradient colors={['#400E57', '#004DBF']} style={styles.container}>      
    <View style={styles.caixa1}>
        <Text style={styles.tittle}>Login</Text>
        <TextInput style={styles.input} placeholderTextColor='white' placeholder='E-mail' />
        <TextInput style={styles.input} placeholderTextColor='white' placeholder='Senha' />
      </View>

      <View style={styles.caixa2}>
        <TouchableOpacity style={styles.button} onPress={entrar}><Text style={styles.placeholder}>Entrar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.link}><Text style={styles.placeholder}>Esqueceu a senha?</Text></TouchableOpacity>
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
  placeholder: {
    color: 'white',
    fontSize: 24,
    textAlign: "center",
  },
});
