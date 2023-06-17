// App.js
import { ChatContext } from "../Contexts/ChatContext";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import { useState, useContext, useEffect } from "react";
import {
  Alert,
  Appearance,
  BackHandler,
  Dimensions,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { useTheme } from "./NightMode/themes";

function ConfigItem({ value }) {
  return (
    <TouchableOpacity>
      <View style={modal.item}>
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
  );
}

function ConfigItemWithSwitch({ value }) {
  const { dark, toggleTheme, colors } = useTheme();

  return (
    <TouchableOpacity onPress={toggleTheme}>
      <View style={modal.item}>
        <Text>{value}</Text>
        <Switch
          trackColor={{ false: "#008C79", true: "#6F35A5" }}
          thumbColor={dark ? "#6F35A5" : "#f4f3f4"}
          value={dark}
          onValueChange={toggleTheme}
        />
      </View>
    </TouchableOpacity>
  );
}

function Chat({ item }) {
  return (
    <TouchableOpacity>
      <View style={chat.container}>
        {item.avatarImage && (
          <SvgXml
            xml={item.avatarImage}
            style={chat.avatar}
          />
        )}
        <View style={chat.data}>
          <View style={chat.header}>
            <Text style={chat.name} numberOfLines={1}>
              {item.username}
            </Text>
            {item.lastMessage && (
              <Text style={chat.date}>{item.lastMessage.createdAt}</Text>
            )}
          </View>
          {item.lastMessage && (
            <Text numberOfLines={1} style={chat.message}>
              {item.lastMessage.message.text}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const { chatsFromUser } = useContext(ChatContext);
  const navigation = useNavigation();

  const { dark, colors } = useTheme();

  useEffect(() => {
    const onBackPress = () => {
      navigation.navigate('LoginPage');
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => {
      backHandler.remove();
    };
  }, []);

  return (
    <>
      <StatusBar style="auto" />

      <Modal
        animationType="fade"
        visible={showConfig}
        transparent
        style={modal.wrapper}
        onRequestClose={() => {
          setShowConfig(false);
        }}
      >
        <TouchableOpacity
          style={modal.wrapper}
          activeOpacity={1}
          onPressOut={() => {
            setShowConfig(false);
          }}
        >
          <View  style={[modal.container, { backgroundColor: colors.bubblechatter }]}>
            <ConfigItemWithSwitch value={"Night Mode"} /> 
            <ConfigItem value={"Item 2"} />
            <ConfigItem value={"Item 3"} />
          </View>
        </TouchableOpacity>
      </Modal>

      <View style={navbar.container}>
        {showSearch ? (
          <TextInput
            autoFocus
            style={navbar.input}
            placeholder="Pesquisar..."
          />
        ) : (
          <Text style={navbar.title}>CHATTER</Text>
        )}

        <View style={navbar.iconsWrapper}>
          <TouchableOpacity
            onPress={() => {
              setShowSearch(!showSearch);
            }}
          >
            <Image
              style={navbar.search}
              source={require("../../assets/search.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setShowConfig(!showConfig);
            }}
          >
            <Image
              style={navbar.menu}
              source={require("../../assets/menu.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>

      {chatsFromUser && (
        <View style={chat.wrapper}>
          <FlatList
            data={chatsFromUser}
            renderItem={({ item }) => <Chat item={item} />}
          />
        </View>
      )}
    </>
  );
}

const modal = StyleSheet.create({
  container: {
    width: 200,
    right: 5,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  item: {
    padding: 10,
  },
});

const chat = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  container: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "gray",
  },
  data: {
    width: Dimensions.get("window").width - 90,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    marginRight: 15,
    flex: 1,
    fontSize: 16,
  },
  date: {
    fontSize: 13,
    color: "#393939",
  },
  message: {
    color: "#393939",
  },
});

const navbar = StyleSheet.create({
  container: {
    marginTop: 29,
    backgroundColor: "#F5F5F5",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#7c58e6",
    flex: 1,
    marginRight: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#7c58e6",
  },
  iconsWrapper: {
    flexDirection: "row",
  },
  search: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  menu: {
    width: 20,
    height: 30,
  },
});
