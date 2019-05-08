
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image } from "react-native";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });

type Props = {};
export default class Other extends Component<Props> {
    static navigationOptions = {
        title: 'Other Component'
    };
    constructor(props) {
      super(props);
      this.state = {
        testData: 'empty'
      };
    }
  
    componentWillMount() {
      console.log('will mount');
    }
  
    componentDidMount() {
      console.log('did mount');
    }
  
    componentWillUpdate(nextProps, nextState) {
      console.log('will update');
      console.log(JSON.stringify(nextProps));
      console.log(JSON.stringify(nextState));
    }
  
    componentDidUpdate(prevProps, prevState) {
      console.log('did update');
      console.log(JSON.stringify(prevProps));
      console.log(JSON.stringify(prevState));
    }
  
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Whats goin on guys</Text>
          <Text style={styles.instructions}>text here : {this.state.testData}</Text>
  
          <TextInput
            style={{ height: 40, width: 400, borderColor: "gray", borderWidth: 1 }}
            onChangeText={testData => this.setState({ testData })}
          />
  
          <Button
            onPress={() => {
              Alert.alert(this.state.testData);
            }}
            title="Input"
          />
        </View>
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
        fontSize: 40,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});
