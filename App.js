import { createSwitchNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import React, { Component } from "react";
import Main from './Main';
import Other from './Other';
import Login from './components/Login'
import AddLesson from './components/lesson-redux/AddLesson'

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import lessonReducer from './components/lesson-redux/lessonReducer'

const store = createStore(lessonReducer)

const RootStack = createStackNavigator({
  Home: { screen: Main },
  Tool: { screen: Other },
  AddLesson: {screen: AddLesson}
});

const RootTab = createBottomTabNavigator({
  Left: { screen: Main },
  Right: { screen: Other },
  Stacks: { screen: RootStack }
});

const RootDrawer = createDrawerNavigator({
  Stacks: {
    screen: RootStack
  },
  Tabs: {
    screen: RootTab
  },
  Logout: {screen: Login}
});

const RootSwitch = createSwitchNavigator({
  Login: {screen: Login},
  App: {screen: RootDrawer}
})

// const App = createAppContainer(RootStack)
// const App = createAppContainer(RootTab)

// const App = createAppContainer(RootSwitch)
// export default App;

const AppContainer = createAppContainer(RootSwitch)
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    )
  }
}