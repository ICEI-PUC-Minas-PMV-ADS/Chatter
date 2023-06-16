import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-native";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userAuthenticated, setUser] = useState({});
  const apiUrl = "http://192.168.0.29:5000"; // Substitua pela URL correta da sua API

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
