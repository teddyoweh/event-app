import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
 import { AntDesign } from '@expo/vector-icons';
import { ArrowLeft2, Category, Heart, Notification } from 'iconsax-react-native';
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
            flexDirection:'column',
            paddingVertical:60,
            backgroundColor:"#000"
        }}
        >
            <View
            style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                paddingHorizontal:10

            }}
            >
                <TouchableOpacity
                style={{
                    height:50,
                    width:50,
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:"#222",
                    borderRadius:100
                }}
                
                >
                <ArrowLeft2 size="23" color="#fff"/>
                </TouchableOpacity>
                <Text
                style={{
                    fontFamily:"Google Sans",
                    fontSize:20,
                    color:"#fff"

                }}
                >
                    Soccer Game
                </Text>
                <TouchableOpacity
                style={{
                    height:50,
                    width:50,
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:"#222",
                    borderRadius:100
                }}
                
                >
                <Heart size="23" color="#fff"/>
                </TouchableOpacity>
            </View>
        <ScrollView
        
        contentContainerStyle={{
            height:"100%",
            backgroundColor:"#fff",
            borderTopRightRadius:50,
            borderTopLeftRadius:50,
            marginTop:30,
            paddingVertical:10
 
        }}
        >
            <View
            style={{
                paddingHorizontal:10,
          
                height:"100%"
           
            }}
            >
                <ImageBackground
                source={{uri:eventimg[0]}}
                style={{
                    height:Dimensions.get('window').height/2,
                    borderRadius:50,
                    overflow:'hidden'
                }}
                >

                </ImageBackground>
            </View>

        </ScrollView>
        </View>
    )
}