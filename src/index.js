import Home from './screens/Home';
import ScheduleMeal from './screens/ScheduleMeal';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Home,
    ScheduleMeal: ScheduleMeal,
  })
);

export default Routes;