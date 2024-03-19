//stack 


// Path: views/app/home/index.js

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
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );}