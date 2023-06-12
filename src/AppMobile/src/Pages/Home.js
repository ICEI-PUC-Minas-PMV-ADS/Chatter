import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SvgUri } from 'react-native-svg';
import base64 from 'react-native-base64';
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

//import chats from "../Pages/Components/chats.moks";
const apiUrl = 'http://192.168.0.6:5000';
let chats = [];
let imgAvtar = "";
//var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRF7c5J78kt+/Xm78lQ6stH5LI36bQh6rcf7sQp671G89ZZ8c9V8c5U9+u27MhJ/Pjv9txf8uCx57c937Ay5L1n58Nb67si8tVZ5sA68tJX/Pfr7dF58tBG9d5e8+Gc6chN6LM+7spN1pos6rYs6L8+47hE7cNG6bQc9uFj7sMn4rc17cMx3atG8duj+O7B686H7cAl7cEm7sRM26cq/vz5/v767NFY7tJM78Yq8s8y3agt9dte6sVD/vz15bY59Nlb8txY9+y86LpA5LxL67pE7L5H05Ai2Z4m58Vz89RI7dKr+/XY8Ms68dx/6sZE7sRCzIEN0YwZ67wi6rk27L4k9NZB4rAz7L0j5rM66bMb682a5sJG6LEm3asy3q0w3q026sqC8cxJ6bYd685U5a457cIn7MBJ8tZW7c1I7c5K7cQ18Msu/v3678tQ3aMq7tNe6chu6rgg79VN8tNH8c0w57Q83akq7dBb9Nld9d5g6cdC8dyb675F/v327NB6////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/LvB3QAAAMFJREFUeNpiqIcAbz0ogwFKm7GgCjgyZMihCLCkc0nkIAnIMVRw2UhDBGp5fcurGOyLfbhVtJwLdJkY8oscZCsFPBk5spiNaoTC4hnqk801Qi2zLQyD2NlcWWP5GepN5TOtSxg1QwrV01itpECG2kaLy3AYiCWxcRozQWyp9pNMDWePDI4QgVpbx5eo7a+mHFOqAxUQVeRhdrLjdFFQggqo5tqVeSS456UEQgWE4/RBboxyC4AKCEI9Wu9lUl8PEGAAV7NY4hyx8voAAAAASUVORK5CYII=';
var base64Icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231 231"><path d="M33.83,33.83a115.5,115.5,0,1,1,0,163.34,115.49,115.499,0,0,1,0-163.34Z" style="fill:#6FC30E;"/><path d="m115.5 51.75a63.75 63.75 0 0 0-10.5 126.63v14.09a115.5 115.5 0 0 0-53.729 19.027 115.5 115.5 0 0 0 128.46 0 115.5 115.5 0 0 0-53.729-19.029v-14.084a63.75 63.75 0 0 0 53.25-62.881 63.75 63.75 0 0 0-63.65-63.75 63.75 63.75 0 0 0-0.09961 0z" style="fill:#b96438;"/><path d="m116 203.13c-0.12 0-0.25 0.12-0.49 0.12s-0.25-0.12-0.49-0.12zm-27.29-8c0.87-0.25 1.72-0.47 2.56-0.69a32.37 32.37 0 0 0 0.3 8.57 21.5 21.5 0 0 0 7 6.88c6.41-6 16.8-6.64 16.8-6.64s10.5 0.58 17 6.69a21.61 21.61 0 0 0 6.93-6.66 32.34 32.34 0 0 0 0.35-8.84l2.13 0.56a114.79 114.79 0 0 1 38 16.5 115.53 115.53 0 0 1-128.46 0 114.64 114.64 0 0 1 37.38-16.37z" style="fill:#000;"/><path d="m126.15 206-3.92 7.83h-13.46l-3.92-7.83a36.59 36.59 0 0 1 10.65-2.7 35.66 35.66 0 0 1 10.65 2.7z" style="fill:#ff2500;"/><path d="m124.54 230.65-2.18-16.74h-13.47l-2.19 16.76c2.9 0.22 5.84 0.33 8.8 0.33s6.06-0.12 9-0.35z" style="fill:#ff2500;"/><path d="m134.84 186s0.86 9.8-19.34 17.26c0 0 15.79 0.86 20.57 11.76 0.12 0.49 9.3-23.26-1.23-29z" style="fill:#fff;"/><path d="m96.16 186c-10.41 5.76-1.35 29.39-1.1 29 4.65-10.78 20.56-11.76 20.56-11.76-20.32-7.45-19.46-17.24-19.46-17.24z" style="fill:#fff;"/><path d="m124.22 13.61c-19.783 0-36.945 8.0887-39.695 24.106-15.332 0.23539-31.831 2.7712-41.663 15.782-6.0238 7.9604-7.0402 19.901-6.8476 31.724 0.46007 28.503 10.742 64.228-4.3012 89.714 16.584 5.7777 43.086 10.742 73.59 11.662v-8.6558c-1.851-0.35308-3.6592-0.78105-5.4353-1.2732-30.953-8.4632-50.672-36.635-47.259-68.669 1.5514-10.603 4.6221-19.665 10.025-27.69 5.3818-7.9925 13.267-15.717 23.892-21.41 0.40658 0.72757 1.9901 3.5843 2.4074 4.3012 7.5003 12.775 17.986 23.849 33.157 26.866 12.433 2.4609 23.849 3.4666 36.346 1.1555 4.2584-0.78106 10.667-2.3967 14.851-2.4181 14.861 33.404-1.0806 75.035-40.668 87.457-2.2255 0.70616-4.5258 1.316-6.8904 1.8189 0 2.707-0.0428 5.6493-0.0642 8.5274 23.603-0.72757 48.682-4.0444 72.874-11.234-18.521-32.152 0.81315-89.083-10.036-121.46-9.0731-26.973-38.85-40.315-64.282-40.305z" style="fill:#FFCC00;"/><path d="m33.147 172.32c-2.6535 5.1143-6.088 9.9504-10.1 12.411 7.8427 10.453 17.387 19.516 28.257 26.781 16.038-10.731 35.629-17.055 54-18.606v-9.0089c-30.065-0.94155-56.108-5.8847-72.157-11.577zm164.06 0.55637c-23.731 7.0723-48.361 10.325-71.525 11.042-0.0321 3.1242-0.0535 6.2377-0.0107 9.0517 19.227 1.7226 37.908 7.8534 53.989 18.542 0.0107 0 0.0107 0 0.0214 0.0107 10.731-7.1686 20.179-16.081 27.958-26.374-4.2798-2.3967-7.832-6.9653-10.432-12.272z" style="fill:#FFCC00;"/><path d="m50.02 46.5c-2.9297 1.9143-6.1313 3.8826-10.154 7.9805-14.091 14.359-16.145 27.701-6.1406 44.018 4.2049 6.8583 6.1414 13.706-0.24609 20.5-7.7143 8.1957-21.559 4.2912-21.537 16.061 0.0214 8.613 15.063 7.9178 22.531 13.984 3.7662 3.0707 5.0836 8.3992 2.0664 12.508-4.2156 5.7456-16.006 7.3715-22.629 8.9336 5.8811 10.843 13.45 20.638 22.355 29.033l0.0039 0.0234 0.0059-0.0137c2e-3 2e-3 0.0038 4e-3 0.0059 6e-3 0.0034-0.0112 0.0063-0.0219 0.0098-0.0332 14.775-12.218 20.268-20.965 49.461-28.434-17.404-10.258-30.68-27.122-24.143-35.34 4.4123-5.5444 5.6612-7.8633 6.4062-12.078 2.3582-13.339-10.208-22.335-9.2363-32.715 1.9432-8.2346 11.379-11.173 16.947-15.115 5.4577-3.9082 9.8014-8.7695 10.799-16.918-13.558-4.8896-17.609-5.8617-36.506-12.4zm140.87 19.357c-3.4404-0.91243-23.311 122.43 4.4121 133.14 8.9661-8.5809 16.552-18.584 22.404-29.658 0-0.31029-25.133-3.9922-25.979-14.018-0.10699-1.1769 0.11822-1.4855 0.86718-2.502 6.6764-9.2122 30.716-11.416 29.646-23.496-0.27818-3.1563-4.1617-5.2334-6.7402-6.4531-12.155-5.767-32.942-9.6494-15.031-24.543 9.2122-7.3505 10.43-8.4323 0.59766-14.691-9.4583-6.0238-9.394-11.993-9.7578-16.326-0.0767-0.93035-0.22089-1.4003-0.41992-1.4531z" style="fill:#FFCC00;"/><path d="m133.83 39.909c-11.33 1.393-9.5492 16.204-2e-3 16.643-4.5102 10.717 9.0165 16.181 14.441 8.3125 6.562 8.6765 18.596 0.94751 14.457-8.3125 11.718-1.5381 9.2769-16.099 0-16.643 4.503-10.867-9.4883-16.101-14.457-8.3301-6.8832-9.0411-18.509-0.47321-14.439 8.3301z" style="fill:#ff0000;"/><path d="m153.86 48.222c0-3.0528-2.5184-5.5648-5.5791-5.5648-3.0783 0-5.5793 2.512-5.5793 5.5648 0 3.0703 2.501 5.5648 5.5793 5.5648 3.0606 0 5.5791-2.4946 5.5791-5.5648z" style="fill:yellow;"/><line x1="85.29" x2="85.29" y1="98.73" y2="109.79" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:8.7999px;stroke:black;"/><path d="m108.28 72.16h62.18c9.19 0 13.32 1.21 14.71 8.52 3.61 18.95 2.2 33.49-0.44 43.75a65.07 65.07 0 0 1-5.89 14.78 73.52 73.52 0 0 1-7.06 10.26c-1.8 2.27-5.17 1.21-4.19-1.09 0.14-0.47 0.27-1 0.4-1.48a14.29 14.29 0 0 0 0.52-6.62 12.52 12.52 0 0 0-3.88-6.3c-4.17-3.9-12.81-8.71-32.53-13.66-6.4-1.6-10.69-2.24-11.76-2.79a7.08 7.08 0 0 1-3.85-6.31v-9c0-2.39 0.18-4.55-1.56-6.57s-4.16-2.13-6.65-2.14a6 6 0 0 1-6-6v-9.35a6 6 0 0 1 6-6z" style="fill:#1df7ff;opacity:0.64;"/><path d="m135.9 98.73v9.27m15.22-9.29v9.29" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:7.7998px;stroke:#fcff2c;"/><path d="m97.06 144.59a20.15 20.15 0 0 0 36.88 4.53z" style="fill:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2.9999px;stroke:#000;"/></svg>';

function ConfigItem({ value }) {
  return (
    <TouchableOpacity>
      <View style={modal.item}>
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
  );
}


function onPressItem (item){
    Alert.alert('item', item.headshot)
    //const found = chats.find(cht => cht.id == item.id);
    console.log(item.headshot)
}



function Chat({ item }) {
  return (
    <TouchableOpacity
      onPress={() => onPressItem(item)}>
      <View style={chat.container}>
      <SvgUri source={item.headshot}  />
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

export default function Home( route ) {
  const [showSearch, setShowSearch] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  
  let userID = "";

  AsyncStorage.getItem('user_id').then(x =>
    //AsyncStorage returns a promise so adding a callback to get the value
    this.userID = x
    
    
    //Setting the value in Text
  ).catch(err => {
    console.log("Error: " + err)
  });
  
  console.log("<<<<<<<<<<<<<  " +  this.userID + "  >>>>>>>>>>>>>")
  

  const loadChatList = async () => {
    const response = await axios.get(apiUrl+'/api/auth/allusers/'+this.userID);
    //const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
    //    setContacts(data.data);
    return response;
    
  }


  loadChatList().then(x =>
      x.data.forEach(msg => {
        imgAvtar =base64.decode(msg.avatarImage);
        chats.push({"id": msg._id, 
                    "title" : msg.username,
                    "headshot" : msg.avatarImage,
                    "lastMessage" : msg.email,
                    "date" : "Mar 3"
                   })
      })
  )

  console.log("QTDE MENSAGENS:: " + chats.length);

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