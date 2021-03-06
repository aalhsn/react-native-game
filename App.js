import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

import { Provider } from "react-redux";
import { connect } from "react-redux";

// Store
import store from "./redux";

//Components
import HomePage from "./HomePage";
import WinPage from "./WinPage";
import LosePage from "./LosePage";
import GamePage from "./GamePage";
import StartPage from "./StartPage";

export default function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
