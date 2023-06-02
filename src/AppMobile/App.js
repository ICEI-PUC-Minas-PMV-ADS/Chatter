import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/Pages/LoginPage';
import SetAvatar from './src/Pages/SetAvatar';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SetAvatar" component={SetAvatar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;