import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
 import { AntDesign } from '@expo/vector-icons';
import { Category, Notification } from 'iconsax-react-native';
import { useState } from 'react';
import { BlurView } from 'expo-blur';
import { FontAwesome,Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Color from 'color';

 
 
function RenderEvents({index, eventimg}){
  return (
    <View
    style={{
      flexDirection: "column",
      marginRight: 2,
      width:Dimensions.get('window').width/1.4,
      marginLeft:4,

     


    }}
    >


    <View
    key={index}
    style={{
      width:"100%",

      height: Dimensions.get('window').height/3.2,
    
      // borderRadius: 30,
      marginTop: 20,
      // height: 200,
      flexDirection: "column",
    }}
    >


      <ImageBackground
      source={{uri: eventimg[index]}}
      style={{
   
        // width: Dimensions.get('window').width-50,
        width:"100%",
        height:"100%",
        borderRadius: 30,
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
       
        
      }}
    
      >

   
        <View
        style={{
          padding: 15,
        }}
        >
<BlurView
intensity={40}
tint="dark"
        style={{
          height: 55,
          width: 55,
          borderRadius: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff2b",
          overflow: "hidden",

        }}
        >
          <Text
          style={{
            fontSize: 14,
            fontWeight: "700",
            color: "#fff",
          }}
          >
            Mar
          </Text>
          <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            color: "#fff",
          
          }}
          >
            20
          </Text>
        </BlurView>
        </View>
     

      </ImageBackground>


    </View>
    <View
    style={{
      flexDirection:'column',
      marginTop: 10,
      paddingHorizontal: 10,
      paddingLeft: 11
    }}
    >
        <Text
        style={{
          fontSize: 19,
          fontWeight: "700",
          color: "#333",
          // fontFamily:'Times New Roman'
        
        }}
        >
          The Collective Dinner 2025
        </Text>
        <Text
        style={{
          fontSize: 15,
          color: "#a3a3a3",
          marginTop: 5,
          fontWeight: "500",


        
        }}
        >
          The Luxury Hotel, Paris France
        </Text>
      </View>
    </View>
  )
}
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
      colors={['#f4f5fb', '#ebecf1']}
       
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          paddingTop:50,

          backgroundColor: "#fff",
        
        }}
        >
          <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 10,
            paddingHorizontal: paddingHorizontal,
          }}
          >
            <View
            style={{
              flexDirection:'column'
            }}
            >

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
            width: 100,
            height: 60,
          
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
                            marginRight: 10,
                            // height: 55,
                            // width: 55,
                            // display: "flex",
                            // justifyContent: "center",
                            // alignItems: "center",
                            // borderRadius: 100,
                            // borderWidth: 0.5,


                       
                          }}
                       >
          <Ionicons name="notifications-outline" size={25} color="black" />          
              </TouchableOpacity>
              <TouchableOpacity
              style={{
                marginRight: 10,
                // height: 55,
                // width: 55,
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // borderRadius: 100,
                // borderWidth: 0.5,

              }}
              >
            <Category strokeWidth={0} size={25} color="black" />
              </TouchableOpacity>
     
            </View>
          </View>
          <ScrollView
          showsVerticalScrollIndicator={false}
        
          >
             
            <ScrollView
            contentContainerStyle={{
              // marginTop: 30,

  
              marginBottom: 20,
              paddingHorizontal: paddingHorizontal,
            }}
            showsHorizontalScrollIndicator={false}
            horizontal
            >
  
              {
                options.map((option, index) => {
                  return (
                    <TouchableOpacity
                    key={index}
                    onPress={() => setActive(index)}
                    style={{
                      backgroundColor: index==active?"#000": "#dce0f5",
                      padding: 10,
                      paddingHorizontal: 20,
                      paddingVertical: 16,
                      borderRadius: 60,
                      marginRight: 8,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      // borderColor: index==active?"#333": "#000",
                      // borderWidth: 1,
                      //abb4f6
                    }}
                    >
                      <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "500",
                        color: index==active?"#fff":"#8b9af0",
                        marginRight: 5,
             
                      }}
                      >{option}</Text>
                      {
                        index === 0 && (
                          <AntDesign name="down" size={14} color={active==index?"#fff":'#8b9af0'} />
  
                        ) 
                      }
                    </TouchableOpacity>
                  )
                })
              }
            </ScrollView>
            <View
            style={{
              marginTop: 4,
              flexDirection: "column",
              marginBottom: 30,
            }}
            >
              <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingHorizontal: paddingHorizontal,
              }}
              >
                <Text
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  width: "80%",
                  marginBottom: 1,


                }}
                >
                  Upcoming Events
                  {/* Your events / <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "500",
                    
                    color: "#989bae",
                  
                  }}
                  >
                  moments that redefine experiences.
                  </Text> */}
                </Text>
                <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomWidth: 1,
                  borderBottomColor: "#a3a3a3",
                }}
                >
                <Text
                style={{
                  fontSize: 14,
                  color: "#a3a3a3",
                
                }}
                >
                  View all
                </Text>
                </TouchableOpacity>
  
              </View>
              <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}  
              // bounces={false}
              style={{
                marginTop:0
              }}
              >
                {
                  [1,2,3].map((item, index) => {
                    return (
                     <RenderEvents index={index} eventimg={eventimg} />
                    )
                  })
                }
              </ScrollView>
  
            </View>
            <View
            style={{
              flexDirection: "column",
              marginBottom: 20,
              paddingBottom: 100
            }}
            >
              <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: paddingHorizontal,

              }}
              >
                <Text
                style={{
                  fontSize: 23,
                  fontWeight: "400",
                }}
                >
                 Recommend for you
                </Text>
                <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomWidth: 1,
                  borderBottomColor: "#a3a3a3",
                }}
                >
                <Text
                style={{
                  fontSize: 16,
                  color: "#a3a3a3",
                
                }}
                >
                  View all
                </Text>
                </TouchableOpacity>
  
              </View>
              <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}  
              
              >
                {
                  [1,2,3,4,5,6,7,8,9,10].map((item, index) => {
                    return (
                      <RenderEvents index={index} eventimg={eventimg.slice(3)} />

                    )
                  })
                }
              </ScrollView>
  
            </View>
          </ScrollView>
  
        </LinearGradient>
    )
}