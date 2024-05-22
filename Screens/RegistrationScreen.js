import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RegistrationScreen = ({ navigation }) => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeePosition, setEmployeePosition] = useState('');
  const [employeeEmail, setEmployeeEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://10.0.12.200:3001/api/registerEmployees', { 
        employee_name: employeeName, 
        employee_position: employeePosition, 
        employee_email: employeeEmail, 
        username, 
        password 
      });
      console.log('Registration successful', response.data);
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <ImageBackground 
      source={require('../Components/images/logo.png')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>REGISTER</Text>
        </View>
        <TextInput
          placeholder="Name"
          value={employeeName}
          onChangeText={setEmployeeName}
          style={styles.input}
        />
        <TextInput
          placeholder="Position"
          value={employeePosition}
          onChangeText={setEmployeePosition}
          style={styles.input}
        />
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={employeeEmail}
          onChangeText={setEmployeeEmail}
          keyboardType="email-address"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrowButton} onPress={() => navigation.navigate('Login')}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center', // Align the container to the center
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Slightly transparent background for better readability
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    fontStyle: 'poppins',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderRadius:30,
    borderColor: 'black',
    borderWidth: 2,
    width: '100%', // Ensure the input takes the full width of the container
    marginBottom: 10,
    padding: 10,
  },
  button: {
    backgroundColor: 'black',
    padding: 12,
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 30,
    width: '100%', // Ensure the button takes the full width of the container
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  arrowButton: {
    marginTop: 20,
    width: 50,
    height: 50,
    borderRadius: 30, // Make it a circle
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegistrationScreen;
