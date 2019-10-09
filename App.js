import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GamePage from "./GamePage"

export default function App() {
  return (
    <View style={styles.container}>
      <GamePage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
