import React from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { purple } from '../Constants';

const ExerciseDetailModal = ({ isVisible, toggleModal, exercise }) => {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      onBackdropPress={toggleModal}
      animationIn="fadeIn"
      animationOut="fadeOut"
      onRequestClose={toggleModal}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Instruction: {exercise.reps}</Text>
        <Text style={styles.modalDescription}>{exercise.description}</Text>
        <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    bottom: 80,
    padding: 30,
    borderRadius: 10,
    backgroundColor: 'white',
    width: '80%',
    alignSelf: 'center',
    elevation: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: purple,
    alignSelf: 'center',
  },
  modalDescription: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 18,
    color: purple,
  },
});

export default ExerciseDetailModal;
