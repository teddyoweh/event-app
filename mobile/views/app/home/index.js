import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './home';

const Stack = createNativeStackNavigator();

export default function HomeStacks() {
  return (
    <Stack.Navigator
    
    screenOptions={{
        headerShown: false,
    
    }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
     </Stack.Navigator>
  );
}