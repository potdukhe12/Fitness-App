import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import BtnMenu from '../others/BtnMenu2';
import Background from '../others/Background2';
import { purple } from '../others/Constants';
import MenuModal from '../others/MenuModal';
import style from '../others/style2';
import dumbbellExercisesMen from '../exerciseData/dumbbellExercisesMen';
import gymExercisesMen from '../exerciseData/gymExercisesMen';
import noEquipmentExercisesMen from '../exerciseData/noEquipmentExercisesMen';
import dumbbellExercisesWomen from '../exerciseData/dumbbellExercisesWomen';
import gymExercisesWomen from '../exerciseData/gymExercisesWomen';
import noEquipmentExercisesWomen from '../exerciseData/noEquipmentExercisesWomen';

export default ExerciseScreen = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const [data, setData] = useState('');
  const { selectedDay, selectedGender, exerciseType, selectedMode } = props.route.params; 
  const gender = selectedGender === 'Male' ? 'Men' : 'Women';
  const selectedExercise = (exerciseType === 'Gym Exercise') ? 'gymExercises' 
                                          : ( exerciseType === 'Dumbbells Exercise' ? 'dumbbellExercises' : 'noEquipmentExercises' );
  
  const fileName = selectedExercise+gender;
  let fileOpt;
  if(fileName === 'gymExercisesMen')
    fileOpt = gymExercisesMen;
  else if(fileName === 'noEquipmentExercisesMen')
    fileOpt = noEquipmentExercisesMen;
  else if(fileName === 'dumbbellExercisesWomen')
    fileOpt = dumbbellExercisesWomen;
  else if(fileName === 'gymExercisesWomen')
    fileOpt = gymExercisesWomen;
  else if(fileName === 'noEquipmentExercisesWomen')
    fileOpt = noEquipmentExercisesWomen;
  else
    fileOpt = dumbbellExercisesMen;

  let exercises = fileOpt[selectedMode].exercises;
  
  const handleExercisePress = (exercise) => {
    setData(exercise);
    props.navigation.navigate('ExerciseDetail', {
      exercise: exercise,
      // fileName: fileName,
      // selectedDay: selectedDay,
      // selectedGender: selectedGender,
      // exerciseType: exerciseType,
      // selectedMode: selectedMode,
    });
  };

  return (
    <Background>
      <View style={style.screenStyle}>
        <TouchableOpacity style={style.menuButton} onPress={toggleMenu}>
          <Text style={style.menuButtonText}>III</Text>
        </TouchableOpacity>
        <Text style={style.title}>
          Exercise Screen : 
        </Text>

        <ScrollView style={style.scrollStyle}
                    showsVerticalScrollIndicator={false} >
          {exercises.map((exercise, index) => (
            <BtnMenu
              key={index}
              bgColor={exercise === data ? 'green' : purple}
              textColor="white"
              btnLabel={exercise.name}
              Press={() => handleExercisePress(exercise) }
            />
          ))}

          <View style={{ marginBottom: 100, }}></View>
        </ScrollView>
      </View>

      {/* Use the MenuModal component here */}
      <MenuModal isVisible={menuVisible} toggleMenu={toggleMenu} navigation={props.navigation} />
    </Background>
  );
};

