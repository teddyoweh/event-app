import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
 import { AntDesign } from '@expo/vector-icons';
import { Notification } from 'iconsax-react-native';
import { useState } from 'react';
import { BlurView } from 'expo-blur';
export default function HomeScreen() {
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
        <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          paddingTop:60,
          paddingHorizontal: 14,
          backgroundColor: "#fff",
        
        }}
        >
          <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 10
          }}
          >
            <View
            style={{
              flexDirection:'column'
            }}
            >
              <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              >
                <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  marginRight: 8,
                }}
                >Baltimore, MD</Text>
                <AntDesign name="down" size={17} color="black" />
              </View>
              <Text
              style={{
                fontSize: 13,
                color: "#666",
                marginTop: 4,
              
              }}
              >
                within 10 miles
              </Text>
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
              }}
              >
                <Image
                source={{uri: tempimg}}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 20,
                }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Notification size="28" color="#333"/>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
    
          }}
          >
            <View
            style={{
              marginTop: 20,
            }}
            >
              <Text
              style={{
                fontSize: Dimensions.get('window').width/9.4375,
                fontWeight: "400",
                lineHeight: 45,
                color:"#a3a3a3",
                fontFamily:"Times New Roman",
              }}
              >
              Discover moments that redefine <Text
              style={{
                color: "#333",
              }}
              >
              / experiences.
              </Text>
              </Text>
            </View>
            <ScrollView
            contentContainerStyle={{
              marginTop: 30,
  
              marginBottom: 50,
            }}
            showsHorizontalScrollIndicator={false}
            horizontal
            >
  
              {
                options.map((option, index) => {
                  return (
                    <TouchableOpacity
                    key={index}
                    style={{
                      backgroundColor: index==active?"#333": "#f3f3f3",
                      padding: 10,
                      paddingHorizontal: 15,
                      borderRadius: 20,
                      marginRight: 10,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    >
                      <Text
                      style={{
                        fontSize: 16,
                        color: index==active?"#fff":"#666",
                        marginRight: 5,
                      }}
                      >{option}</Text>
                      {
                        index === 0 && (
                          <AntDesign name="down" size={15} color="#fff" />
  
                        ) 
                      }
                    </TouchableOpacity>
                  )
                })
              }
            </ScrollView>
            <View
            style={{
              
              flexDirection: "column",
              marginBottom: 30,
            }}
            >
              <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              >
                <Text
                style={{
                  fontSize: 23,
                  fontWeight: "350",
                }}
                >
                  Recommended for you
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
                      <View
                      style={{
                        flexDirection: "column",
                        marginRight: 15,
                        width:Dimensions.get('window').width-80,
                
                      }}
                      >
  
    
                      <View
                      key={index}
                      style={{
                        width:"100%",
                        height: Dimensions.get('window').height/4.5,
                        backgroundColor: "#f3f3f3",
                        borderRadius: 20,
                        marginTop: 20,
                        // height: 200,
                        flexDirection: "column",
                      }}
                      >
                        <ImageBackground
                        source={{uri: eventimg}}
                        style={{
                          // width: Dimensions.get('window').width-50,
                          width:"100%",
                          height:"100%",
                          borderRadius: 20,
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
                      }}
                      >
                          <Text
                          style={{
                            fontSize: 20,
                            fontWeight: "600",
                            color: "#333",
                          
                          }}
                          >
                            MorganHacks 2024
                          </Text>
                          <Text
                          style={{
                            fontSize: 16,
                            color: "#a3a3a3",
                            marginTop: 5,
                          
                          }}
                          >
                            1200 E Cold Spring Ln, Baltimore, MD
                          </Text>
                        </View>
                      </View>
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
              }}
              >
                <Text
                style={{
                  fontSize: 23,
                  fontWeight: "350",
                }}
                >
                 Upcoming events
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
                      <View
                      style={{
                        flexDirection: "column",
                        marginRight: 15,
                        width:Dimensions.get('window').width-80,
                
                      }}
                      >
  
    
                      <View
                      key={index}
                      style={{
                        width:"100%",
                        height: Dimensions.get('window').height/4.5,
                        backgroundColor: "#f3f3f3",
                        borderRadius: 20,
                        marginTop: 20,
                        // height: 200,
                        flexDirection: "column",
                      }}
                      >
                        <ImageBackground
                        source={{uri: eventimg}}
                        style={{
                          // width: Dimensions.get('window').width-50,
                          width:"100%",
                          height:"100%",
                          borderRadius: 20,
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
                      }}
                      >
                          <Text
                          style={{
                            fontSize: 20,
                            fontWeight: "600",
                            color: "#333",
                          
                          }}
                          >
                            MorganHacks 2024
                          </Text>
                          <Text
                          style={{
                            fontSize: 16,
                            color: "#a3a3a3",
                            marginTop: 5,
                          
                          }}
                          >
                            1200 E Cold Spring Ln, Baltimore, MD
                          </Text>
                        </View>
                      </View>
                    )
                  })
                }
              </ScrollView>
  
            </View>
          </ScrollView>
  
        </View>
    )
}