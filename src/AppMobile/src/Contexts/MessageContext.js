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
    axios.post(apiUrl + '/api/messages/addmsg', data);
    setMessages(data);
  };

  const fetchMessage = async (userAuthenticated, item) => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/messages/getAllMessages/${userAuthenticated._id}/${item._id}`
      );

      const results = response.data.map((msg) => ({
        "id":  msg._id,
        "text":  msg.message.text  ,
        "createdAt": msg.createdAt,
        "user": {
          "id": msg.sender,
          "name" : userAuthenticated._id == msg.sender ? userAuthenticated.username : msg.username
        }
      }));

    
      setMessages(results);
    } catch (error) {
        console.error(error);
        Alert.alert("Ocorreu um erro ao carregar sua lista de contatos.", error.sta);
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
