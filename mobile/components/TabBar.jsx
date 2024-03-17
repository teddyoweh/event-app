import { BlurView } from "expo-blur";
import { AddSquare, TicketDiscount } from "iconsax-react-native";
import { Image, Text, View } from "react-native";
import { Ionicons,Foundation } from '@expo/vector-icons';
export default function TabBar(){
    const tempimg = "https://www.teddyoweh.net/_next/static/media/oweh.43ffe13c.jpeg"

    const tabs = [
        {
            name:"Home",
            icon: <Foundation name="home" size={32} color="black" />,
        },
        {
            name:"Search",
            icon: <Ionicons name="compass-outline" size={32} color="black" />
        },
        {
            name:"Add",
            icon: <AddSquare size="32" color="#333"/>,
        },
        {
            name:"Tickets",
            icon: <TicketDiscount size="32" color="#333"/>,
        },
        {
            name:"Profile",
            icon: <Image source={{uri:tempimg}} style={{width:32, height:32, borderRadius:16}}/>
        },
    ]
    return (
        <BlurView
        intensity={100}
        tint="light"
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#ffffffb0',
            width: '100%',
            paddingBottom: 30,
            paddingTop: 10,
            // height:"20%",


        }}
        
        >
            {
                tabs.map((tab, index) => {
                    return (
                        <View key={index}>
                            {/* <Text>{tab.name}</Text> */}
                            {tab.icon}
                        </View>
                    )
                })
            }
        

        </BlurView>
    )
}