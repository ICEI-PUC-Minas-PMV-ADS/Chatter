import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput } from 'react-native-gesture-handler';
import { useState, useContext } from 'react';
import { AuthContext } from "../../Contexts/AuthContext";
import { MessageContext } from "../../Contexts/MessageContext";
import { useNavigation } from '@react-navigation/native';



const InputBox = ( userTo ) => {
    const { userAuthenticated } = useContext(AuthContext);
    const { fetchMessage, setMessagesFromUser } = useContext(MessageContext);
    const navigation = useNavigation();

    const [newMessage, setNewMessage] = useState('');

    const onSend = () => {
        enviar(newMessage);
        getMessages(userTo.userTo);
        navigateBack(userTo.userTo);
            
            
    };

    function navigateBack(usr){
        setNewMessage("");
        navigation.navigate('ChatScreen', {"itemSelecionado":usr})//navegando pra ChatScreen
    }

    async function enviar(newMessage) {
        await setMessagesFromUser({"from": userAuthenticated._id, "to":  userTo.userTo._id, "message": newMessage});
        
      }

    async function getMessages(item) {
        await fetchMessage(userAuthenticated, item);
        
      }


  return (
    <View style={styles.container} >
        {/* Icon */}
        <AntDesign name='plus' size={20} color='royalblue' />

        {/* Texto Input 1;53;43*/}
        <TextInput value={newMessage} 
        onChangeText={setNewMessage} 
        style={styles.input} placeholder='Escreva sua mensagem...' />

        {/* Icon */}
        <MaterialIcons onPress={onSend} style={styles.send} name='send' size={16} color="white" />





      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        padding: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,

        borderBottomEndRadius: 50,
        borderColor: 'lightgray',
        borderWidth: StyleSheet.hairlineWidth,
    },
    send: {
        backgroundColor: '#985BCF',
        padding: 7,
        borderRadius: 15,
        overflow: 'hidden'

        
    },
});



export default InputBox;