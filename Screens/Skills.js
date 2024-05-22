import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import your desired icon library

const Skills = () => {
  // Define an array of objects containing skill data
  const skillData = [
    { name: "JavaScript", icon: "code" },
    { name: "React Native", icon: "react" },
    { name: "HTML", icon: "html5" },
    { name: "CSS", icon: "css3" },
    { name: "Node.js", icon: "node" },
    // Add more skills as needed
  ];

  // Calculate the width of each skill card based on the screen width
  const { width } = Dimensions.get('window');
  const cardWidth = (width - 40) / 2 - 20;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>This are some of the languages that we use</Text>
      <View style={styles.skillContainer}>

        {skillData.map((skill, index) => (
          <View key={index} style={[styles.skillCard, { width: cardWidth }]}>
            <View style={styles.skillIconContainer}>
              <Icon name={skill.icon} size={40} color="#553D89" style={styles.skillIcon} />
            </View>
            <Text style={styles.skillName}>{skill.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: 'lightblue',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 60,
  },
  skillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  skillCard: {
    backgroundColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  skillIconContainer: {
    marginBottom: 20,
    position: 'row',
  },
  skillIcon: {
    position:'relative',
    alignContent:'center',
    color:'white',
  },
  skillName: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default Skills;
