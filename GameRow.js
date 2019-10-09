import React, { Component } from "react";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { connect } from "react-redux";

class GameRow extends Component {
  render() {
    return (
      <h1 onClick={() => this.props.changeColors(this.props.index)}>
        {this.props.color[this.props.index]} {this.props.validation}
      </h1>
    );
  }
}

export default GameRow;
