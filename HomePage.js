import React, { Component } from "react";
import {FlatList, Image, Text, View, ListView } from "react-native";
import { Button,Content} from "native-base";
//Components
import GamePage from "./GamePage";
import LosePage from "./LosePage";
import WinPage from "./WinPage";


//StyleSheet
import styles from "./Styling";

import { connect } from "react-redux";
import StartPage from "./StartPage";

class App extends Component {
  render() {
   
    let currentPage = () => {
      if (this.props.mode === "start") {
        return <StartPage/>;
      }
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
      <Content style={[styles.gussall_bg, { position: "relative" }]}>

     <View>{currentPage()}</View>
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
