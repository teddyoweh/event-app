import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
 import { AntDesign } from '@expo/vector-icons';
import { Category, Heart, Notification } from 'iconsax-react-native';
import { useState } from 'react';
import { BlurView } from 'expo-blur';
import { FontAwesome,Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Color from 'color';
export default function EventScreen() {
    const tempimg = "https://www.teddyoweh.net/_next/static/media/oweh.43ffe13c.jpeg"
    const eventimg = ["https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://i.pinimg.com/564x/43/9e/69/439e69f59e8dc522f6a9124e956a3f39.jpg","https://www.frenchweddingvenues.com/userfiles/venue/404/original/59468611.jpg","https://images.unsplash.com/photo-1683445794682-d701c185e7c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1616428317393-acd93938b4fa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
    return (
   <View
   style={{
         flex:1,
         backgroundColor:'#fff'
    
   }}
   >
    <ImageBackground
    source={{uri:eventimg[5]}}
    style={{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height/1,
        resizeMode:'cover',
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'flex-start',

    }}
    >
        <LinearGradient
        colors={['#00000000','#000']}
        style={{
            width:'100%',
            height:'100%',
            flexDirection:'column',
            justifyContent:'flex-end',
            alignItems:'flex-start',
            paddingHorizontal:15,
            paddingBottom:40
        }}
        >
        <BlurView tint="dark" intensity={30}
        
        style={{
            width:'100%',
           
            flexDirection:'column',
            justifyContent:'flex-end',
            alignItems:'flex-start',
            paddingHorizontal:20,
            paddingVertical:40,
            borderRadius:20,
            borderWidth:1,
            borderColor:'#222',
            borderStyle:'solid',
            overflow:'hidden'
        }}
        >
        <Text
            style={{
                fontSize:24,
                color:'#fff',
                fontWeight:'bold'
            }}
            >Event Name</Text>
            <Text
            style={{
                fontSize:16,
                color:'#fff',
                fontWeight:'500'
            }}
            >Location</Text>
            <Text
            style={{
                fontSize:16,
                color:'#fff',
                fontWeight:'500'
            }}
            >Date</Text>
        </BlurView>
            <View
            style={{
                width:"100%",
                marginTop:20,

            }}
            >
                
                <TouchableOpacity
                style={{
                    padding:20,
                    borderRadius:60,
                    textAlign:'center',
                    width:"100%",
                    backgroundColor:'#fff',
                }}
                >
                    <Text
                    
                    style={{
                        textAlign:'center',
                        fontSize:19,
                        fontWeight:'bold',
                        color:'#000'
                    }}
                    >
                       Attend
                    </Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    </ImageBackground>
 
  
   </View>
    )
}