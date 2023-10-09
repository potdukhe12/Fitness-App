import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { purple } from '../others/Constants';
import style from '../others/style2';

export default function InfoModal({ isVisible, toggleInfoModal, exercise }) {
  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoModal}>
        <ScrollView 
            showsVerticalScrollIndicator={false}>
          <Text style={style.infoModalTitle}>Follow these steps:</Text>
          <View>
            {exercise.description.split('. ').map((point, index) => (
              <Text key={index} style={styles.infoModalDescription}>
                • {point}
              </Text>
            ))}
          </View>

          <Text style={style.infoModalTitle}>Uses:</Text>
          <View>
            <Text style={styles.infoModalDescription}>{exercise.use}</Text>
          </View>
        </ScrollView>
        <View style={styles.infoModalButtonContainer}>
          <Text style={styles.arrowButtonText}>
            Scroll Down<Text style={{ transform: [{ rotate: '90deg' }] }}>{'>'}</Text>
          </Text>
          <TouchableOpacity
            style={styles.infoModalCloseButton}
            onPress={toggleInfoModal}
          >
            <Text style={styles.infoModalCloseButtonText}>
                Close
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    position: 'absolute',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: Dimensions.get('window').height*1.07,
    width: Dimensions.get('window').width*1,
  },
  infoModal: {
    position: 'absolute',
    bottom: 80,
    padding: 30,
    borderRadius: 10,
    backgroundColor: 'white',
    width: '80%',
    // height: Dimensions.get('window').height*0.65,
    height: '60%',
    alignSelf: 'center',
    elevation: 20,
  },
  infoModalDescription: {
    fontSize: 20,
    marginBottom: 15,
  },
  infoModalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowButtonText: {
    alignSelf: 'flex-start',
    color: 'gray',
    fontSize: 16,
    marginTop: 20,
  },
  infoModalCloseButton: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    borderRadius: 10,
    elevation: 10,
  },
  infoModalCloseButtonText: {
    fontSize: 18,
    color: 'white',
    backgroundColor: purple,
    borderRadius: 7,
    padding: 7,
  },
});
