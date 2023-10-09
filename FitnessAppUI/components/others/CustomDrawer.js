import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default CustomDrawer = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.drawerContainer}>
      <Text style={styles.drawerHeader}>Menu</Text>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToScreen('HomeScreen')}
      >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToScreen('ModeScreen')}
      >
        <Text>Gym Exercise</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToScreen('ModeScreen')}
      >
        <Text>Dumbbell Exercise</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToScreen('ModeScreen')}
      >
        <Text>Exercise without equipment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => alert('Reset password')}
      >
        <Text>Reset password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToScreen('Settings')}
      >
        <Text>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => {
          alert('You are logged out!');
          navigation.navigate('Home');
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  drawerHeader: {
    fontSize: 24,
    marginBottom: 20,
  },
  drawerItem: {
    fontSize: 18,
    marginBottom: 20,
  },
});


