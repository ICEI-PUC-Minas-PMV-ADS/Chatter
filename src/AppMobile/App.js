import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./src/Pages/Welcome";
import LoginPage from "./src/Pages/LoginPage";
import SetAvatar from "./src/Pages/SetAvatar";



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Welcome"
      >
         <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SetAvatar" component={SetAvatar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
