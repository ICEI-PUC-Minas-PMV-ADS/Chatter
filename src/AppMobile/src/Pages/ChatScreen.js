import { Alert, View, Text, ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView } from "react-native";
import Message from "./Message";
import InputBox from "./inputBox";

import bg from '../../assets/bg.png';
import messages from '../../assets/data/messages.json';




const ChatScreen =({ route  }) => {
  const { itemSelecionado } = route.params;
  Alert.alert("Param: " + itemSelecionado);


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

    
      
      {/* <Text>{itemSelecionado.username}</Text>
      <Text>{itemSelecionado.lastMessage.message.text}</Text> */}
    </ImageBackground>
    </KeyboardAvoidingView>
  );
};


const onBackPress = () => {
  navigation.navigate("Home");
  return true;
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