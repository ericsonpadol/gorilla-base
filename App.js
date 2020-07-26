import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './screens/Dashboard';

const { Navigator, Screen } = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" options={{ title: "My Dashboard" }} component={Dashboard} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
