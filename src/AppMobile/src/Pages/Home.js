import { ChatContext } from "../Contexts/ChatContext";
import { StatusBar } from "expo-status-bar";
import { useState, useContext } from "react";
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";

function ConfigItem({ value }) {
  return (
    <TouchableOpacity>
      <View style={modal.item}>
        <Text>{value}</Text>
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

  return (
    <>
      <StatusBar style="auto" />

      {/* Config modal */}
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
          <View style={modal.container}>
            <ConfigItem value={"Item 1"} />
            <ConfigItem value={"Item 2"} />
            <ConfigItem value={"Item 3"} />
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Navbar */}
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

      {/* Chats */}
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
    backgroundColor: "white",
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
    backgroundColor: "#fff",
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
