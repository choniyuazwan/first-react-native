import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './Main';

const RootStack = createStackNavigator({
  Home: { screen: Main }
});

const App = createAppContainer(RootStack)
export default App;