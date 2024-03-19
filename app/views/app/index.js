import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import HomeStacks from './home';
import { View,Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import HomeScreen from './home/home';
import { Ionicons,Foundation } from '@expo/vector-icons';
import { AddSquare, TicketDiscount } from "iconsax-react-native";
import { BlurView } from 'expo-blur';
import CreateStacks from './create';


 
const Tab = createBottomTabNavigator();

  function MainStacks() {
    const tempimg = "https://www.teddyoweh.net/_next/static/media/oweh.43ffe13c.jpeg"


    const navigation = useNavigation(); 

    return (
 
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { position: 'absolute' },
          tabBarShowLabel: false,
          tabBarBackground: () => (
            <BlurView tint="light" intensity={100} style={[StyleSheet.absoluteFill,
            {
              backgroundColor:"#ffffffb0",
            }]
            } />
          ),
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
                return <Foundation name="home" size={32} color="black" />
            } else if (route.name === 'Discover') {
                return <Ionicons name="compass-outline" size={32} color="black" />
              } else if (route.name === 'Create') {
                return <AddSquare size="32" color="#333" onPress={() => navigation.navigate('CreateStacks')}/>
              }
                else if (route.name === 'Tickets') {
                    return <TicketDiscount size="32" color="#333"/>
                }
                else if (route.name === 'Profile') {
                    return <Image source={{uri:tempimg}} style={{width:32, height:32, borderRadius:16}}/>
                }

         
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
 
         <Tab.Screen name="Home" component={HomeStacks} />
          <Tab.Screen name="Discover" component={HomeStacks} />
            <Tab.Screen name="Create" component={HomeStacks} />
            <Tab.Screen name="Tickets" component={HomeStacks} />
         <Tab.Screen name="Profile" component={HomeStacks} />
      </Tab.Navigator>
 
    );
}

const Stack = createNativeStackNavigator();

 export default function AppStacks() {
    return (
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={MainStacks} />
        <Stack.Screen name="CreateStacks" component={CreateStacks} />
      </Stack.Navigator>
    </NavigationContainer>

    );
 }