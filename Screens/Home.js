import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, FlatList, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          const decoded = jwtDecode(token)
          setUsername(decoded);
        }
      } catch (error) {
        console.error('Failed to load username:', error);
      }
    };

    fetchUsername();
  }, []);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const cardData = [
    { id: '1', title: 'One Piece', image: require('../Components/images/op.png') },
    { id: '2', title: 'Shanks', image: require('../Components/images/shanks.jpg') },
    { id: '3', title: 'Monkey D. Luffy', image: require('../Components/images/luffy.jpg') },
    { id: '4', title: 'Roronoa Zoro', image: require('../Components/images/zoro.jpg') },
    { id: '5', title: 'Portugas D. Ace', image: require('../Components/images/ace.jpg') },
    { id: '6', title: 'Vinsmoke Sanji', image: require('../Components/images/sanji.jpg') },
  ];

  const cardData1 = [
    { id: '1', title: 'Goju Saturo', image: require('../Components/images/gojo.jpg') },
    { id: '2', title: 'Sukuna', image: require('../Components/images/sukuna.jpg') },
    { id: '3', title: 'Nobara', image: require('../Components/images/nobara.jpg') },
    { id: '4', title: 'Megumi', image: require('../Components/images/megumi.jpg') },
  ];

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </View>
  );

  return (
    <ImageBackground source={require('../Components/images/bg.png')} style={styles.backgroundImage}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image source={require('../Components/images/logomrwhite.png')} style={styles.profileImageHeader} />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={styles.cardText}>Welcome</Text>
            <Text style={styles.cardText2}>To my First Mobile App</Text>
            <Text style={styles.cardText3}>Made by Roselle Azañnes</Text>
          </View>
        </View>

        <View style={styles.headingContainer}>
          <Text style={styles.heading}>One Piece Anime Characters</Text>
        </View>

        <ScrollView vertical={true} style={styles.scrollView}>
          <FlatList
            horizontal
            data={cardData}
            renderItem={renderCard}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>

        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Jujutsju Kaisen Anime Characters</Text>
        </View>
        
        <ScrollView vertical={true} style={styles.scrollView}>
          <FlatList
            horizontal
            data={cardData1}
            renderItem={renderCard}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>

        <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image source={require('../Components/images/logomrwhite.png')} style={styles.profileImage} />
              <Text style={styles.modalHeading}>User Log In:</Text>
              <Text style={styles.userInfo}>{username.username}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                  <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'white',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    backgroundColor: 'lightblue',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 5,
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTextContainer: {
    marginLeft: 10,
  },
  headingContainer: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  scrollView: {
    marginTop: 10,
    maxHeight: 320,
    paddingHorizontal: 1,
  },
  card: {
    backgroundColor: 'lightblue',
    width: 200,
    height: 300,
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'black',
  },
  cardImage: {
    width: '100%',
    height: '90%',
    borderRadius: 10,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  cardText2: {
    fontSize: 15,
    color: 'black',
    fontStyle: 'italic',
  },
  cardText3: {
    fontSize: 8,
    color: 'black',
  },
  profileImageHeader: {
    marginTop: 22,
    width: 100,
    height: 200,
    borderRadius: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  modalContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  profileImage: {
    width: 300,
    height: 200,
    borderRadius: 50,
    marginBottom: 10,
  },
  modalHeading: {
    fontSize: 20,
    fontWeight: 'normal',
    alignContent:'row',
    marginBottom: 2,
    textAlign: 'center',
  },
  userInfo: {
    fontSize: 20,
    fontStyle:'normal',
    fontWeight:'bold',
    marginBottom: 20,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  closeButton: {
    backgroundColor: 'gray',
    borderRadius: 30,
    padding: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  logoutButton: {
    backgroundColor: 'red',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  videoContainer: {
    marginTop: 10,
    maxHeight: 320,
    paddingHorizontal: 1,
  },
  videoCard: {
    backgroundColor: 'lightblue',
    width: 200,
    height: 300,
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 15,
    elevation: 3,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#553D89',
  },
});

export default Home;
