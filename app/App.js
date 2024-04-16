 import {Foundation } from '@expo/vector-icons';
import { AddSquare, TicketDiscount } from "iconsax-react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useEffect } from 'react';

import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStacks from './views/app/home';
import { BlurView } from 'expo-blur';
import AppStacks from './views/app';
import AuthStack from './views/auth';
import { useFonts } from 'expo-font';

const Tab = createBottomTabNavigator();
 
export default function App() {
  const tempimg = "https://www.teddyoweh.net/_next/static/media/oweh.43ffe13c.jpeg"
  const [fontsLoaded] = useFonts({
    'Canela': require('./assets/fonts/Canela-Regular-Web.otf'),
    'Google Sans': require('./assets/fonts/Google Sans.otf'),
  });

  // useEffect(() => {
  //   if (!fontsLoaded) {
  //     return <Text>Loading...</Text>;
  //   }
  // }
  // , [fontsLoaded]);
  console.log('fontsloaded',fontsLoaded)
  return (
    fontsLoaded&&
<View
style={{
  flex:1
}}
>
  <StatusBar/>
  <AppStacks/>
{/* <AuthStack/>   */}
</View>
  );
}