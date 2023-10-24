import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Match() {
  return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={require('../assets/Imagens/Logo.png')} style={styles.imgLogo}/>
        </View>
        <View style={styles.pessoas}>
            <Image source={require('../assets/Imagens/Ana Castela.png')} style={styles.imgPessoas}/>
        </View>
        <View style={styles.descPessoa}>
            <Text style={styles.textDesc}>Ana Castela, 19 anos</Text>
        </View>
        <View style={styles.botaos1}>
            <TouchableOpacity>
                <Image source={require('../assets/Imagens/botao-voltar.png')} style={styles.botoes}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/Imagens/localizacao.png')} style={styles.botoes}/>
            </TouchableOpacity>
        </View>
        <View style={styles.botaos2}>
            <TouchableOpacity>
                <Image source={require('../assets/Imagens/coracao.png')} style={styles.botoes}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/Imagens/excluir-botao.png')} style={styles.botoes}/>
            </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  botaos1:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:60,
    paddingRight:60,
  },

  botaos2:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:110,
    paddingRight:110,
  },

  botoes:{
    width: 70,
    height: 70,
  },

  textDesc:{
    color:'black',
    fontWeight:'bold',
    fontSize:20,
  },

  descPessoa:{
    width:'100%',
    height:'5%',
    justifyContent:'center',
    opacity:0.5,
    paddingLeft:40,
    paddingRight:30,
  },

  imgLogo: {
    height: 90,
    width: 90,
  },

  logo: {
    margin:10,
    width:'auto',
    height:'auto',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  pessoas:{
    width:'100%',
    height:'50%',
    paddingLeft:30,
    paddingRight:30,
    borderRadius:10,
  },

  imgPessoas:{
    height:'100%',
    width:'100%',
    borderRadius:10,
  },
  placeholder: {
    color: 'white',
    fontSize: 24,
    textAlign: "center",
  },
});