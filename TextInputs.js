import React, { Component } from "react";
import { TextInput } from "react-native";

export default class TextInputs extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TextInput 
        placeholder='child component'
        onChangeText={(text)=>this.props.propfromparent(text)}
        style={{ height: 40, width: 400, borderColor: "gray", borderWidth: 1 }}
      />
    )
  }
}
