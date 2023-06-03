import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
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

import chats from "../Pages/Components/chats.moks";

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
        <Image
          source={
            item.headshot
              ? { uri: item.headshot }
              : require("../../assets/user.jpg")
          }
          style={{ width: 50, height: 50, borderRadius: 100 }}
        />
        <View style={chat.data}>
          <View style={chat.header}>
            <Text style={chat.name} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={chat.date}>{item.date}</Text>
          </View>
          <Text numberOfLines={1} style={chat.message}>
            {item.lastMessage}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);
  const [showConfig, setShowConfig] = useState(false);

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
      <View style={chat.wrapper}>
        <FlatList
          data={chats}
          renderItem={({ item }) => <Chat item={item} />}
        />
      </View>
    </>
  );
}
const modal = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5S",
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