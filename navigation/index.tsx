import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import Home from '../screens/Home';

const homeScreenOptions = navData => {
   return {
      title: 'Home',
      headerLeft: () => (
       <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
         <Item title="Menu" iconName='ios-menu' onPress={() => {
           navData.navigation.toggleDrawer()
           }
         }/>
       </HeaderButtons>
      )
  }
}

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={homeScreenOptions} />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={StackNavigator} />
    </Drawer.Navigator>
  );
}


