import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import BtnMenu from '../others/BtnMenu';
import Background from '../others/Background2';
import { purple } from '../others/Constants';
import MenuModal from '../others/MenuModal';
import style from '../others/style';

export default function HomeScreen(props) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedExerciseType, setSelectedExerciseType] = useState('');
  const exerciseTypeOptions = [
    'Gym Exercise',
    'Dumbbells Exercise',
    'Exercise without Equipments',
  ];
  const selectedGender = props.route.params.selectedGender;

  const handleExerciseTypeSelection = (exerciseType) => {
    setSelectedExerciseType(exerciseType);
    props.navigation.navigate("ModeScreen", {
      selectedGender: selectedGender,
      exerciseType: exerciseType,
    });
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <Background>
    <View style={style.screenStyle}>
        <TouchableOpacity style={style.menuButton} onPress={toggleMenu}>
          <Text style={style.menuButtonText}>III</Text>
        </TouchableOpacity>
        <Text style={style.title}>
          Select Exercise Type : 
        </Text>
        
        <ScrollView style={style.scrollStyle}
                    showsVerticalScrollIndicator={false} >
          {exerciseTypeOptions.map((option) => (
            <BtnMenu
              key={option}
              bgColor={option === selectedExerciseType ? 'green' : purple}
              textColor="white"
              btnLabel={option}
              Press={() => handleExerciseTypeSelection(option)}
            />
          ))}
        </ScrollView>
      </View>

      {/* Use the MenuModal component here */}
      <MenuModal isVisible={menuVisible} toggleMenu={toggleMenu} navigation={props.navigation} />
    </Background>
  );
}

// const styles = StyleSheet.create({
//   screenStyle: {
//     padding: 40,
//     width: Dimensions.get('window').width,
//   },
//   menuButton: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     zIndex: 1,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//   },
//   menuButtonText: {
//     color: purple,
//     fontSize: 22,
//     transform: [{ rotate: '90deg' }],
//   },
// });
