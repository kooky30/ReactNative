import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';

const ContactScreen = () => {

  const handleLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kindly reach me through these platforms</Text>
      <View style={styles.card}>
        <TouchableOpacity style={styles.contactItem} onPress={() => handleLink('tel:09927616656')}>
          <Image source={require('../Components/images/aboutme.png')} style={styles.icon} />
          <Text style={styles.text}>Mobile No.: 09096885670</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <TouchableOpacity style={styles.contactItem} onPress={() => handleLink('https://www.facebook.com/kookyjeon97/')}>
          <Image source={require('../Components/images/Fblogo.png')} style={styles.icon} />
          <Text style={styles.text}>Facebook: Roselle Azañes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <TouchableOpacity style={styles.contactItem} onPress={() => handleLink('https://www.instagram.com/s2p333dme/')}>
          <Image source={require('../Components/images/IGlogo.png')} style={styles.icon} />
          <Text style={styles.text}>Instagram: @s2p333dme</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <TouchableOpacity style={styles.contactItem} onPress={() => handleLink('mailto:croselleazanes30@gmail.com')}>
          <Image source={require('../Components/images/GmailLogo.png')} style={styles.icon} />
          <Text style={styles.text}>Email: roselleazanes30@gmail.com</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    header: {
      fontSize: 20,
      fontWeight: 'condensedBold',
      color: 'black',
      marginBottom: 100,
      marginTop: 25,
      textAlign: 'center',
    },
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      padding: 15,
      marginBottom: 20,
      elevation: 10, // Android shadow effect
      shadowOpacity: 0.5,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 4,
    },
    contactItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: 40,
      height: 40,
      marginRight: 10,
    },
    text: {
      fontSize: 16,
      color: '#55807F',
    },
  });

export default ContactScreen;
