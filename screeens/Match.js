import React, { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Feather } from 'react-native-vector-icons';

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
          <Image source={currentData.image} style={styles.imgPessoas} />
          <LinearGradient colors={["transparent", "#000000"]} style={styles.descPessoa}>
            <Text style={styles.textDesc}>{`${currentData.nome}, ${currentData.idade} anos`}</Text>
            <Text style={styles.textDescEnd}>{`Interesses: ${currentData.interesses}`}</Text>
          </LinearGradient>
        </View>
        <View style={styles.botaos1}>
            <TouchableOpacity style={styles.buttonWithShadow} onPress={handlePrev}>
                <Feather name="arrow-left" color="#EF3243" size={45}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonWithShadow} onPress={handlePrev}>
              <Feather name="heart" color="#910909" size={45}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonWithShadow}>
              <Feather name="star" color="#2321B7" size={45}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonWithShadow} onPress={handlePrev}>
              <Feather name="x" color="#910909" size={45}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonWithShadow} onPress={handleNext}>
              <Feather name="arrow-right" color="#EF3243" size={45}/>
            </TouchableOpacity>
        </View>
        <View style={styles.containerLoc}>
          <View style={styles.locText}>
            <Feather name="map-pin" color="#520000" size={23}/>
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
    backgroundColor: 'white',
  },

  buttonWithShadow: {
    backgroundColor: 'white', 
    padding:5,
    borderRadius: 55,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },

  imgVip: {
    marginTop:20,
    width:90,
    height:30,
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
    marginTop:10,
    paddingBottom:6,
    paddingTop:6,
    paddingLeft:30,
    paddingRight:30,
    flexDirection:'row',
    justifyContent:'space-between',
    borderColor:'#520000',
    borderWidth:2,
    borderRadius:30,
    width:250,
  },

  textLoc:{
    color:'#520000',
    fontSize:19,
    marginBottom:3,
  },

  botaos1:{
    paddingTop:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:50,
    paddingRight:50,
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
    fontSize:22,
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginHorizontal:30,
  },

  imgLogo: {
    height: 70,
    width: 70,
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
    width: '100%',
    height: 510,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius:10,
    alignItems: 'center',
    position: 'relative',
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