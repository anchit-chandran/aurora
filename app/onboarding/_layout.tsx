import React from 'react'
import { Slot } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function OnboardingLayout() {
    return (
        <LinearGradient
            colors={["rgb(251,210,217)", "rgb(120,181,254)", "rgb(171,239,255)"]}
            style={{
                flex: 1,
                width: "100%",
                alignItems: "center",
            }}>
            <Slot />
        </LinearGradient>

    )
}

