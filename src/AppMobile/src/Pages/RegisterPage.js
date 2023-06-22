import React, { useState, useEffect } from "react";
import { Asset } from "expo-asset";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";

const { width, height } = Dimensions.get("screen");

const apiUrl = "http://192.168.15.102:5000"; // Substitua pela URL correta da sua API


const RegisterPage = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(() => {
    const checkLoggedIn = async () => {
      const localhostKey = "env.REACT_APP_LOCALHOST_KEY"; 
  
      try {
        const isLoggedIn = await AsyncStorage.getItem(localhostKey);
  
        if (isLoggedIn) {
          navigate("/");
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };
  
    checkLoggedIn();
  }, []);

  const handleValidation = () => {
    const errorMessages = [];

    if (password !== confirmPassword) {
      errorMessages.push("A senha e a senha de confirmação devem ser iguais.");
    }
    if (username.length < 3) {
      errorMessages.push("O nome de usuário deve ter mais de 3 caracteres.");
    }
    if (password.length < 8) {
      errorMessages.push("A senha deve ter pelo menos 8 caracteres.");
    }
    if (email === "") {
      errorMessages.push("Email é obrigatório.");
    }

    setValidationErrors(errorMessages);
    return errorMessages.length === 0;
  };

  const handleRegister = async () => {
    if (handleValidation()) {
      try {
        const response = await axios.post(apiUrl + '/api/auth/login', {
          username,
          email,
          password,
        });

        const data = response.data;

        if (data.status === false) {
          // Display error message
          console.error(data.msg);
        }
        if (data.status === true) {
          // Store data locally using AsyncStorage or another storage solution
          await AsyncStorage.setItem("@MyApp:user", JSON.stringify(data.user));

          // Navigate to the desired screen or perform any other action
          navigation.navigate("SetAvatar");
        }
      } catch (error) {
        // Handle error
        console.error(error);
      }
    }
  };


  const handleSignIn = () => {
    navigation.navigate('LoginPage')
  };

  const colors = ["#00BCD4", "#7870D0", "#8468D0", "#985BCF"];

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, marginTop: 10 }}
      keyboardShouldPersistTaps="handled"
    >
    <View
      style={{
        flex: 1,
        backgroundColor: "#F5F5F5",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ width: "100%" }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 30,
          }}
        >
          <Image
            style={{
              width: width / 2,
              height: 200,
            }}
            source={require("../../assets/chatter.png")}
          />
        </View>

        <View>
        <Text style={{ paddingBottom: 30, textAlign: "center", color: "#37266B", fontSize: 18, fontWeight: "bold"}}>Crie sua conta Chatter!</Text>
        </View>

        <KeyboardAvoidingView style={{ width: "100%" }}>
          <View
            style={{
              paddingHorizontal: 70,
            }}
          >
            <View>
              <LinearGradient
                style={{
                  padding: 1,
                }}
                colors={colors}
              >
                <TextInput
                  style={{
                    padding: 10,
                    borderRadius: 4,
                    borderWidth: 1,
                    backgroundColor: "#F5F5F5",
                    width: "100%",
                  }}
                  placeholder="Usuário"
                  value={username}
                  onChangeText={setUsername}
                />
                {validationErrors.includes("O nome de usuário deve ter mais de 3 caracteres.") && (
        <Text style={{ padding: 10 ,  color: "#000", backgroundColor: "#FF976B" }}>O nome de usuário deve ter mais de 3 caracteres.</Text>
      )}
              </LinearGradient>
            </View>
            <View style={{ height: 30 }} />
            <View>
              <LinearGradient
                style={{
                  padding: 1,
                }}
                colors={colors}
              >
                <TextInput
                  style={{
                    padding: 10,
                    borderRadius: 4,
                    borderWidth: 1,
                    backgroundColor: "#FFF",
                    width: "100%",
                  }}
                  placeholder="seu@email.com"
                  value={email}
                  onChangeText={setEmail}
                />{validationErrors.includes("Email é obrigatório.") && (
                  <Text style={{ padding: 10 ,  color: "#000", backgroundColor: "#FF976B"}}>Email é obrigatório.</Text>
                )}
              </LinearGradient>
            </View>
            <View style={{ height: 30 }} />
            <View>
              <LinearGradient
                style={{
                  padding: 1,
                }}
                colors={colors}
              >
                <TextInput
                  style={{
                    padding: 10,
                    borderRadius: 4,
                    borderWidth: 1,
                    backgroundColor: "#F5F5F5",
                    width: "100%",
                  }}
                  placeholder="Senha"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
              </LinearGradient>
            </View>
            <View style={{ height: 30 }} />
            <View>
              <LinearGradient
                style={{
                  padding: 1,
                }}
                colors={colors}
              >
                <TextInput
                  style={{
                    padding: 10,
                    borderRadius: 4,
                    borderWidth: 1,
                    backgroundColor: "#F5F5F5",
                    width: "100%",
                  }}
                  placeholder="Confirme sua Senha"
                  secureTextEntry
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />{validationErrors.includes("A senha deve ter pelo menos 8 caracteres.") && (
                  <Text style={{ padding: 10 ,  color: "#000", backgroundColor: "#FF976B" }}>A senha deve ter pelo menos 8 caracteres.</Text>
                )}
          
                {validationErrors.includes("A senha e a senha de confirmação devem ser iguais.") && (
                  <Text style={{ padding: 10 ,  color: "#000", backgroundColor: "#FF976B" }}>A senha e a senha de confirmação devem ser iguais.</Text>
                )}
              </LinearGradient>
            </View>
            <View style={{ height: 30 }} />
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                borderRadius: 4,
                alignItems: "center",
                justifyContent: "center",
                }}
                onPress={handleRegister}
            >
              <LinearGradient
                style={{
                  padding: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
                colors={colors}
              >
                <Text style={{ color: "#FFF" }}>CRIE SUA CONTA</Text>
              </LinearGradient>
            </TouchableOpacity>
            <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 30,
              flexDirection: "row",
              paddingBottom: 35,
            }}
          >
            <Text style={{}}>JÁ TEM CONTA?</Text>
            <View style={{ width: 5 }} />
            <TouchableOpacity onPress={handleSignIn}>
              <Text style={{ color: "purple" }}>FAÇA SEU LOGIN</Text>
            </TouchableOpacity>
          </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
  },
  input: {
    height: 40,
    backgroundColor: "#F5F5F5",
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor:
      "linear-gradient(222.31deg, #00BCD4 -74.14%, #7870D0 26.26%, #8468D0 36.75%, #985BCF 53.23%);",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },

  buttonText: {
    color: "#F5F5F5",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

RegisterPage.navigationOptions = {
  title: 'RegisterPage',
  headerShown: false,
}

export default RegisterPage;
