import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ImageBackground,TextInput, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
 import { AntDesign,Entypo } from '@expo/vector-icons';
import { ArrowDown2, Category, Clock, Emercoin, Location, Notification } from 'iconsax-react-native';
import { useState } from 'react';
import { BlurView } from 'expo-blur';
import { FontAwesome,Ionicons,Feather,FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Color from 'color';
 
 
 
function RenderEvents({index, eventimg}){
  const tempimg = "https://www.teddyoweh.net/_next/static/media/oweh.43ffe13c.jpeg"
  return (
    <View
    style={{
      flexDirection: "row",
 
      width:Dimensions.get('window').width/1.05,
    

      paddingVertical:10,
      borderBottomWidth:1,

      borderBottomColor:"#f1f1f1"


    }}
    >
      <Image
      source={{uri:eventimg[index]}}
      style={{
        height:90,
        width:90,
        borderRadius:10
      }}
      />
      <View
      style={{
        paddingHorizontal:20,
        paddingVertical:9,
        flexDirection:'column'

      }}
      >
        <View
      style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
      }}  
      >


       <View

       style={{
        flexDirection:"row"
       }}
       >
        <Text
        style={{
          fontFamily:"Google Sans",
          fontSize:15
        }}
        >
          May 20
        </Text>
        <Text
        style={{
          marginLeft:5,
          fontFamily:"Google Sans",
          fontSize:15,
          color:"#a3a3a4"
        }}
        >
          /  Tuesday
        </Text>
       </View>
       </View>
       <Text
       style={{
        marginTop:8,
        fontSize:20,
        fontWeight:600,
        fontFamily:"Google Sans"
       }}
       >

        Soccer Tournament
       </Text>
       <View
       style={{
        flexDirection:'row',
        alignItems:'center',
        marginTop:9
       }}
       >

        <View
           style={{
            flexDirection:'row',
            alignItems:'center'
           }}
        >
       <FontAwesome5 name="clock" size={13} color="#a3a3a3" />
          <Text
          style={{
            marginLeft:5,
            color:'#a3a3a3',
            fontSize:14,
          
          }}
          >
            4pm - 1am
          </Text>

        </View>
        <View
           style={{
            flexDirection:'row',
            alignItems:'center',
            marginLeft:15
           }}
        >
       <Ionicons name="location-outline" size={14} color="#a3a3a3" />
          <Text
          style={{
            marginLeft:3,
            color:'#a3a3a3',
            fontSize:14,
          
          }}
          >
            1211 E West R, Baltimore
          </Text>

        </View>
       </View>
      </View>

    
    </View>
  )
}
export default function DiscoverScreen() {
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
          paddingTop:55,

          backgroundColor: "#fff",
        
        }}
        >
          <View>
          <View
          style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            paddingHorizontal:20,
          }}
          >

      
          <Text
          style={{
            flexDirection:'column',
       
            fontFamily:'Canela',
            fontSize:30,
          
          }}
          >
            Discover Events
          </Text>
          {/* <View
          style={{
            flexDirection:'column'
          }}
          >
            <View
            style={{
                flexDirection:'row',
                alignItems:'center',
                // borderWidth:1,
                // borderStyle:'solid',
                // borderColor:'#333',
                // paddingHorizontal:14,
                // paddingVertical:8,
                // borderRadius:60
            }}
            >
              <Text
              style={{
                fontFamily:"Google Sans",
                fontSize:15,
                marginRight:5
              }}
              >
                Baltimore, MD
              </Text>
              <Feather name="map-pin" size={16} color="black" />
            </View>
        
          </View> */}
          </View>
        <View
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
            marginBottom: 20,
            marginTop:10
        }}
        >
            <View
            style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundColor:'#f2f2f2',
                borderRadius:60,
                paddingHorizontal: 17,
                paddingVertical: 17,
                width: "100%",
            }}
            >
                <FontAwesome name="search" size={18} color="#7c7c7c" />
                <TextInput placeholder='Search Events' 
                style={{marginLeft: 10, 
                    fontFamily:"Google Sans",
                fontSize: 16, fontWeight: "700", color: "#7c7c7c"}} />

            </View>

        </View>
        </View>
          <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            // marginTop: 30,
            paddingBottom: 100,
            paddingHorizontal: 5,
            flexDirection:'row',
            flexWrap: "wrap",
            justifyContent: "space-between",
        
          }}
        
          >
            {/* <View
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
              <Text
              style={{
                fontSize: 25,
                fontWeight: "700",
                color: "#000",
                
                marginBottom: 24,
              }}
              >
                No Upcoming Events
              </Text>
              <Text
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
              </Text>
              <TouchableOpacity
              style={{
                backgroundColor: "#111",
                padding: 10,
                paddingHorizontal: 20,
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
                  fontSize: 16,
                  fontWeight: "700",
                  color: "#fff",
                  fontFamily:"Google Sans",
                }}
                >
                  Create Event
                </Text>
              </TouchableOpacity>

            </View> */}
 {
    eventimg.map((item, index) => {
      return (
        <RenderEvents
        index={index}
        eventimg={eventimg}
        />
      )
    })
 }
          
          </ScrollView>
  
        </LinearGradient>
    )
}