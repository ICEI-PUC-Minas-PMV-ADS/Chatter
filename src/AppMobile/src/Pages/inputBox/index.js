import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';



const InputBox = () => {
    const [newMessage, setNewMessage] = useState('');

    const onSend = () => {
        console.warn('Enviando uma nova mensagem', newMessage);

        setNewMessage('');


    };




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