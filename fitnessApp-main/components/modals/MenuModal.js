import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { purple } from '../others/Constants';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';

export default function MenuModal({ isVisible, toggleMenu, navigation }) {

  const handleLogout = async() =>{
    await signOut(auth);
  }

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={toggleMenu}
    >
      <View style={styles.menuContainer}>
        <Text style={styles.menuItem} onPress={() => navigation.navigate("GenderScreen")}>Home</Text>
        <Text style={styles.menuItem} onPress={() => alert("Reset password")}>Reset password</Text>
        <Text style={styles.menuItem} onPress={() => navigation.navigate("BMICalculator")}>BMI Calculator</Text>
        <Text style={styles.menuItem} onPress={() => navigation.navigate("Settings")}>Settings</Text>
        <Text style={styles.menuItem} onPress={handleLogout}>Logout</Text>
        <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingHorizontal: 55,
    paddingVertical: 100,
  },
  menuItem: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 12,
  },
  closeButtonText: {
    fontSize: 18,
    color: purple,
    fontWeight: 'bold',
  },
});
