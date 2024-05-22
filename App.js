import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Screens/Home';
import About from './Screens/About';
import Education from './Screens/Education';
import Skills from './Screens/Skills';
import Contact from './Screens/Contact';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';

const Stack = createStackNavigator();

const CustomHeader = ({ title, navigation, leftDestination, rightDestination }) => (
  <View style={styles.headerContainer}>
    {leftDestination ? (
      <TouchableOpacity onPress={() => navigation.navigate(leftDestination)}>
        <Icon name="arrow-left" size={24} style={styles.icon} />
      </TouchableOpacity>
    ) : (
      <View style={styles.iconPlaceholder} />
    )}
    <Text style={styles.title}>{title}</Text>
    {rightDestination ? (
      <TouchableOpacity onPress={() => navigation.navigate(rightDestination)}>
        <Icon name="arrow-right" size={24} style={styles.icon} />
      </TouchableOpacity>
    ) : (
      <View style={styles.iconPlaceholder} />
    )}
  </View>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader 
                title="Home" 
                navigation={navigation} 
                rightDestination="About" 
              />
            ),
          })}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader 
                title="About" 
                navigation={navigation} 
                leftDestination="Home" 
                rightDestination="Education" 
              />
            ),
          })}
        />
        <Stack.Screen
          name="Education"
          component={Education}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader 
                title="Education" 
                navigation={navigation} 
                leftDestination="About" 
                rightDestination="Skills" 
              />
            ),
          })}
        />
        <Stack.Screen
          name="Skills"
          component={Skills}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader 
                title="Skills" 
                navigation={navigation} 
                leftDestination="Education" 
                rightDestination="Contact" 
              />
            ),
          })}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader 
                title="Contact" 
                navigation={navigation} 
                leftDestination="Skills" 
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 80,
    backgroundColor: 'whitesmoke',
    borderBottomWidth: 1,
    borderBottomColor: 'lightblue',
  },
  icon: {
    paddingTop:18,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  iconPlaceholder: {
    width: 24, // Same width as the icon
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    paddingTop: 10,
  },
});

export default App;
