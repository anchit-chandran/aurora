import { View, Text, SafeAreaView, ActivityIndicator, StatusBar } from 'react-native'
import { StrictMode } from 'react';
import React from 'react'
import WelcomeScreen from '@/components/WelcomeScreen'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
    const [loaded, error] = useFonts({
        MontserratRegular: require('../assets/fonts/Montserrat-Regular.otf'),
        MontserratSemiBold: require('../assets/fonts/Montserrat-SemiBold.otf'),
    });

    if (!loaded) {
        return <ActivityIndicator size="large" />;
    }

    return (

        <LinearGradient
            colors={["rgb(251,210,217)", "rgb(120,181,254)", "rgb(171,239,255)"]}
            style={{
                flex: 1,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <SafeAreaView style={{
                flex: 1,
            }}>

                <WelcomeScreen></WelcomeScreen>

            </SafeAreaView>
        </LinearGradient>

    )
}