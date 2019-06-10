import { createStackNavigator, createAppContainer } from 'react-navigation';
import Credit from './src/views/Credit';
import Data from './src/views/Data';

const AppNavigator = createStackNavigator({
    Data: Data,
    Credit: Credit
  },
  {
    initialRouteName: 'Credit'
  }
)

export default createAppContainer(AppNavigator);