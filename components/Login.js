
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image } from "react-native";
import { signIn } from '../auth'
import axios from 'axios';

type Props = {};
export default class Login extends Component<Props> {
  static navigationOptions = {
    title: 'Login'
  };
  constructor(props) {
    super(props);
    this.state = {
      testData: 'empty',
      name: 'guys',
      username: '',
      password: ''
    };
  }

  _login = async () => {
    const {username, password} = this.state;
    if(username == null || username == '' || username == null || password == '') {
      alert("Username or password cannot be empty");
    } else if (username === password) {
      let isLogin = await signIn(username, password);
      if (isLogin) {
        this.props.navigation.navigate('App')
      }
    } else {
      alert("Username or password is invalid");
    }
  }

  _loginApi = async() => {
    const data = {
      username: this.state.username,
      password: this.state.password
    }

    fetch("http://192.168.1.13:8080/customer/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      }
    }).
      then((result => result.json())).
      then(async(response) => {
        console.log(JSON.stringify(response));
        if(response.responseCode == '01') {
          const login = await signIn(this.state.username, this.state.password)
          if(login) {
            this.props.navigation.navigate('App');
          } else {
            alert("Username or password is invalid");            
          }
        } else {
          alert(response.responseMessage);
        }
      }).catch(error => {
        alert(error);
      })
  }

  _loginAxios = async() => {
    console.log('ini axios')
    const data = {
      username: this.state.username,
      password: this.state.password
    }

    axios.post("http://192.168.1.13:8080/customer/login", data)
      .then(async (result)=>{
        const response = result.data;
        console.log(JSON.stringify(response));

        if(response.responseCode == '01') {
          const login = await signIn(this.state.username, this.state.password)
          if(login) {
            this.props.navigation.navigate('App');
          } else {
            alert("Username or password is invalid");            
          }
        } else {
          alert(response.responseMessage);
        }

      }).catch(error => {
        alert(error);
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Enigma Bootcamp</Text>
        <Text style={styles.instructions}>Please Login</Text>

        <View style={styles.form}>
          <Text style={styles.instructions}>Username</Text>
          <TextInput style={styles.input} onChangeText={username => this.setState({ username })} />
        </View>

        <View style={styles.form}>
          <Text style={styles.instructions}>Password</Text>
          <TextInput style={styles.input} onChangeText={password => this.setState({ password })} />
        </View>

        <Button style={styles.button}
          onPress={this._loginAxios}
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
    marginTop: 50,
    borderRadius: 100
  }
});
