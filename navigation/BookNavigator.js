import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Item, HeaderButtons} from 'react-navigation-header-buttons';

import Home from '../screens/Home';
import CustomHeaderButton from '../components/UI/CustomHeaderButton';
import Colors from '../constants/Colors';

const defaultStackOptions = {
  headerStyle: {height: 40},
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
    color: Colors.text,
  },
};

const Stack = createStackNavigator();

export const BooksNavigator = () => (
  <Stack.Navigator screenOptions={defaultStackOptions}>
    <Stack.Screen
      name="Home"
      component={Home}
      options={(navData) => {
        return {
          title: 'All Books',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                iconName="menu-outline"
                title="Menu"
                iconSize={23}
                onPress={() => navData.navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                iconName="search-outline"
                title="Search"
                iconSize={20}
                onPress={() => {}}
              />
            </HeaderButtons>
          ),
        };
      }}
    />
    <Stack.Screen
      name="MyBooks"
      component={Home}
      options={(navData) => {
        return {
          title: 'All Books',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                iconName="menu-outline"
                title="Menu"
                iconSize={23}
                onPress={() => navData.navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                iconName="search-outline"
                title="Search"
                iconSize={20}
                onPress={() => {}}
              />
            </HeaderButtons>
          ),
        };
      }}
    />
  </Stack.Navigator>
);

export const StackNavigator2 = () => (
  <Stack.Navigator screenOptions={defaultStackOptions}>
    <Stack.Screen
      name="Home2"
      component={Home}
      options={(navData) => {
        return {
          title: 'My Books',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                iconName="menu-outline"
                title="Menu"
                iconSize={23}
                onPress={() => navData.navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                iconName="search-outline"
                title="Search"
                iconSize={20}
                onPress={() => {}}
              />
            </HeaderButtons>
          ),
        };
      }}
    />
  </Stack.Navigator>
);

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={BooksNavigator} />
    <Drawer.Screen name="MyBooks" component={StackNavigator2} />
  </Drawer.Navigator>
);
