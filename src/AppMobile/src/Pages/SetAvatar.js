import axios from "axios";
import { decode } from "base-64";
import { Buffer } from "buffer";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";

const ConfirmButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const SetAvatar = () => {
  const [avatar, setAvatar] = useState();

  const api = "https://api.multiavatar.com";

  useEffect(() => {
    async function getAvatar() {
      const image = await axios.get(
        `${api}/${Math.round(Math.random() * 1000)}`
      );
      const buffer = Buffer(image.data);
      const base64 = buffer.toString("base64");
      const DATA_IMAGE = decode(base64);
      console.log("DATA_IMAGE", DATA_IMAGE);
      setAvatar(DATA_IMAGE);
    }
    getAvatar();
  }, []);

  //TODO: No lugar do alert o button deverá direcionar para a próxima página

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Estamos quase lá!</Text>
      <Text style={styles.text2}>Esse é o seu avatar Chatter:</Text>
      {avatar && <SvgXml xml={avatar} style={styles.imagem} />}
      <ConfirmButton title="Confirmar" onPress={() => Alert.alert("Ok")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  text1: {
    color: "#30006A",
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 117,
  },
  text2: {
    color: "#30006A",
    fontSize: 22,
  },
  buttonContainer: {
    backgroundColor: "#985BCF",
    width: 320,
    height: 50,
    borderRadius: 26,
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  imagem: {
    width: 200,
    height: 200,
    paddingBottom: 192,
    paddingTop: 117,
  },
});

SetAvatar.navigationOptions = {
  title: 'SetAvatar',
}

export default SetAvatar;