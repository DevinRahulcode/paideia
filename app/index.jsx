import React, { useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, Animated, Easing } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

const GRADIENT_COLORS = ['#00796B', '#38a169', '#81E6D9']; // Calm, educational teal colors

export default function Index() {
  const bounceValue = useRef(new Animated.Value(0)).current; // Initial value for bouncing animation

  useEffect(() => {
    // Start the continuous bouncing animation when the component mounts
    const startBouncing = () => {
      Animated.sequence([
        Animated.timing(bounceValue, {
          toValue: 1,
          duration: 1000, // Duration of one bounce up
          easing: Easing.bezier(0.68, -0.55, 0.27, 1.55), // Overshoot effect for bounce
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 0,
          duration: 800, // Duration of one bounce down
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ]).start(() => startBouncing()); // Loop the animation
    };

    startBouncing();

    // Cleanup function (optional, but good practice)
    return () => {
      bounceValue.stopAnimation();
    };
  }, []); // Run only once on component mount

  // Interpolate the bounceValue to create a translateY effect
  const translateY = bounceValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -20], // Button moves up by 20 units
  });

  return (
    <LinearGradient
      colors={GRADIENT_COLORS}
      style={styles.gradientContainer}
    >
      <View style={styles.contentContainer}>
        {/* New Title Added */}
        <Text style={styles.titleText}>Welcome to Paideia</Text>
        <Text style={styles.subtitleText}>Your gateway to knowledge</Text>

        {/* The Link component will navigate the user */}
        <Link href="/HomeScreen" asChild>
          <Pressable>
            {/* Apply the animated translateY to the button */}
            <Animated.View style={[styles.button, { transform: [{ translateY }] }]}>
              <Text style={styles.buttonText}>Let's Get Started</Text>
            </Animated.View>
          </Pressable>
        </Link>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',     // Center content horizontally
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // Add some padding around the content
  },
  titleText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 18,
    color: 'white',
    opacity: 0.8,
    marginBottom: 50, // More space between subtitle and button
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 50, // Makes the button a pill shape
    // Adding a shadow for depth (iOS)
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6, // Increased shadow for more depth during bounce
    },
    shadowOpacity: 0.38,
    shadowRadius: 7.49,
    // Adding elevation for depth (Android)
    elevation: 12, // Increased elevation
  },
  buttonText: {
    fontSize: 18,
    color: '#00796B', // Use the primary color from the gradient
    fontWeight: 'bold',
  },
});