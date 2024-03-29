import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./src/Pages/Welcome";
import LoginPage from "./src/Pages/LoginPage";
import RegisterPage from "./src/Pages/RegisterPage";
import SetAvatar from "./src/Pages/SetAvatar";
import Loading from "./src/Pages/Loading";
import Home from "./src/Pages/Home";
import { AuthProvider } from "./src/Contexts/AuthContext";
import { ChatProvider } from "./src/Contexts/ChatContext";
import { MessageProvider } from "./src/Contexts/MessageContext";

import { ThemeProvider } from "./src/Pages/NightMode/themes";

import ChatScreen from "./src/Pages/ChatScreen";


const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <ChatProvider>
        <MessageProvider>
        <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Welcome"
          >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen name="RegisterPage" component={RegisterPage} />
            <Stack.Screen name="SetAvatar" component={SetAvatar} />
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        </ThemeProvider>
        </MessageProvider>
      </ChatProvider>
    </AuthProvider>
  );
};

export default App;
