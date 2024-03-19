import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TabBar from './components/TabBar';
import { AntDesign } from '@expo/vector-icons';
import { Notification } from 'iconsax-react-native';
import { useState } from 'react';
import { BlurView } from 'expo-blur';
import AppStacks from './views/app';
export default function App() {
  const tempimg = "https://www.teddyoweh.net/_next/static/media/oweh.43ffe13c.jpeg"
  const eventimg = "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const options = [
    "Today",
    "Tomorrow",
    "This Weekend",
    "Next Weekend",
  ]
  const [active, setActive] = useState(0)
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
     <AppStacks/>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
