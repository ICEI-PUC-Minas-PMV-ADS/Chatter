import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useState, useContext, useEffect } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { AuthContext } from "../../Contexts/AuthContext";
dayjs.extend(relativeTime);



const Message = ({ message }) => {
  const { userAuthenticated } = useContext(AuthContext);
  const isMyMessage = () => {
    return message.user.id === userAuthenticated._id;


  };


  return (
    <View style={[styles.container, 
      
      {

        backgroundColor: isMyMessage() ? '#c5caf8' : 'white',
        alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',

    },
    
    ]} >
      <Text>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',

    shadowColor: '000',
    shadowOffset : {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,

  },
  time: {
    color: 'gray',
    alignSelf: 'flex-end',
  },


});

export default Message;