import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const Education = () => {
  const [expanded, setExpanded] = useState(null);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const educationData = [
    {
      school: "Naga College Foundation Inc.,",
      degree: "Bachelor of Science in Information Systems",
      date: "2019 - Present",
      description: "Currently taking a Bachelor's degree in Infomation Systems,. Currently a 3rd year student.",
      image: require('../Components/images/NCF.jpg') // Replace with your actual image path
    },
    {
      school: "Union National High School",
      degree: "Senior High School & Junior High School ",
      date: "2013-2019",
      description: "Completed Senior high school and Junior high school year 2019 at Union National High School at Sto. Domingo Calabanga Camarines Sur.",
      image: require('../Components/images/UNHS.jpg') // Replace with your actual image path
    },
    {
      school: "Union Elementary School",
      degree: "Elementary School kinder - Grade 6",
      date: "2007- 2013",
      description: "My first Experience in Schooling was at UES my alma matter",
      image: require('../Components/images/UES.jpg') // Replace with your actual image path
    }
  ];

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>My Educational Attainment</Text>
      {educationData.map((item, index) => (
        <View key={index} style={styles.accordionItem}>
          <TouchableOpacity onPress={() => toggleExpand(index)} style={styles.accordionHeader}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.schoolName}>{item.school}</Text>
            <Text style={styles.degree}>{item.degree}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </TouchableOpacity>
          {expanded === index && (
            <View style={styles.accordionContent}>
              <ScrollView style={styles.descriptionContainer}>
                <Text style={styles.description}>{item.description}</Text>
              </ScrollView>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'lightblue',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 40,
  },
  accordionItem: {
    backgroundColor: '#61B5B5',
    borderRadius: 15,
    marginBottom: 10,
  },
  accordionHeader: {
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center', // Align items to the center
  },
  accordionContent: {
    maxHeight: 150, // Adjust the maxHeight to control the visible height of the expanded content
  },
  image: {
    width: '100%', // Adjust the width as needed
    height: 300, // Adjust the height as needed
    borderRadius: 10, // Optional: Add border radius for rounded corners
    marginBottom: 10, // Add some space between the image and text
  },
  schoolName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center', // Center align the text
  },
  degree: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    textAlign: 'center', // Center align the text
  },
  date: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center', // Center align the text
  },
  descriptionContainer: {
    maxHeight: 150, // Ensure the ScrollView itself is limited to a certain height
  },
  description: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'justify',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  modalSchoolName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalDegree: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalDate: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: 'black',
    textAlign: 'justify',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#202020',
    borderRadius: 30,
    padding: 10,
    minWidth: 100,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Education;

