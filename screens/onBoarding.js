import { View, Text, Image } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
        id: 1,
        title: 'Browse  Food',
        description: '“Welcome to our restaurant app! Log in and check  out our delicious food"',
        image: require('../assets/1.png')
    },
    {
        id: 2,
        title: 'Order Food',
        description: '“Hungry? Order food in just a few clicks and we’ll take care of you.."',
        image: require('../assets/2.png')
    },
    {
        id: 3,
        title: 'Make Reservations',
        description: '“Book a table in advance to avoid waiting in line"',
        image: require('../assets/3.png')
    },
    {
        id: 4,
        title: 'Quick Search',
        description: '“Quickly find food items you like the most"',
        image: require('../assets/4.png')
    },
    {
        id: 5,
        title: 'Apple Pay',
        description: '“We know you’re busy, so you can pay with your phone in just one click"',
        image: require('../assets/5.png')
    },

]

export default function Onboarding({ navigation }) {
    return (
        <AppIntroSlider
            data={slides}
            renderItem={({ item }) => {
                return (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: "#5EA33A",
                        flex: 1
                    }}>
                        <Image
                            source={item.image}
                            style={{
                                width: 100,
                                height: 100,
                                marginBottom: 30
                            }}
                            resizeMode="contain"
                        />
                        <Text style={{
                            fontWeight: 'bold',
                            color: "#fff",
                            fontSize: 20,
                            marginBottom: 30
                        }}>
                            {item.title}
                        </Text>
                        <Text style={{
                            textAlign: 'center',
                            paddingTop: 5,
                            color: "#fff",
                            fontSize: 16,
                        }}>
                            {item.description}
                        </Text>
                    </View>
                )
            }}
            activeDotStyle={{
                backgroundColor: "#fff",
                width: 30,
            }}
            showSkipButton
            onDone={() => {
                navigation.navigate('Landingscreen')
            }}
        />
    )
}