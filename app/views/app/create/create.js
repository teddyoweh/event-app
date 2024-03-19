import { ArrowLeft, ArrowLeft2, ArrowLeft3, Blur, More } from "iconsax-react-native";
import { useState } from "react";
import { Text, View,TouchableOpacity, ScrollView,TextInput, KeyboardAvoidingView, Image, Dimensions } from "react-native";
import * as Haptics from 'expo-haptics';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import {Image as ImageICon}  from 'iconsax-react-native'
import { BlurView } from "expo-blur";
function RenderDetails() {
    const [image, setImage] = useState(null);
     
    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };
    return (
        <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={160}
        style={{
         
            padding:20,
            flexDirection:"column",
            justifyContent:'space-between',
            height:"100%"
        
        }}
        >
            <ScrollView
            
            showsVerticalScrollIndicator={false}
            >
                <TextInput
                style={{
                     borderRadius:10,
                    borderWidth:0,
                    borderColor:"transparent",
                    marginBottom:18,
                    fontSize:50,
                    fontWeight:"400"
                 
                }}
                
                placeholder="Event Name"
                />
                <View
                style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    alignItems:"center"
                }}
                >

                <TouchableOpacity
                style={{
                    paddingVertical:15,
                    paddingHorizontal:16,
                    borderRadius:60,
                    borderWidth:0,
                    borderColor:"transparent",

                    marginBottom:20,
                    backgroundColor:"#f1f1f1"
                }}
                >
                    <Text
                    style={{
                        color:"#333",
                        fontSize:16,
                        fontWeight:"400"
                         
                    }}
                    >
                        Select Event Type
                    </Text>
                </TouchableOpacity>
                </View>
                <TextInput
                style={{
                     borderRadius:10,
                    borderWidth:0,
                    borderColor:"transparent",
                    marginBottom:17,
                    fontSize:19,
                    fontWeight:"400",
                    lineHeight:26 
                 
                }}
                multiline
                
                placeholder="Event Description"
                />
                <View>
                    {/* <Text
                    style={{
                        fontSize:20,
                        fontWeight:"400",
                        color:"#333",
                        marginTop:20
                    }}
                    >
                      Upload Cover Image
                    </Text> */}
                    {/* <Text
                    style={{
                        fontSize:15,
                        fontWeight:"400",
                        color:"#b3b3b3",
                        marginTop:10
                    
                    }}
                    >
                        This is the first thing people will see when they come across your event. Choose an image that’s crisp.
                    </Text> */}
                    {
                        image ?
                       <View
                       
                       style={{
                            height:250,
                            marginTop:15,
                            borderRadius:10,
                            overflow:"hidden",
                            flexDirection:"column",
                            justifyContent:"space-between",
                            alignItems:"flex-start",
                          
                       }}
                       >
                        <Image source={{ uri: image }} style={{ width: "100%", height: "100%",resizeMode:"cover" }}/>
                 
                            <TouchableOpacity
                            onPress={()=>{
                                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
                                setImage(null)
                            
                            }}
                            style={{
                               
                                 position:"absolute",
                                top:10,
                                right:10
                            }}
                            >
                                <BlurView
                                style={{
                                    padding:10,
                                    overflow:"hidden",
                                    backgroundColor:"#f1f1f12b",
                                    borderRadius:50,
                                }}
                                >
                                <Feather name="x" size={15} color="#fff" />
                                </BlurView>
                             </TouchableOpacity>
                
                        </View>
                        
                        :
           
                    <TouchableOpacity
                    onPress={()=>{
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
                        pickImage()
                    }}
                    style={{
                        backgroundColor:"#f1f1f1",
                        borderRadius:20,
                        height:250,
                        marginTop:15,
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems:"center",
                        // borderWidth:1,
                        // borderColor:"#e3e3e3",
                        // borderBottomWidth:4,

                    }}
                    >
                        <ImageICon
                        size={60}

                        color="#a3a3a3"
                        variant="Bold"
                        
                        />
                        <Text
                        style={{
                            color:"#a3a3a3",
                            fontSize:15,
                            fontWeight:"400",
                            marginTop:10
                        
                        }}
                        >
                            4100  x 2100 

                        </Text>

                    </TouchableOpacity>
                             }
                </View>
            </ScrollView>
            <View
            style={{
                flexDirection:"row",
                justifyContent:"center",
                alignItems:"center"
            }}
            >
                <TouchableOpacity
                
                style={{
                    paddingVertical:18,
                    paddingHorizontal:20,
                    borderRadius:10,
                    backgroundColor:"#000",
                    width:"100%",
                }}
                >
                    <Text
                    style={{
                        color:"#fff",
                        textAlign:"center",
                        fontSize:17,
                        fontWeight:"400"
                    }}
                    >
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default function CreateScreen({navigation}) {
    const views = [

        'Details',
        'Location',
        'Date & Time',
        'Tickets',
        'Gallery',
        'Publish'


    ]
    const [activeView, setActiveView] = useState(views[0])
    const view_maps = {
        'Details': <RenderDetails/>,
        'Location': 'Location',
        'Date & Time': 'Date & Time',
        'Tickets': 'Tickets',
        'Gallery': 'Gallery',
        'Publish': 'Publish'
    }
  return (
    <View
      style={{
        flex:1,
        paddingTop:60,
        backgroundColor:"#ffffff",
        paddingBottom:150
      }}
    >
      <View
      style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20,
      }}
      >
            <TouchableOpacity
            onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
                navigation.goBack()
                
            }}
            style={{
                padding:10,
                borderRadius:20,
                backgroundColor:"#f1f1f1"
                
            }}
            >
                <ArrowLeft2
                size={20}
                color="#000"
                />
                
            </TouchableOpacity>
        <Text
        style={{
            fontSize:20,
            fontWeight:"500",
            color:"#000"
        
        }}
        >
            New Event 
        </Text>
        <TouchableOpacity
    style={{
        padding:10,
        borderRadius:20,
        backgroundColor:"#f1f1f1"
        
    }}
    >
        <More
        size={20}
  
        color="#000"
        />
        
    </TouchableOpacity>
      </View>
      <View
      style={{
            flexDirection:"column"
      }}
      >
        <View
        
        style={{
            borderBottomWidth:1,
            borderBottomColor:"#d3d3d3",
        
        }}
        >

     
        <ScrollView
        
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:10,
        }}
        
        >
            {
                views.map((view, index) => {
                    return (
                        <TouchableOpacity 
                        onPress={() => {
                            setActiveView(view)
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
                        }}
                        key={index}
                        style={{
                            paddingHorizontal:10,
                            paddingVertical:10,
                            marginRight:10,
                            borderBottomWidth:3,
                            position:"relative",
                          
                           
                            borderBottomColor:activeView === view ? "#444" : "transparent"
                        }}
                        >
                            <Text
                            style={{
                                color:activeView === view ? "#444" : "#a3a3a3",
                                fontSize:18,
                                fontWeight:"500"
                            }}
                            >
                                {view}
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
        </View>
        <View>
            {
                view_maps[activeView]
            }
        </View>

      </View>
      <View>

      </View>
    </View>
  );
}