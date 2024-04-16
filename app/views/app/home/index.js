//stack 


// Path: views/app/home/index.js

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './home';
import EventScreen from './event';

const Stack = createNativeStackNavigator();

export default function HomeStacks() {
    return (
        <Stack.Navigator
        
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="EventScreen" component={EventScreen} />


        </Stack.Navigator>
    );}