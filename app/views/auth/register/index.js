//stack 


// Path: views/app/home/index.js

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './register';


const Stack = createNativeStackNavigator();

export default function RegisterStacks() {
    return (
        <Stack.Navigator
        
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
    );}