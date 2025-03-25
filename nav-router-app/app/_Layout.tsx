import { StyleSheet } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import Header from '../components/Header';

import "../global.css";
const RootLayout = () => {
  return (
    <>
    <Header />
    <Slot />
    </>
  );
}

export default RootLayout

const styles = StyleSheet.create({})
