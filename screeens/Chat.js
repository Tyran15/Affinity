import React, { useRef, useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Feather } from 'react-native-vector-icons'; // Importe o ícone correto

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [textWidth, setTextWidth] = useState(200); // Valor inicial ajustado

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
      </View>
      <FlatList
        style={styles.conteinerFlatList}
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            onLayout={(event) => {
              const { width } = event.nativeEvent.layout;
              setTextWidth(Math.max(width, textWidth));
            }}
            style={[styles.messageContainer, { width: textWidth }]}
          >
            <Text style={styles.novaMessage}>{`${item.text}`}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mandar mensagem"
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
  containerTitulo: {
    marginTop: 20,
    margin: 10,
    width: 'auto',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tituloChat: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  imgLogo: {
    height: 90,
    width: 90,
  },

  conteinerFlatList: {
    paddingLeft: 30,
  },
  messageContainer: {
    color: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 0,
    backgroundColor: '#640525',
    borderColor: '#640525',
    paddingVertical: 10, // Ajustei o padding vertical
    paddingHorizontal: 10, // Ajustei o padding horizontal
    borderWidth: 2,
    marginBottom: 10,
    marginTop: 10,
  },
  novaMessage: {
    textAlign: 'left',
    color: 'white',
    fontSize: 17,
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
});

export default Chat;
