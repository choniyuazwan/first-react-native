
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, Picker } from "react-native";
import {connect} from 'redux'
import {bindActionCreators} from 'redux'
import {addLesson} from '../lesson-redux/lessonAction'

type Props = {};
class AddLesson extends Component<Props> {
  static navigationOptions = {
    title: 'AddLesson'
  };
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      description: ''
    };
  }

  _onTextChangedLesson(text, att) {

  }

  _handleAddNew = () => {

  }

  render() {
    let listItem = []
    {
      if(this.props.lessons) {
        console.log('filling props form redux')
        console.log(this.props.lessons)
      }
    }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Add Lesson</Text>

        <View style={styles.form}>
          <Text style={styles.instructions}>Id</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid={'transparant'}
            value={this.state.thisLesson.id}      
            onChangeText={text => this.setState({ id: text })}
            placeholder='Id' />
        </View>

        <View style={styles.form}>
          <Text style={styles.instructions}>Description</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid={'transparant'}
            value={this.state.thisLesson.description} 
            onChangeText={text => this.setState({ description : text })}
            placeholder='Id' />
        </View>

        <Button style={styles.button}
          onPress={this._handleAddNew}
          title="Save"
        />

        <Text>lesson list</Text>
        <Picker>
          
        </Picker>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { lessons } = state
  return { lessons }
}

const mapDispatchToProps = dispatch => {
  bindActionCreators({
    addLesson,
  }, dispatch)
}

// export default connect(mapStateToProps, mapDispatchToProps)(AddLesson)
export default connect(null, mapDispatchToProps)(AddLesson)

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
