import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './Main';
import Other from './Other';

const RootStack = createStackNavigator({
  Home: { screen: Main },
  Tool: { screen: Other }
});

const App = createAppContainer(RootStack)
export default App;