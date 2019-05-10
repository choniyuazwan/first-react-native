
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image } from "react-native";

type Props = {};
export default class Login extends Component<Props> {
    static navigationOptions = {
        title: 'Login'
    };
    constructor(props) {
      super(props);
      this.state = {
        testData: 'empty',
        name: 'guys'
      };
    }
  
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Enigma Bootcamp</Text>
          <Text style={styles.instructions}>Please Login</Text>
          
          <View style={styles.form}>
            <Text style={styles.instructions}>Username</Text>
            <TextInput style={styles.input} />
          </View>
          
          <View style={styles.form}>
            <Text style={styles.instructions}>Password</Text>
            <TextInput style={styles.input} />
          </View>
          
          <Button style={styles.button}
            onPress={() => {
              Alert.alert('login success');
            }}
            title="Login"
          />

          <Image style={styles.image} source={require('../Resources/sti.jpeg')} />
        </View>
      );
    }
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "#F5FCFF",
        alignItems: "center"
    },
    welcome: {
        fontSize: 40,
        textAlign: "center",
        margin: 10,
        marginBottom: 30
    },
    instructions: {
      fontSize: 18,
      textAlign: "center",
      color: "#000000"
    },
    form: {
      flexDirection: "row",
      margin: 5,
      justifyContent: "space-around",
      alignSelf: "stretch"
    },
    input: {
      height: 35, width: 250, borderColor: "blue", borderWidth: 1,
      borderRadius: 5,
    },
    button: {
      marginTop: 10,
      borderRadius: 5
    },
    image: {
      marginTop:50,
      borderRadius: 100
    }
});
