import { View, Text, SafeAreaView, ActivityIndicator, StatusBar } from 'react-native'
import { StrictMode } from 'react';
import React from 'react'
import WelcomeScreen from '@/components/WelcomeScreen'
import { useFonts } from 'expo-font';


export default function App() {
    const [loaded, error] = useFonts({
        MontserratRegular: require('../assets/fonts/Montserrat-Regular.otf'),
        MontserratSemiBold: require('../assets/fonts/Montserrat-SemiBold.otf'),
    });

    if (!loaded) {
        return <ActivityIndicator size="large" />;
    }

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <WelcomeScreen></WelcomeScreen>
        </SafeAreaView>


    )
}