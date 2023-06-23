import { Alert, BackHandler, View, Text, ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState, useContext, useEffect } from "react";
import Message from "./Message";
import InputBox from "./inputBox";

import bg from '../../assets/bg.png';
import messages from '../../assets/data/messages.json';


import { ChatContext } from "../Contexts/ChatContext";
import { MessageContext } from "../Contexts/MessageContext";



const ChatScreen =({ route  }) => {
  const { itemSelecionado } = route.params;
  const { chatsFromUser } = useContext(ChatContext);
  const { messagesFromUser } = useContext(MessageContext);
  const navigation = useNavigation();
  //const listaMensagens = useContext();
  // Alert.alert("Param: " + itemSelecionado);
  // Alert.alert("Chats: " + chatsFromUser.length);
  // Alert.alert("Messages: " + messagesFromUser.length);

  useEffect(() => {
    const onBackPress = () => {
      navigation.navigate('Home');
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => {
      backHandler.remove();
    };
  }, []);


  return (
    
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.bg}
  >


    <ImageBackground source={bg} style={styles.bg} >

    {messagesFromUser  && 
      <FlatList data={messagesFromUser} renderItem={({item}) => <Message message={item} />}
      style={styles.list}
      inverted
      />
    }

      <InputBox userTo={itemSelecionado} />

    
      
      {/* <Text>{itemSelecionado.username}</Text>
      <Text>{itemSelecionado.lastMessage.message.text}</Text> */}
    </ImageBackground>
    </KeyboardAvoidingView>
  );
};






const styles = StyleSheet.create ({
    bg: {
        flex: 1,
    },
    list: {
      padding: 10,
    },
});

export default ChatScreen;