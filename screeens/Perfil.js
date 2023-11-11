import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from 'react-native-gesture-handler';

export default function Perfil() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.conFtPerfil}>
            <Image source={require('../assets/Imagens/neymar.jpg')} style={styles.ftPerfil}></Image>
        </View>
        <Text style={styles.nome}>Neymar</Text>
        <View style={styles.plano}>
            <Text style={styles.textPlano}>Seu plano atual: Gratuito</Text>
        </View>
        <View style={styles.descricao}>
            <Text style={styles.Desc}>Descrição</Text>
        </View>
        <View style={styles.itensDesc}>
            <Text style={styles.textDesc}>32 anos</Text>
            <Text style={styles.textDesc}>Jogador de Futebol ⚽</Text>
            <Text style={styles.textDesc}>Gay 🏳️‍🌈</Text>
            <Text style={styles.textDesc}>Fui mlk</Text>
            <Text style={styles.textDesc}>Gosto de praticar esportes e de ler</Text>
        </View>
        <View style={styles.titulo}>
            <Text style={styles.textFotos}>Fotos</Text>
        </View>
        <View style={styles.containerFotos}>
            <View style={styles.contFotos}>
                <Image source={require('../assets/Imagens/neymar2.jpg')} style={styles.imgFotos}></Image>
            </View>
            <View style={styles.contFotos}>
                <Image source={require('../assets/Imagens/neymar3.jpg')} style={styles.imgFotos}></Image>
            </View>
        </View>
        <View style={styles.containerFotos}>
            <View style={styles.contFotos}>
                <Image source={require('../assets/Imagens/neymar4.jpg')} style={styles.imgFotos}></Image>
            </View>
            <View style={styles.contFotos}>
                <Image source={require('../assets/Imagens/neymar5.jpg')} style={styles.imgFotos}></Image>
            </View>
        </View>        
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f3f5',
    display:'flex',
    alignItems:'center',
    paddingLeft:20,
    paddingRight:20,
  },

  containerFotos:{
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:5,
    paddingRight:5,
    marginBottom:15,
  },

  imgFotos:{
    width:'100%',
    height:'100%',
    borderRadius:10,
  },

  contFotos:{
    width:170,
    height:240,
    borderRadius:10,
  },

  titulo:{
    width:'100%',
    padding:10,
    marginTop:5,
  },

  textFotos:{
    fontWeight:'bold',
    fontSize:23,
    marginTop:10,
  },

  textDesc:{
    fontSize:15,
    marginBottom:2,
  },

  itensDesc:{
    width:'100%',
    paddingLeft:15,
    backgroundColor:'#E8E8E8',
    paddingBottom:15,
    paddingTop:15,
    borderRadius:10,
  },

  descricao:{
    width:'100%',
    marginTop:5,
    padding:10,
  },

  Desc:{
    fontWeight:'bold',
    fontSize:23,
    marginTop:10,
  },

  textPlano:{
    fontSize:18,
    fontWeight:'bold',
  },

  plano:{
    paddingLeft:15,
    marginTop:35,
    backgroundColor:'#E8E8E8',
    width:'100%',
    paddingBottom:15,
    paddingTop:15,
    borderRadius:10,
  },

  nome:{
    fontWeight:'bold',
    fontSize:30,
  },

  conFtPerfil:{
    height:150,
    width:150,
    marginTop:65,
    borderRadius:100,
  },

  ftPerfil:{
    width:'100%',
    height:'100%',
    borderRadius:100,
  },
});