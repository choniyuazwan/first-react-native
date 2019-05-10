
import React, { Component } from "react";
import { Platform, StyleSheet, Picker, Text, View, TextInput, Button, Alert, ScrollView, Image } from "react-native";
import { ButtonOther } from './ButtonOther';
import PropsOther from './PropsOther';
import TextInputs from './TextInputs';
import Pickers from "./Pickers";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Main extends Component<Props> {
  static navigationOptions = {
    title: 'Bootcamp App'
  };
  constructor(props) {
    super(props);
    this.state = {
      name: 'data state form main to child',
      propfromchild: 'none initially',

      kotaSelected: 'pilih kota'
    }

  }

  _openDrawer = () => {
    this.props.navigation.openDrawer();
  }

  parentFunction() {
    alert('hello, i am from parent');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>

          <Button
            onPress={this._openDrawer}
            title="open drawer"
          />

          <Button
            onPress={() => { alert("remove storage") }}
            title="remove storage"
          />

          <Button
            onPress={() => { alert("check login") }}
            title="check login"
          />

          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit Main.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>

          <Button
            onPress={() => navigate('Tool', { name: 'Adam' })}
            title="Press Me"
          />

          <ButtonOther />
          {/* <PropsOther data={this.state.name} dataFun={this.parentFunction} */}
          <PropsOther dataFun={this.parentFunction}
          />

          <TextInputs propfromparent={(propfromchild) => this.setState({ propfromchild })} />

          <Text style={styles.instructions}>text from child : {this.state.propfromchild}</Text>

          <Button
            onPress={() => alert(this.state.propfromchild)}
            title="input text child"
          />


          <Text style={styles.welcome}>Dropdown</Text>

          <Picker
            selectedValue={this.state.kotaSelected}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ kotaSelected: itemValue })
            }>
            <Picker.Item label="dki" value="dki" />
            <Picker.Item label="jabar" value="jabar" />
            <Picker.Item label="jateng" value="jateng" />
            <Picker.Item label="diy" value="diy" />
          </Picker>

          <Text style={styles.instructions}>kota : {this.state.kotaSelected}</Text>

          <Pickers data={this.state.kotaSelected} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
