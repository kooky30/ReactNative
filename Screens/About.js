import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';


const About = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const imageDetails = {
    roselle: {
      title: "Roselle Azañes",
      description: "Hi! I am Roselle Azañes I am currently a 3rd year college taking BS Information Systems. I am 23 years old, I'm second child of 4 siblings. This is my simple and short introduction.",
      image: require('../Components/images/kooky.jpg'),
    },
    aboutme: {
      title: "My Happy Pill",
      description: "Meet my coolest and cutest dog Mr. White. This picture is when he was a puppy. He is an adorable and playful companion. My dog is my constant source of love and companionship. He always puts a smile and laughter in our lives.",
      image: require('../Components/images/MeMrwhite.png'),
    },
    Mrwhite: {
      title: "Siblings",
      description: "I have three siblings and I am the second born of the family! :)",
      image: require('../Components/images/fam.jpeg'),
    },
    journey: {
      title: "I love Coffee",
      description: "Drinking Coffee makes my day happy.",
      image: require('../Components/images/kopi.jpg'),
    },
  };

  const openModal = (imageKey) => {
    setSelectedImage(imageDetails[imageKey]);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.card}>
          <Text style={styles.cardText}>Roselle Azañes</Text>
        </View>
        <TouchableOpacity style={styles.imageContainer} onPress={() => openModal('roselle')}>
          <Image
            source={require('../Components/images/sel.jpg')} // Replace with your image source
            style={styles.image}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Get to know Me!</Text>

        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.scrollCard} onPress={() => openModal('aboutme')}>
            <Image
              source={require('../Components/images/MeMrwhite1.png')} // Replace with your image source
              style={styles.scrollCardImage}
            />
          </TouchableOpacity>
          <Text style={styles.introductionText}>My Family!</Text>
          <TouchableOpacity style={styles.scrollCard} onPress={() => openModal('Mrwhite')}>
            <Image
              source={require('../Components/images/family.jpg')} // Replace with your image source
              style={styles.scrollCardImage}
            />
          </TouchableOpacity>
          <Text style={styles.introductionText}>What I love</Text>
          
          <TouchableOpacity style={styles.scrollCard} onPress={() => openModal('journey')}>
            <Image
              source={require('../Components/images/rose.jpg')} // Replace with your image source
              style={styles.scrollCardImage}
            />
          </TouchableOpacity>
          <Text style={styles.introductionText}>That is my simple introduction about my life!</Text>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {selectedImage && (
                <>
                  <Text style={styles.modalHeading}>{selectedImage.title}</Text>
                  <Image source={selectedImage.image} style={styles.modalImage} />
                  <Text style={styles.modalText}>{selectedImage.description}</Text>
                </>
              )}
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue', // Adjust as needed
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  card: {
    backgroundColor: 'white',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingTop: 50,
    marginTop: -80, // Adjust the marginTop to move the card more to the top
    height: 450,
    width: 360,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 20,
    color: 'gray', 
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 290,
  },
  imageContainer: {
    width: 325,
    height: 350,
    borderRadius: 25,
    overflow: 'hidden',
    position: 'absolute',
    top: 10, 
    zIndex: 1,
    justifyContent: 'center', // Center the image within the container
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    marginTop: 30, // Adjust this to position the text below the image
    color: 'black', // Text color
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'lightblue',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalImage: {
    width: 250,
    height: 250, // Adjusted height to match the width for square aspect ratio
    resizeMode: 'contain', // Ensure image fills the card
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  closeButton: {
    backgroundColor: '#202020',
    borderRadius: 30,
    padding: 10,
    minWidth: 100,
    alignItems: 'center',
    marginRight: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    paddingRight: 5,
    alignItems: 'center',
  },
  cardContainer: {
    width: '90%',
    marginTop: 20,
  },
  scrollCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: 325, // Set the width to 325
    height: 350, // Set the height to 350
    padding: 10, // Adjust padding as needed
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center', // Center the image within the card
  },
  scrollCardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Ensure image fills the card
    borderRadius: 25,
  },
  introductionText: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    marginBottom: 5,
    marginLeft: 2,
    paddingLeft: 2,
  },
});


export default About;
