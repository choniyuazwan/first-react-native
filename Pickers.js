import React, { Component } from "react";
import { TextInput, Text, Picker, View } from "react-native";

var PickerItem = Picker.Item;

export default class Pickers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      a: '',
      b: '',
      c: '',
      kecamatanSelected: 'pilih kecamatan'
    }
  }

  render() {
    if (this.props.data == 'dki') {
      this.state.a = 'jakpus'
      this.state.b = 'jaksel'
      this.state.c = 'jaktim'
    } else if (this.props.data == 'jabar') {
      this.state.a = 'bogor'
      this.state.b = 'bandung'
      this.state.c = 'depok'
    } else if (this.props.data == 'jateng') {
      this.state.a = 'semarang'
      this.state.b = 'solo'
      this.state.c = 'cilacap'
    } else if (this.props.data == 'diy') {
      this.state.a = 'yogya'
      this.state.b = 'bantul'
      this.state.c = 'sleman'
    }

    return (
      <View>
        <Picker
          selectedValue={this.state.kecamatanSelected}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ kecamatanSelected: itemValue })
          }>
          <Picker.Item label={this.state.a} value={this.state.a} />
          <Picker.Item label={this.state.b} value={this.state.b} />
          <Picker.Item label={this.state.c} value={this.state.c} />
        </Picker>
        <Text>kecamatan : {this.state.kecamatanSelected}</Text>
      </View>

    )
  }
}
