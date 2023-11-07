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
            <Image source={require('../assets/Imagens/Ana-Castela.jpeg')} style={styles.imgPessoas}/>
        </View>
        <View style={styles.descPessoa}>
            <Text style={styles.textDesc}>Ana Castela, 19 anos</Text>
            <Text style={styles.textDescEnd}>Interesses: Tocar violão, compor músicas, pintar e desenhar</Text>
        </View>
        <View style={styles.botaos1}>
            <TouchableOpacity>
                <Image source={require('../assets/Imagens/botao-voltar.png')} style={styles.botoes}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/Imagens/coracao.png')} style={styles.botoes}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/Imagens/excluir-botao.png')} style={styles.botoes}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/Imagens/botao-proximo.png')} style={styles.botoes}/>
            </TouchableOpacity>
        </View>
        <View style={styles.containerLoc}>
          <View style={styles.locText}>
            <Image source={require('../assets/Imagens/localizacao.png')} style={styles.imgLoc}/>
            <Text style={styles.textLoc}>1,6 km de distância</Text>
          </View>
        </View>
        <View style={styles.containerNav}>
          <TouchableOpacity>
            <Image source={require('../assets/Imagens/home.png')} style={styles.imgNav}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/Imagens/chat.png')} style={styles.imgNav}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/Imagens/match.png')} style={styles.imgNav}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/Imagens/sobre.png')} style={styles.imgNav}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/Imagens/perfil.png')} style={styles.imgNav}/>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f3f5',
  },

  imgNav:{
    width:50,
    height:50,
  },

  containerNav:{
    marginTop:40,
    paddingBottom:8,
    paddingTop:8,
    backgroundColor:'#040e2c',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:15,
    paddingRight:15,
  },

  containerLoc:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginTop:6,
  },

  imgLoc:{
    height:40,
    width:40,
  },

  locText:{
    paddingBottom:6,
    paddingTop:6,
    paddingLeft:6,
    paddingRight:8,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#040e2c',
    borderColor:'#d0152e',
    borderWidth:6,
    borderRadius:30,
    width:250,
  },

  textLoc:{
    color:'white',
    fontSize:21,
    marginTop:3,
  },

  botaos1:{
    paddingTop:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:40,
    paddingRight:40,
  },

  botoes:{
    width: 70,
    height: 70,
  },

  textDesc:{
    paddingLeft:8,
    paddingTop:6,
    color:'white',
    fontSize:18,
    backgroundColor:'#640525',

  },

  textDescEnd:{
    paddingLeft:8,
    paddingBottom:6,
    color:'white',
    fontSize:18,
    backgroundColor:'#640525',
    borderBottomEndRadius:10,
    borderBottomStartRadius:10,
  },

  descPessoa:{
    width:'100%',
    justifyContent:'center',
    paddingLeft:20,
    paddingRight:20,
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
    height:400,
    paddingLeft:20,
    paddingRight:20,
    borderTopEndRadius:10,
    borderTopStartRadius:10,
    alignItems: 'center',
  },

  imgPessoas:{
    height:'100%',
    width:'100%',
    borderTopEndRadius:10,
    borderTopStartRadius:10,
  },

  placeholder: {
    color: 'white',
    fontSize: 24,
    textAlign: "center",
  },
});