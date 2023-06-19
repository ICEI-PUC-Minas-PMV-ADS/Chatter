import { Alert, View, Text, ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView } from "react-native";
import Message from "./Message";
import InputBox from "./inputBox";
import { BackHandler } from 'react-native';
import { useState, useContext, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';


import bg from '../../assets/bg.png';
import messages from '../../assets/data/messages.json';
import { MessageContext } from "../Contexts/MessageContext";



const ChatScreen =({ route  }) => {
  const navigation = useNavigation();
  const { messagesFromUser } = useContext(MessageContext);
  const { itemSelecionado } = route.params;
  //Alert.alert("Param: " + itemSelecionado);

  useEffect(() => {
    //voltar para a tela de login ao invés de loading (daí apertar voltar dnv)
    const onBackPress = () => {
      navigation.navigate('Home');//navegando pra login
      return true;
    };
    //Adicionando um listener pro botâo de back quando o componente for montado
    const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => {
      //Removendo o listener quando o componente for demontado
      backHandler.remove();
    };
  }, []);


  return (
    <>  
    
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.bg} >


      <ImageBackground source={bg} style={styles.bg} >

        <FlatList data={messages} renderItem={({item}) => <Message message={item} />}
        style={styles.list}
        inverted
        />

        <InputBox />

      
        
        {/* <Text>{itemSelecionado.username}</Text>
        <Text>{itemSelecionado.lastMessage.message.text}</Text> */}
      </ImageBackground>
      </KeyboardAvoidingView>
    </>
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

const navbar = StyleSheet.create({
  container: {
    marginTop: 29,
    backgroundColor: "#fff",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#7c58e6",
    flex: 1,
    marginRight: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#7c58e6",
  },
  iconsWrapper: {
    flexDirection: "row",
  },
  search: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  menu: {
    width: 20,
    height: 30,
  },
});

export default ChatScreen;