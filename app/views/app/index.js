import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import HomeStacks from './home';
import { View,Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import HomeScreen from './home/home';
import { Ionicons,Foundation } from '@expo/vector-icons';
import { AddSquare, Discover, Home2, LocationDiscover, SearchStatus, SearchStatus1, Sms, TicketDiscount } from "iconsax-react-native";
import { BlurView } from 'expo-blur';
import CreateStacks from './create';
import EventScreen from './home/event';
import * as Haptics  from 'expo-haptics';
import DiscoverStacks from './discover';
 
const Tab = createBottomTabNavigator();

  function MainStacks() {
    const tempimg = "https://www.teddyoweh.net/_next/static/media/oweh.43ffe13c.jpeg"


    const navigation = useNavigation(); 

    return (
 
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { position: 'absolute',paddingTop:10,borderTopWidth:0 },
          tabBarShowLabel: false,
          tabBarBackground: () => (
            <BlurView tint="light" intensity={2000} style={[StyleSheet.absoluteFill,
            {
      
              backgroundColor:"#ffffffc9",
              borderWidth:0,
            }]
            } />
          ),
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            function hapticFeel() {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
            }
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline'; 
                return <Home2 size="28" color={color}  
           
                />
            } else if (route.name === 'Discover') {
                let color = focused ? 'black' : '#a3a3a3';
                return <SearchStatus1 size="28" color={color}  
            
                
                />
              } else if (route.name === 'Create') {
                let color = focused ? 'black' : '#a3a3a3';
                return <AddSquare size="28" color={color} onPress={() => navigation.navigate('CreateStacks')}/>
              }
                else if (route.name === 'Tickets') {
                  let color = focused ? 'black' : '#a3a3a3';
                  let variant = focused ? 'Bold' : 'Linear';
                    return <TicketDiscount size="28" color={color}  
                  
                    />
                }
                else if (route.name === 'Profile') {
                  let color = focused ? 'black' : '#a3a3a3';
                  let variant = focused ? 'Bold' : 'Linear';
                    return <Sms size="28" color={color}  />
                }

         
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
 
         <Tab.Screen name="Home" component={HomeStacks} />
          <Tab.Screen name="Discover" component={DiscoverStacks} />
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
        <Stack.Screen name="EventScreen" component={EventScreen} />

        <Stack.Screen name="CreateStacks" component={CreateStacks} />

      </Stack.Navigator>
    </NavigationContainer>

    );
 }