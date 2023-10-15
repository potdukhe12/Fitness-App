import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Modal } from 'react-native';
import { purple, white } from './others/Constants';
import MenuModal from './modals/MenuModal';
import Background2 from './others/Background2';

const BMICalculator = (props) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;

    if (!isNaN(weightInKg) && !isNaN(heightInM)) {
      const bmiValue = (weightInKg / (heightInM * heightInM)).toFixed(2);
      setBMI(bmiValue);
    }
  };

  return (
    <Background2>
      <View style={styles.container}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Text style={styles.menuButtonText}>III</Text>
        </TouchableOpacity>

        <Text style={{ color: purple, fontSize: 50, marginBottom: 25, marginTop: 55 }}>
          BMI Calculator</Text>

        <View style={styles.inputContainer}>
          <Text style={{ fontSize: 26, }}>Weight (kg) : </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your weight"
            keyboardType="numeric"
            value={weight}
            onChangeText={(text) => setWeight(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ fontSize: 26, }}>Height (cm) : </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your height"
            keyboardType="numeric"
            value={height}
            onChangeText={(text) => setHeight(text)}
          />
        </View>

        <TouchableOpacity style={styles.calculateButton} onPress={calculateBMI}>
          <Text style={styles.calculateButtonText}>Calculate BMI</Text>
        </TouchableOpacity>

        {bmi !== null && (
          <View style={styles.resultContainer}>
            <Text style={{ fontSize: 28, }}>Your BMI : </Text>
            <Text style={styles.bmiText}> {bmi}</Text>
          </View>
        )}

        <MenuModal isVisible={menuVisible} toggleMenu={toggleMenu} navigation={props.navigation} />
      </View>
    </Background2>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    width: 390,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    padding: 0,
    borderBottomWidth: 1,
    borderColor: purple,
    fontSize: 28,
  },
  calculateButton: {
    backgroundColor: purple,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: 30,
  },
  calculateButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'    
  },
  bmiText: {
    fontSize: 38,
    color: purple,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    position: 'absolute',
    top: 15,
    right:15,
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  menuButtonText: {
    color: purple,
    fontSize: 22,
    transform: [{ rotate: '90deg' }],
  },
});

export default BMICalculator;
