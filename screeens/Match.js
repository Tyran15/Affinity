import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Match() {
  const navigation = useNavigation();
  const perfil = () => {
    navigation.navigate('Perfil')
  }
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      nome: 'Ana Castela',
      idade: 19,
      interesses: 'Tocar violão, compor músicas, pintar e desenhar',
      image: require('../assets/Imagens/Ana-Castela.jpeg'),
      distancia:'1,6',
    },
    {
      nome: 'Clodoaldo',
      idade: 16,
      interesses: 'Ser a criatura de poder maximo na etec',
      image: require('../assets/Imagens/Clodoaldo.jpeg'),
      distancia:'0',
    },
    {
      nome: 'Seu Madruga',
      idade: 30,
      interesses: 'Não pagar aluguel por 14 meses.',
      image: require('../assets/Imagens/madruga.jpg'),
      distancia:'10',
    },
    {
      nome: 'Elon Musk',
      idade: 54,
      interesses: 'Colonizar a terra oca',
      image: require('../assets/Imagens/elon-musk.jpg'),
      distancia:'4,8',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const currentData = data[currentIndex];
  return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={require('../assets/Imagens/Logo.png')} style={styles.imgLogo}/>
          <Image source={require('../assets/Imagens/vip.png')} style={styles.imgVip}/>
        </View>
        <View style={styles.pessoas}>
            <Image source={currentData.image} style={styles.imgPessoas}/>
        </View>
        <View style={styles.descPessoa}>
            <Text style={styles.textDesc}>{`${currentData.nome}, ${currentData.idade} anos`}</Text>
            <Text style={styles.textDescEnd}>{`Interesses: ${currentData.interesses}`}</Text>
        </View>
        <View style={styles.botaos1}>
            <TouchableOpacity onPress={handlePrev}>
                <Image source={require('../assets/Imagens/botao-voltar.png')} style={styles.botoes}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/Imagens/coracao.png')} style={styles.botoes}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/Imagens/excluir-botao.png')} style={styles.botoes}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNext}>
                <Image source={require('../assets/Imagens/botao-proximo.png')} style={styles.botoes}/>
            </TouchableOpacity>
        </View>
        <View style={styles.containerLoc}>
          <View style={styles.locText}>
            <Image source={require('../assets/Imagens/localizacao.png')} style={styles.imgLoc}/>
            <Text style={styles.textLoc}>{`${currentData.distancia} km de distância`}</Text>
          </View>
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

  imgVip: {
    marginTop:20,
    width:110,
    height:40,
  },

  imgNav:{
    width:40,
    height:40,
  },

  containerNav:{
    marginTop:70,
    paddingBottom:12,
    paddingTop:8,
    backgroundColor:'#E8E8E8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:15,
    paddingRight:15,
  },

  containerLoc:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginTop:9,
  },

  imgLoc:{
    height:23,
    width:23,
  },

  locText:{
    paddingBottom:6,
    paddingTop:6,
    paddingLeft:20,
    paddingRight:20,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#f9f3f5',
    borderColor:'#640525',
    borderWidth:4,
    borderRadius:30,
    width:250,
  },

  textLoc:{
    color:'#640525',
    fontSize:19,
    marginBottom:3,
  },

  botaos1:{
    paddingTop:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:70,
    paddingRight:70,
  },

  botoes:{
    width: 55,
    height: 55,
  },

  textDesc:{
    paddingLeft:8,
    paddingRight:20,
    paddingTop:6,
    color:'white',
    fontSize:15,
    fontWeight:'bold',
  },

  textDescEnd:{
    paddingLeft:8,
    paddingBottom:6,
    color:'white',
    fontSize:15,
    fontWeight:'bold',
  },

  descPessoa:{
    justifyContent:'center',
    backgroundColor:'#640525',
    paddingRight:20,
    marginHorizontal: 30,
    borderBottomEndRadius:10,
    borderBottomStartRadius:10,
  },

  imgLogo: {
    height: 90,
    width: 90,
  },

  logo: {
    marginTop:20,
    margin:10,
    width:'auto',
    height:'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  pessoas:{
    width:'100%',
    height:430,
    paddingLeft:30,
    paddingRight:30,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    alignItems: 'center',
  },

  imgPessoas:{
    height:'100%',
    width:'100%',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },

  placeholder: {
    color: 'white',
    fontSize: 24,
    textAlign: "center",
  },
});