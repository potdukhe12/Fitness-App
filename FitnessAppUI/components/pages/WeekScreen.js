import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import BtnMenu from '../others/BtnMenu2';
import Background from '../others/Background2';
import { purple } from '../others/Constants';
import MenuModal from '../others/MenuModal';
import style from '../others/style';

export default WeekScreen = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const handleDaySelection = (day) => {
    setSelectedDay(day);
    const { selectedGender, exerciseType, selectedMode } = props.route.params;
    props.navigation.navigate('ExerciseScreen', {
      selectedGender: selectedGender,
      exerciseType: exerciseType,
      selectedMode: selectedMode,
      selectedDay: day,
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
          Select Day : 
        </Text>

        <ScrollView style={style.scrollStyle}
                    showsVerticalScrollIndicator={false} >
          {daysOfWeek.map((day) => (
            <BtnMenu
              key={day}
              bgColor={day === selectedDay ? 'green' : purple}
              textColor="white"
              btnLabel={day}
              Press={() => handleDaySelection(day)}
            />
          ))}
          <View style={{ marginBottom: 60 }}></View>
        </ScrollView>

      </View>

      {/* Use the MenuModal component here */}
      <MenuModal isVisible={menuVisible} toggleMenu={toggleMenu} navigation={props.navigation} />
    </Background>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    position: 'absolute',
    top: -20,
    right: -40,
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
