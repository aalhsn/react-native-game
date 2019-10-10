import React, { Component } from "react";
import {FlatList, Image, Text, View, ListView } from "react-native";
import { Button,Content} from "native-base";
import { connect } from "react-redux";
import * as actionCreators from "./redux/actions";
import styles from "./Styling";
class WinPage extends Component {
  render() {
    return (
    <Content style={[styles.gussall_bg, { position: "relative" }]}>
         <View style={[styles.title_border, { position: "relative", top:20 }]}>
        <Text style={[styles.guessall,{position:"relative",top:13,left:110}]}>GUESSALL</Text>
      </View>
          <View style={[styles.winBox,{ position: "relative",top:100, left:50}]}></View>
          <Text style={[styles.guessall,{position:"relative",bottom:190,left:100, fontSize:100, height:100}]}>YOU</Text>
          <Text style={[styles.guessall,{position:"relative",left:80,bottom:160, fontSize:100, height:100}]}>WON!</Text>

          <Button style = {[styles.btncheck,{position:"relative",bottom:60, left:50}]}><Text style = {[styles.checkText,{position:"relative", bottom:3,left:55, fontSize:40, width:500}]}>Play Again?</Text></Button>
    </Content>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playAgain: () => dispatch(actionCreators.playAgain())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(WinPage);
