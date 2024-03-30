import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'



export default function RootLayout() {
    return (
        <>
            <Stack>

                <Stack.Screen name="index" options={{
                    title: 'Home',
                }} />
                <Stack.Screen name="onboarding"

                    options={{
                        headerStyle: {
                            backgroundColor: 'rgb(251,210,217)',
                        },
                        headerTitle: 'Onboarding',
                    }} />

            </Stack>


        </>
    )
}

