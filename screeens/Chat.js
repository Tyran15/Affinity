<<<<<<< HEAD
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
=======
import React from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Chat = () => {
  const [messages, setMessages] = React.useState([]);
  const [newMessage, setNewMessage] = React.useState('');
>>>>>>> 57ab70a5a7b974f2aa7f469cf1240ff224d13ec1

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

<<<<<<< HEAD
    const message = { text: newMessage, user: 'user1' };
    setMessages([...messages, message]);
=======
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: messages.length + 1, text: newMessage, user: 'user' },
    ]);
>>>>>>> 57ab70a5a7b974f2aa7f469cf1240ff224d13ec1
    setNewMessage('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
<<<<<<< HEAD
        keyExtractor={(item, index) => index.toString()}
=======
        keyExtractor={(item) => item.id.toString()}
>>>>>>> 57ab70a5a7b974f2aa7f469cf1240ff224d13ec1
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text>{`${item.user}: ${item.text}`}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
<<<<<<< HEAD

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
=======
>>>>>>> 57ab70a5a7b974f2aa7f469cf1240ff224d13ec1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  messageContainer: {
    marginBottom: 10,
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