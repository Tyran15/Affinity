import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeUser() {
  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.logo}>
          <Image source={require('../assets/Imagens/Logo.png')} style={styles.imgLogo}/>
          <Image source={require('../assets/Imagens/vip.png')} style={styles.imgVip}/>
        </View>
      <View style={styles.conteinerDeshboard}>
        <View style={styles.deshboardAffinity}>
          <Text style={styles.title}>Affinity</Text>
          <Text style={styles.txtHome}>Bem Vindo a Affinity, esperamos que você possa encontrar o que pusca, caso queira entre em contato com nosco! Faça bom proveito.</Text>
        </View>
        <View style={styles.deshboardObj}>
          <Text style={styles.title}>Objtivos</Text>
          <Text style={styles.txtHome}>Nosso objetivo é ajudar a você a encontrar a pessoas mais compativel, no intuito de propor um Par Perfeito</Text>

        </View>
      </View>
      <View style={styles.conteinerDeshboard}>
        <View style={styles.deshboardProposito}>
          <Text style={styles.title}>Proposito</Text>
          <Text style={styles.txtHome}>Um trabalho de "Programação Aplicativos Mobile", para conclusão do segundo modulo </Text>

        </View>
        <View style={styles.deshboardDevs}>
          <Text style={styles.title}>Desenvolvedores</Text>
          <Text style={styles.txtHome}>Foi realizado por cinco programadoes dentre eles: Carlos Eduardo, Felipe Felix, Heitor de Oliveira, Matheus Campos e Matheus Henrique</Text>

        </View>
      </View>
      <View style={styles.planos}>
        <View style={styles.planosTitulo}>
          <Text style={styles.tituloPlanos}>Conheça Nosso Planos</Text>
        </View>
        <View style={styles.tipoPlanosGratis}>
          <Text style={styles.tituloPlanoGratis}>Gratuito</Text>
          <Text style={styles.descPlano}>Plano basico, contem acesso a Match limitado a 20 pessoas mensais e chat, contem anuncios</Text>
          <Text style={styles.valorPlano}>Gratuito</Text>
        </View>
        <View style={styles.tipoPlanosPlus}>
          <Text style={styles.tituloPlanoPlus}>Plus</Text>
          <Text style={styles.descPlanoWhite}>Plano médio, contem acesso a Match limitado a 70 pessoas e chat, sem anuncios e sujetoes de locais para encontros</Text>
          <Text style={styles.valorPlanoPlus}>R$19,99/mensal</Text>
        </View>
        <View style={styles.tipoPlanosGood}>
          <Text style={styles.tituloPlanoGood}>Good</Text>
          <Text style={styles.descPlanoWhite}>Planob completo, com tem acesso ilimitados a Match e chat, sem anuncios e sujestoes de locais para encontro e melhorias de fitro</Text>
          <Text style={styles.valorPlanoGood}>R$25,99/mensal</Text>
        </View>
      </View>
    </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 20,
  },
  conteinerDeshboard:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  }, 
  deshboardAffinity:{
    width: 155,
    height: 280,
    backgroundColor:'#e47a94',
    marginLeft: 15,
    padding: 15,
    borderRadius: 10,
  }, 
  deshboardObj:{
    width: 155,
    height: 280,
    marginLeft: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#d56779',
  }, 
  deshboardProposito:{
    width: 155,
    height: 280,
    marginLeft: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#e4344e',
  },
  deshboardDevs:{
    width: 155,
    height: 280,
    marginLeft: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#920521',
  },
  txtHome:{
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },


  imgLogo: {
    height: 70,
    width: 70,
    marginRight:150,
  },
  imgVip: {
    marginTop:20,
    width:90,
    height:30,
  },
  logo: {
    marginTop:20,
    margin:10,
    width:'auto',
    height:'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  planos:{
    marginTop: 25,
  },
  planosTitulo:{
    height: 50,
  },
  tituloPlanos:{
    fontSize: 22,
    color: '#c9902c',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  tipoPlanosGratis:{
    width:325,
    height: 'auto',
    padding: 20,
    backgroundColor: '#bfc7c9',
    marginBottom: 15,
    borderRadius: 15,
  },
  tipoPlanosPlus:{
    width:325,
    height: 'auto',
    padding: 20,
    backgroundColor: '#ba902d',
    marginBottom: 15,
    borderRadius: 15,
  },
  tipoPlanosGood:{
    width:325,
    height: 'auto',
    padding: 20,
    backgroundColor: 'black',
    marginBottom: 15,
    borderRadius: 15,
  },
  tituloPlanoGratis:{
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  tituloPlanoPlus:{
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  tituloPlanoGood:{
    fontSize: 18,
    color: '#ba902d',
    fontWeight: 'bold',
  },
  descPlano:{
    fontSize: 17,
    textAlign: 'justify',
    },
    
  descPlanoWhite:{
    fontSize: 17,
    color: 'white',
    textAlign: 'justify',
    },
    valorPlano:{
      textAlign: 'right',
      marginRight: 5,
      color: 'black',
      marginTop:3,
      fontSize:18,
    fontWeight: 'bold',

    },
    valorPlanoPlus:{
      textAlign: 'right',
      marginRight: 5,
      color: 'white',
      marginTop:3,
      fontSize:18,
    fontWeight: 'bold',

    },
    valorPlanoGood:{
      textAlign: 'right',
      marginRight: 5,
      color: '#ba902d',
      marginTop:3,
      fontSize:18,
    fontWeight: 'bold',

    }
});
