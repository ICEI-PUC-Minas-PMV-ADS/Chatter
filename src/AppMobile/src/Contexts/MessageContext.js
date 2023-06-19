import React, { useState } from 'react';
import axios from "axios";
import { Alert } from "react-native";
import base64 from "react-native-base64";
import { isEmpty } from "lodash";

const MessageContext = React.createContext();



const MessageProvider = ({ children }) => {
  


  const [messagesFromUser, setMessages ] = useState([]);
  const apiUrl = "http://192.168.0.6:5000"; // Substitua pela URL correta da sua API

  const setMessagesFromUser = (data) => {
    setMessages(data);
  };

  const fetchMessage = async (userId) => {
    
    const body = {
      "userId": userId
    };


    try {
      const response = await axios.get(`${apiUrl}/api/auth/allusers/${userId}`);
      console.log("response");
      if (response.data) {
        // Usuário autenticado com sucesso
         Alert.alert("Sucesso", "Consulta realizada. Registros: " + response.data);
      } else {
        // Usuário inválido ou senha incorreta
        Alert.alert("Erro", "Usuário ou senha incorretos");
      }
      setMessages(response.data);
    } catch (error) {
        console.error(JSON.stringify(error));
        Alert.alert("Ocorreu um erro ao carregar sua lista de mensagens.");
        // Trate o erro, se necessário
      }
    }

  return (
    <MessageContext.Provider value={{ messagesFromUser, setMessagesFromUser, fetchMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export { MessageContext, MessageProvider };
