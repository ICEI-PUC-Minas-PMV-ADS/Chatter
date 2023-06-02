import React, { useState } from "react";
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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("screen");

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // callApi(email, password)
  };

  const handleSignUp = () => {
    navigation.navigate('SetAvatar')
    // Adicione aqui a lógica para criar uma nova conta
  };

  const colors = ["#00BCD4", "#7870D0", "#8468D0", "#985BCF"];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF",
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
                    backgroundColor: "#FFF",
                    width: "100%",
                    padding: 10,
                  }}
                  placeholder="Usuário"
                  value={email}
                  onChangeText={setEmail}
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
                    backgroundColor: "#FFF",
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
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                borderRadius: 4,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={handleLogin}
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
                <Text style={{ color: "#FFF" }}>LOGIN</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 30,
              flexDirection: "row",
            }}
          >
            <Text style={{}}>NÃO TEM CONTA?</Text>
            <View style={{ width: 5 }} />
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={{ color: "purple" }}>CRIAR CONTA</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );

  // return (
  //
  //     <View style={styles.inputContainer}>
  //       <TextInput
  //         style={styles.input}
  //         placeholder="........."
  //         value={email}
  //         onChangeText={setEmail}
  //       />
  //       <TextInput
  //         style={styles.input}
  //         placeholder="Senha"
  //         secureTextEntry
  //         value={password}
  //         onChangeText={setPassword}
  //       />
  //     </View>

  //     <TouchableOpacity style={styles.button} onPress={handleLogin}>
  //       <Text style={styles.buttonText}>kkkk</Text>
  //     </TouchableOpacity>

  //     <TouchableOpacity style={styles.button} onPress={handleSignUp}>
  //       <Text style={styles.buttonText}>Criar Conta</Text>
  //     </TouchableOpacity>
  //   </LinearGradient>
  // );
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
    backgroundColor: "white",
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
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

LoginPage.navigationOptions = {
  title: 'LoginPage',
}

export default LoginPage;
