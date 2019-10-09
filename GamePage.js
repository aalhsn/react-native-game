import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { connect } from "react-redux";
import * as actionCreators from "./redux/actions";

class GamePage extends Component {
  componentDidMount() {
    {
      this.props.generate();
    }
  }
  render() {
    return <Text>{this.props.indexes}</Text>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    attemptValidations: state.rootGame.attemptValidations,
    attemptColors: state.rootGame.attemptColors,
    attemps: state.rootGame.attempts,
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
