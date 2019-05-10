import { createSwitchNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import Main from './Main';
import Other from './Other';
import Login from './components/Login'

const RootStack = createStackNavigator({
  Home: { screen: Main },
  Tool: { screen: Other }
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
const App = createAppContainer(RootSwitch)
export default App;