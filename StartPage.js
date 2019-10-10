import React, { Component } from "react";
import {FlatList, Image, Text, View, ListView } from "react-native";
import { Button,Content} from "native-base";
import { connect } from "react-redux";
import * as actionCreators from "./redux/actions";
import styles from "./Styling";
class StartPage extends Component {
  render() {
    return (
    <Content style={[styles.gussall_bg, { position: "relative" }]}>
        
          <View style={[styles.startBox,{ position: "relative",top:100, left:50}]}></View>
          <Text style={[styles.guessall,{position:"relative",bottom:190,left:72, fontSize:100, height:100, fontSize:56}]}>GUESSALL</Text>
          <Text style={[styles.guessall,{position:"relative",left:71,bottom:160, fontSize:100, height:100}]}>GAME</Text>

          <Button onPress={()=>this.props.playAgain()}  style = {[styles.btncheck,{position:"relative",bottom:60, left:50}]}><Text style = {[styles.checkText,{position:"relative", bottom:3,left:55, fontSize:40, width:500}]}>Start NOW!</Text></Button>
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
)(StartPage);
