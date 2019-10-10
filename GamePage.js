import React, { Component } from "react";
import {FlatList, Image, Text, View, ListView, TouchableOpacity } from "react-native";
import { Button,Content} from "native-base";
import img from "./data";

import { connect } from "react-redux";
import * as actionCreators from "./redux/actions";
import {reddot,greendot, heart} from './assets/imgs';


//StyleSheet
import styles from "./Styling";

class GamePage extends Component {
  componentDidMount() {
    {
      this.props.generate();
    }
  }

  render() {
  const cleanAttempts = this.props.attemptColors.filter(color => color !== null)


    return (     
    
    <Content style={[styles.gussall_bg, { position: "relative" }]}>

    <View style={[styles.title_border, { position: "relative", top:20 }]}>
      <Text style={[styles.guessall,{position:"relative",top:13,left:110}]}>GUESSALL</Text>
    </View>

    <View style={[styles.attempbar_top,{position:"relative",top:40,left:13}]}>
      <FlatList 
        horizontal
        data = {cleanAttempts[cleanAttempts.length-1]}
        renderItem = {({item, idx}) => 
          <View key={idx} style = {{padding: 17}}>
            <Image source={item} style = {{backgroundColor: 'white', height: 60, width: 60, borderRadius:20, marginRight:5}}/>
  
          </View>}
        />
    </View>

    <View style={[styles.attempbox, { position: "relative", top:50, left:15 }]}>
      <Text style={[styles.attempbox_text,{position:"relative", left:70, top:3}]}>{13 - this.props.attempts}</Text>
    <Image source={heart} style = {[styles.attempbox_icon,{position:"relative", bottom:45, left:35}]}/>
    </View>

    
    {/* <View style={[styles.hintbox, { position: "relative",bottom:76, left:330 }]}>
    </View> */}
    
    {/* <View style={[styles.greendot, { position: "relative",bottom:92, left:332 }]}></View>
    <View  style={[styles.greendot, { position: "relative",bottom:104, left:348 }]}></View>
    <View  style={[styles.greendot, { position: "relative",bottom:116, left:365 }]}></View>
    <View  style={[styles.greendot, { position: "relative",bottom:128, left:382 }]}></View> */}
    <View style={[styles.attempbox, { position: "relative",marginTop:7, width:200, left:200 }]}><Text style={[ { position: "relative", left:30, bottom:0, marginTop:1,fontSize:30 }]}>{this.props.attemptValidations}</Text></View>
    {/* <View style={[styles.hintbox, { position: "relative",bottom:110, left:330 }]}>
    </View> */}
    {/* <View style={[styles.reddot, { position: "relative",bottom:126, left:332 }]}></View>
    <View style={[styles.reddot, { position: "relative",bottom:138, left:348 }]}></View>
    <View style={[styles.reddot, { position: "relative",bottom:150, left:365 }]}></View>
    <View style={[styles.reddot, { position: "relative",bottom:162, left:382 }]}></View> */}

    <View style={[styles.playbox,{ position: "relative", bottom:15, left:20}]}></View>

    <TouchableOpacity onPress={()=>this.props.changeColors(0)} style = {{position:"relative", bottom:320, left:60}}><Image source={this.props.colors[0]} style = {styles.guessIcon}/></TouchableOpacity>
    <TouchableOpacity onPress={()=>this.props.changeColors(2)} style = {{position:"relative", bottom:290, left:60}}><Image source={this.props.colors[2]} style = {styles.guessIcon}/></TouchableOpacity>
    <TouchableOpacity onPress={()=>this.props.changeColors(1)} style = {{position:"relative", bottom:564, left:220}}><Image source={this.props.colors[1]} style = {styles.guessIcon}/></TouchableOpacity>
    <TouchableOpacity onPress={()=>this.props.changeColors(3)} style = {{position:"relative", bottom:537, left:220}}><Image source={this.props.colors[3]} style = {styles.guessIcon}/></TouchableOpacity>

    <Button onPress={()=> {this.props.checkLose(); this.props.attempt(this.props.indexes) ;this.props.validation(this.props.indexes)}} style = {[styles.btncheck,{position:"relative", bottom:470, left:50}]}><Text style = {[styles.checkText,{position:"relative", bottom:3,left:85}]}>Check!</Text></Button>
    
  </Content>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    attemptValidations: state.rootGame.attemptValidations,
    attemptColors: state.rootGame.attemptColors,
    attempts: state.rootGame.attempts,
    colors: state.rootGame.colors,
    indexes: state.rootGame.indexes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    attempt: indexes => dispatch(actionCreators.attempt(indexes)),
    validation: indexes => dispatch(actionCreators.validation(indexes)),
    changeColors: index => dispatch(actionCreators.changeColors(index)),
    generate: () => dispatch(actionCreators.generate()),
    checkLose: () => dispatch(actionCreators.checkLose())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamePage);
