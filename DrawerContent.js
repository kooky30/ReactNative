import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import EducationScreen from '../screens/EducationScreen';
import SkillsScreen from '../screens/SkillsScreen';

const Drawer = createDrawerNavigator();

const DrawerContainer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
      <Drawer.Screen name="Education" component={EducationScreen} />
      <Drawer.Screen name="Skills" component={SkillsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerContainer;