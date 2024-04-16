import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
 import { AntDesign } from '@expo/vector-icons';
import { Category, Notification } from 'iconsax-react-native';
import { useState } from 'react';
import { BlurView } from 'expo-blur';
import { FontAwesome,Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
 
 
 
 
export default function HomeScreen() {
    const tempimg = "https://www.teddyoweh.net/_next/static/media/oweh.43ffe13c.jpeg"
    const eventimg = ["https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://i.pinimg.com/564x/43/9e/69/439e69f59e8dc522f6a9124e956a3f39.jpg","https://www.frenchweddingvenues.com/userfiles/venue/404/original/59468611.jpg","https://images.unsplash.com/photo-1683445794682-d701c185e7c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1616428317393-acd93938b4fa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
    const options = [
      "Today",
      "Tomorrow",
      "This Weekend",
      "Next Weekend",
    ]
    const [active, setActive] = useState(0)
    const paddingHorizontal = 12
    return (
      <LinearGradient
      // Background Linear Gradient
      // colors={['#f4f5fb', '#ebecf1']}
      colors={['#fff', '#fff']}
       
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          paddingTop:50,

          backgroundColor: "#fff",
        
        }}
        >
          <BlurView
     
          intensity={100}
          tint="light"
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor:"#ffffff2b",
            paddingBottom: 10,
            paddingHorizontal: paddingHorizontal,
          }}
          >
            <View
            style={{
              flexDirection:'row',
              alignItems:'center'
            }}
            >
<Image source={{uri:tempimg}} style={{width:42, height:42, borderRadius:100}}/>
              {/* <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundColor: "#f1f1f1",
                // borderWidth: 1,
                padding: 10,
                paddingHorizontal: 20,
                borderRadius: 30,
              }}
              >
                <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  marginRight: 8,
                  color: "#353535",
                }}
                >Baltimore, MD</Text>
                <AntDesign name="down" size={17} color="#989bab" />
              </View> */}
      <Image
          style={{
            width: 80,
            height: 35,
            marginLeft:10
          
          }}
          source={require("../../../assets/logo.png")}
          />  
     
            </View>
            <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            
            }}
            >
                       <TouchableOpacity
                          style={{
                            marginRight: 16,
                            // height: 55,
                            // width: 55,
                            // display: "flex",
                            // justifyContent: "center",
                            // alignItems: "center",
                            // borderRadius: 100,
                            // borderWidth: 0.5,


                       
                          }}
                       >
<Notification size="29" color="#000"/>
              </TouchableOpacity>
       
     
            </View>
          </BlurView>
          <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            // marginTop: 30,
            paddingBottom: 100,
            paddingHorizontal: 5,
            flexDirection:'row',
            flexWrap: "wrap",
            justifyContent: "space-between",
            height: "100%",
        
          }}
        
          >
            <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: paddingHorizontal,
              marginTop: 20,
              height:"90%",
              width: "100%",
            }}
            >
              {/* <Text
              style={{
                fontSize: 25,
                fontWeight: "700",
                color: "#000",
                
                marginBottom: 24,
              }}
              >
                No Upcoming Events
              </Text> */}
              {/* <Text
              style={{
                fontSize: 17,
                fontWeight: "700",
                color: "#333",
                fontFamily:"Google Sans",
                marginBottom:30,
                textAlign: "center",
                color: "#9d9d9f",
                paddingHorizontal: 20,
              }}
              
              >
               Events that redefine experiences  - create or discover events for you.
              </Text> */}
              {/* <TouchableOpacity
              style={{
                backgroundColor: "#111",
                padding: 10,
                paddingHorizontal: 18,
                paddingVertical: 16,
                borderRadius: 60,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 15,
                // borderColor: "#000",
                // borderWidth: 1,
              }}
              
              >
                <Text
                style={{
                  fontSize: 19,
                  fontWeight: "700",
                  color: "#fff",
                  fontFamily:"Google Sans",
                }}
                >
                  Create Event
                </Text>
              </TouchableOpacity> */}
              <TouchableOpacity
              style={{
                backgroundColor: "#F1F1F1",
                padding: 10,
                paddingHorizontal: 18,
                paddingVertical: 16,
                borderRadius: 60,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 20,
                // borderColor: "#000",
                // borderWidth: 1,
              }}
              
              >
                <Text
                style={{
                  fontSize: 19,
                  fontWeight: "700",
                  color: "#333",
                  fontFamily:"Canela",
                }}
                >
                  Discover Events
                </Text>
              </TouchableOpacity>

            </View>
       
          </ScrollView>
  
        </LinearGradient>
    )
}