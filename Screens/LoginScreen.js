import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://10.0.12.200:3001/api/loginEmployees', {
        username,
        password,
      });

      await AsyncStorage.setItem('token', response.data.token);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Error', 'Failed to connect to server. Please try again later.');
    }
  };

  return (
    <ImageBackground 
      source={require('../Components/images/logo.png')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>LOGIN</Text>
        </View>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={[
            styles.input,
            usernameFocused && { borderColor: 'gray' }
          ]}
          onFocus={() => setUsernameFocused(true)}
          onBlur={() => setUsernameFocused(false)}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={[
            styles.input,
            passwordFocused && { borderColor: 'gray' }
          ]}
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 30,
    marginBottom: 20,
    padding: 10,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    marginTop: 5,
    width: '100%',
    alignItems: 'center',
    borderRadius: 30,
  },
  registerButton: {
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default LoginScreen;
