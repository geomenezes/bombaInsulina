import 'react-native-gesture-handler';
import { NativeBaseProvider } from "native-base";
import { Home } from './src/screens/Home';
import { ScheduleMeal } from './src/screens/ScheduleMeal';
import { Head } from "./src/components/Head";
import { Footer } from "./src/components/Footer";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <Head />
    	  <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
          />
        </Stack.Navigator>
        <Stack.Screen
            name="ScheduleMeal"
            component={ScheduleMeal}
        />
      <Footer />
    </NativeBaseProvider>
  );
}