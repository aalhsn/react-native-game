import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { connect } from "react-redux";

class WinPage extends Component {
  render() {
    return <Text>LOSE PAGE</Text>;
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
