import { Alert, BackHandler, View, Text, ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState, useContext, useEffect } from "react";
import Message from "./Message";
import InputBox from "./inputBox";

import bg from '../../assets/bg.png';
import messages from '../../assets/data/messages.json';




const ChatScreen =({ route  }) => {
  const { itemSelecionado } = route.params;
  const navigation = useNavigation();
  //const listaMensagens = useContext();
  // Alert.alert("Param: " + itemSelecionado);

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

      <FlatList data={messages} renderItem={({item}) => <Message message={item} />}
      style={styles.list}
      inverted
      />

      <InputBox />

    
      
      {/* <Text>{itemSelecionado.username}</Text> */}
      {/* <Text>{JSON.stringify(itemSelecionado)}</Text> */}
      {/* <Text>{itemSelecionado.lastMessage.message.text}</Text> */}
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