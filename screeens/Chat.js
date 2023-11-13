import React from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from 'react-native-vector-icons'; // Importe o ícone correto

const Chat = () => {
  const [messages, setMessages] = React.useState([]);
  const [newMessage, setNewMessage] = React.useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { id: messages.length + 1, text: newMessage, user: 'user' },
    ]);
    setNewMessage('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitulo}>
        <Image source={require('../assets/Imagens/Logo.png')} style={styles.imgLogo}/>
        <Text style={styles.tituloChat}>Chat</Text>
      </View>
      <FlatList
        style={styles.conteinerFlatList}
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.novaMessage}>{`${item.text}`}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mandar menasagem"
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
          <Feather name="arrow-right" color={'#FFF'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  conteinerTitulo:{
    marginTop:20,
    margin:10,
    width:'auto',
    height:'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tituloChat:{
    textAlign: 'center',
    text: 'bold',
    fontSize: 20,
  },
  imgVip: {
    marginTop:20,
    width:110,
    height:40,
  },
  imgLogo: {
    height: 90,
    width: 90,
  },



  conteinerFlatList:{
    paddingLeft:30,
  },
  messageContainer: {
    color: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
    backgroundColor: '#640525',
    borderColor:'#640525',
    padding: 5,
    borderWidth: 2,
    marginBottom: 10,
    width: 'auto',
  },
  novaMessage:{
    textAlign: 'right',
    color: 'white',
    fontSize: 17,
    width: 'auto',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
    padding: 8,
  },
  sendButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Chat;