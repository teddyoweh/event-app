//stack 


// Path: views/app/home/index.js

import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
import DiscoverScreen from './discover';

const Stack = createNativeStackNavigator();

export default function DiscoverStacks() {
    return (
        <Stack.Navigator
        
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen name="DiscoverScreen" component={DiscoverScreen} />
        </Stack.Navigator>
    );}