import { ArrowLeft, ArrowLeft2, ArrowLeft3 } from "iconsax-react-native";
import { Text, View,TouchableOpacity } from "react-native";
 
export default function CreateScreen() {
  return (
    <View
      style={{
        flex:1,
        paddingTop:50,
        backgroundColor:"#ffffff"
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
    style={{
        padding:10,
        borderRadius:20,
        backgroundColor:"#f1f1f1"
        
    }}
    >
        <ArrowLeft
        size={20}
        color="#000"
        />
        
    </TouchableOpacity>
    <Text>
        New Event 
        </Text>
      </View>
      <View>

      </View>
    </View>
  );
}