
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen'

//create navigator object

const navigator = createStackNavigator(
  {
  Search: SearchScreen
  }, 
  {
    intialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Restaurant Search'
    }
  }
);

export default createAppContainer(navigator);