import React, { useState } from 'react';
import axios from "axios";
import { Alert } from "react-native";
import base64 from "react-native-base64";
import { isEmpty } from "lodash";

const ChatContext = React.createContext();

const ChatProvider = ({ children }) => {
  const [chatsFromUser, setChats ] = useState([]);
  const apiUrl = "http://192.168.15.102:5000"; // Substitua pela URL correta da sua API




  function fetchChatLastDateTime(lastMessage) {
    const dateStr = lastMessage.createdAt;
    const date = new Date(dateStr);
  
    const now = new Date(); // Current date and time in the local timezone
  
    const today = new Date(
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        0,
        0,
        0,
        0
      )
    );
  
    const yesterday = new Date(
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate() - 1,
        0,
        0,
        0,
        0
      )
    );
  
    let formattedDate;
  
    if (date >= today) {
      // Date is today, display the time
      formattedDate = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
        timeZone: "UTC",
      });
    } else if (date >= yesterday) {
      // Date is yesterday, display "Yesterday"
      formattedDate = "Yesterday";
    } else {
      // Date is neither today nor yesterday, display the date as it is
      formattedDate = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }
  
    lastMessage.createdAt = formattedDate;
  }

  const setChatsFromUser = (data) => {
    setChats(data);
  };

  const fetchChat = async (userId) => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/auth/allusers/${userId}`
      );

      if (response.data) {
        response.data.map((chat) => {
        let binaryData = null;
          if (chat.lastMessage) {
            fetchChatLastDateTime(chat.lastMessage);
          }
          try {
            if (chat.isAvatarImageSet === false || isEmpty(chat.avatarImage))  throw new Error("No avatar");
            binaryData = base64.decode(chat.avatarImage);
          } catch {
            binaryData = `<svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 13.8194 3.53987 15.5127 4.46815 16.9285C5.16183 15.4545 6.58917 14.2414 8.49915 13.5699C7.57397 12.6625 7 11.3983 7 10C7 7.23858 9.23858 5 12 5C14.7614 5 17 7.23858 17 10C17 11.3983 16.426 12.6625 15.5009 13.5699C17.4108 14.2414 18.8382 15.4545 19.5319 16.9285C20.4601 15.5127 21 13.8194 21 12C21 7.02944 16.9706 3 12 3ZM12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13ZM12 15C8.14498 15 6.20924 17.0374 6.01609 18.7227C7.60642 20.1393 9.70269 21 12 21C14.2973 21 16.3936 20.1393 17.9839 18.7227C17.7908 17.0374 15.855 15 12 15ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z" fill="#000000"></path> </g></svg>`;
          }
          chat.avatarImage = binaryData;
        });
      }
        setChats(response.data);
    } catch (error) {
        console.error(JSON.stringify(error));
        Alert.alert("Ocorreu um erro ao carregar sua lista de contatos.");
        // Trate o erro, se necessário
      }
    }

  return (
    <ChatContext.Provider value={{ chatsFromUser, setChatsFromUser, fetchChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };
