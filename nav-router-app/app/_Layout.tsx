import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import Header from '../components/Header';

import "../global.css";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
const RootLayout = () => {
  return (
    <SafeAreaView className="flex-1 bg-blue-500">
    <Header />
    <Slot />
    <StatusBar translucent backgroundColor='transparent' style="auto"/>
    </SafeAreaView>
  );
}

export default RootLayout

const styles = StyleSheet.create({})
