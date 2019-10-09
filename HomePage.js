import React, { Component } from "react";
import { Text, View } from "react-native";
import { Content } from "native-base";
//Components
import GamePage from "./GamePage";
import LosePage from "./LosePage";
import WinPage from "./WinPage";

//StyleSheet
import styles from "./Styling";

import { connect } from "react-redux";

class App extends Component {
  render() {
    console.log(this.props);
    let currentPage = () => {
      if (this.props.mode === "inProgress") {
        return <GamePage />;
      }
      if (this.props.mode === "Lose") {
        return <LosePage />;
      }
      if (this.props.mode === "Win") {
        return <WinPage />;
      }
    };

    return (
      <Content style={[styles.gussall_bg, { position: "relative", top: 20 }]}>
        <View>{currentPage()}</View>
        <View style={styles.title_border}>
          <Text style={styles.guessall}>HomePage</Text>
        </View>
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    mode: state.rootGame.mode
  };
};

export default connect(mapStateToProps)(App);
