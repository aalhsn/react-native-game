import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Style
import styles from "./style";


export default function GamePage() {
  return (
    <View>
      <View style={styles.gussall_top_bg}>
      <View style={styles.title_border}>
          <Text style={styles.guessall}>GUESALL</Text>
          <View style={styles.attempbar_top}>

          </View>
      </View>
      </View>
    </View>
  );
}

