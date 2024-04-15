import { ArrowLeft } from "iconsax-react-native";
import { View,Text, SafeAreaView, TouchableOpacity, TextInput,Image } from "react-native";
import { authstyles } from "../../../styles/authstyles";
import logo from '../../../assets/icon.png'
import { LinearGradient } from "expo-linear-gradient";
export default function  RegisterScreen() {
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
                <SafeAreaView
        style={{
            flex:1,
            paddingHorizontal:20
 
        }}
        > 
            {/* <View
            style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                paddingHorizontal:20
            
            }}
            >
                <TouchableOpacity
                style={{
                    height:50,
                    width:50,
                    borderRadius:100,
                    backgroundColor:'#f1f1f1',
                    alignItems:'center',
                    justifyContent:'center'
                }}
                >
                    <ArrowLeft size={24} color="#000"/>
                </TouchableOpacity>
            </View> */}
            <View>
                <View
                style={{
                    paddingHorizontal:20,
                    paddingTop:20,
                    paddingBottom:5,
                    alignItems:'center',
                    justifyContent:'center',
                    
                }}
                >
                    <Image source={logo} style={{width:70, height:70}}/>
                <Text
                style={{
                    marginTop:10,
                    fontSize:24,
                    fontWeight:'600',
               
             
                
                }}
                >
                 
                    Register 
         
                </Text>
                </View>
                <View
                style={{
                    flexDirection:'column',
                    alignItems:'flex-start',
                    paddingHorizontal:20,
                    paddingTop:10,
                    width:'100%'
                }}
                >
                      <View
                    style={authstyles.formgroup}
                    >
                  
                        <TextInput
                        
                        style={authstyles.forminput}
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoComplete="off"
                        enablesReturnKeyAutomatically={true}
                        placeholder="Firstname"
                        placeholderTextColor="#777"
                        />
                    </View>
                    <View
                    style={authstyles.formgroup}
                    >
                  
                        <TextInput
                        
                        style={authstyles.forminput}
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoComplete="off"
                        enablesReturnKeyAutomatically={true}
                        placeholder="Lastname"
                        placeholderTextColor="#777"
                        />
                    </View>
                    <View
                    style={authstyles.formgroup}
                    >
                  
                        <TextInput
                        
                        style={authstyles.forminput}
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoComplete="off"
                        enablesReturnKeyAutomatically={true}
                        placeholder="Email"
                        placeholderTextColor="#999"
                        />
                    </View>
                    <View
                    style={authstyles.formgroup}
                    >
                  
                        <TextInput
                        
                        style={authstyles.forminput}
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoComplete="off"
                        enablesReturnKeyAutomatically={true}
                        placeholder="Password"
                        placeholderTextColor="#999"
                        />
                    </View>
                
                    <View
                    style={authstyles.formgroup}
                    >
                        <TouchableOpacity
                        style={{
                            width:'100%',
                            backgroundColor:'#000',
                            padding:15,
                            alignItems:'center',
                            justifyContent:'center',
                            borderRadius:8

                        }}
                        >
                            <Text
                            style={{
                                color:'#fff',
                                fontSize:16,
                                fontWeight:'700'
                            
                            }}
                            >
                                Next
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

    
        </SafeAreaView>
                    </LinearGradient>
    );
}


