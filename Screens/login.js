import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleLogin = async () => {
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
    <View style={styles.container}>
      <Text style={styles.logo}>Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={setPassword}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
        />
        {(isPasswordFocused || password) && (
          <Text style={[styles.floatingLabel, (isPasswordFocused || password) && styles.floatingLabelFocused]}>
            Password
          </Text>
        )}
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: 'black',
    borderWidth: 2,
    borderRadius: 30,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    position: 'relative',
  },
  inputText: {
    height: 50,
    color: 'white',
    fontWeight: 'bold',
  },
  floatingLabel: {
    position: 'absolute',
    top: -6,
    left: 20,
    fontSize: 15,
    backgroundColor: 'black',
    paddingHorizontal: 5,
    color: '#BBE1FA',
  },
  floatingLabelFocused: {
    color: '#BBE1FA',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: 'black',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
