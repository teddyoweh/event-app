//stack 


// Path: views/app/home/index.js

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './register';
import { NavigationContainer } from '@react-navigation/native';
import RegisterStacks from './register';


const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <NavigationContainer>
        <Stack.Navigator
        
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen name="RegisterStack" component={RegisterStacks} />
        </Stack.Navigator>
        </NavigationContainer>
    );}