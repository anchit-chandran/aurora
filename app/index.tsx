import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import WelcomeScreen from '@/components/WelcomeScreen'
import { useFonts } from 'expo-font';

export default function App() {
    const [loaded, error] = useFonts({
        MontserratRegular: require('../assets/fonts/Montserrat-Regular.otf'),
        MontserratSemiBold: require('../assets/fonts/Montserrat-SemiBold.otf'),
      });
    return (
        <SafeAreaView>
            <WelcomeScreen></WelcomeScreen>
        </SafeAreaView>
    )
}