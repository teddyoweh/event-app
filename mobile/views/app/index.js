import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeStacks from './home';
import { View,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../../components/TabBar';
import HomeScreen from './home/home';
import { Ionicons,Foundation } from '@expo/vector-icons';
import { AddSquare, TicketDiscount } from "iconsax-react-native";


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function AppStacks() {
    const tempimg = "https://www.teddyoweh.net/_next/static/media/oweh.43ffe13c.jpeg"

    return (
        <View
        style={{
        
        
        }}
        >
            
        
        <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
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
                return <AddSquare size="32" color="#333"/>
              }
                else if (route.name === 'Tickets') {
                    return <TicketDiscount size="32" color="#333"/>
                }
                else if (route.name === 'Profile') {
                    return <Image source={{uri:tempimg}} style={{width:32, height:32, borderRadius:16}}/>
                }
              
  
              // You can return any component that you like here!
               
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Discover" component={HomeStacks} />
          <Tab.Screen name="Create" component={HomeScreen} />
          <Tab.Screen name="Tickets" component={HomeStacks} />
          <Tab.Screen name="Profile" component={HomeScreen} />
 
          
        </Tab.Navigator>
      </NavigationContainer>
      </View>
    );
}


 