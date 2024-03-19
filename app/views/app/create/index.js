//stack 


// Path: views/app/home/index.js

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateScreen from './create';

const Stack = createNativeStackNavigator();

export default function CreateStacks() {
    return (
        <Stack.Navigator
        
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen name="Create" component={CreateScreen} />
        </Stack.Navigator>
    );}