/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';
import Home from './src/screens/Home';
import Sport from './src/screens/Sport';

const Drawer = createDrawerNavigator();
Amplify.configure(awsconfig);

const App = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Sport" component={Sport} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default withAuthenticator(App, true);
