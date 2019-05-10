import React, { Component } from "react";
import { Button, Text, View } from "react-native";

type Props = {};
export default class PropsOther extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>
          text dari view props other
          {'\n'+this.props.data}
        </Text>
        <Button onPress={()=>this.props.dataFun()} title='click here'/>
      </View>
    );
  }
}

