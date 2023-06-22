import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { Alert } from "react-native";

import io from "socket.io-client";
const socketEndpoint = "http://192.168.15.102:5000";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userAuthenticated, setUser] = useState({});
  const apiUrl = "http://192.168.15.102:5000"; // Substitua pela URL correta da sua API

  const [hasConnection, setConnection] = useState(false);
  const [time, setTime] = useState(null);
  const socket = useRef(null)

  useEffect(() => {
    socket.current = io(socketEndpoint);

    socket.current.io.on("open", () => {
      socket.current.emit("add-user", userAuthenticated._id);
      setConnection(true)
    });
    socket.current.io.on("close", () => setConnection(false));

    socket.current.on("msg-recieve", (msg) => {
      // On message received do somenthing
      Alert.alert('Você recebeu uma nova mensagem')
    });

    return () => {
      socket.current.disconnect();
      socket.current.removeAllListeners();
    };
  }, [userAuthenticated]);

  const sendMessage = (message, currentChat) => {
    socket.current.emit("send-msg", {
      to: "647a9482824032d97116528f",
      from: userAuthenticated._id,
      msg: message,
    });
  }


  const setAuthenticatedUser = (user) => {
    setUser(user);
  };

  const handleLogin = async (user, password) => {
    const body = {
      username: user,
      password: password,
    };
    if (user.trim() === "" && password.trim() === "") {
      return Alert.alert("Atenção", "Preencha todos os campos");
    } else if (user.trim() === "") {
      return Alert.alert("Atenção", "Usuario é obrigatorio.");
    } else if (password === "") {
      return Alert.alert("Atenção", "Senha é obrigatorio.");
    }
    try {
      const responseLogin = await axios.post(`${apiUrl}/api/auth/login`, body);
      // Faça algo com a resposta recebida
      if (responseLogin.data && responseLogin.data.status === true) {
        // Usuário autenticado com sucesso
        setAuthenticatedUser(responseLogin.data.user);
      } else {
        // Usuário inválido ou senha incorreta
        Alert.alert("Erro", "Usuário ou senha incorretos");
      }
    } catch (error) {
      console.error(JSON.stringify(error));
      // Trate o erro, se necessário
    }
  };

  const handleSetAvatar = async (image) => {
    try {
      const result = await axios.post(
        `${apiUrl}/api/auth/setavatar/${userAuthenticated._id}`,
        {
          image: image,
        }
      );
      if (result?.data?.isSet) return true;
      else throw new Error("Imagem não definida.");
    } catch (error) {
      console.error(JSON.stringify(error));
      Alert.alert("Ocorreu um erro ao definir seu avatar.");
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userAuthenticated,
        setAuthenticatedUser,
        handleLogin,
        handleSetAvatar,
        socket,
        sendMessage
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthContext, AuthProvider };
