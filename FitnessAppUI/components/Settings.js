import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { purple } from './others/Constants';
import MenuModal from './others/MenuModal';

const Settings = (props) => {
  const [pushNotificationEnabled, setPushNotificationEnabled] = useState(true);

  const togglePushNotification = () => {
    setPushNotificationEnabled(!pushNotificationEnabled);
  };

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <Text style={styles.menuButtonText}>III</Text>
      </TouchableOpacity>
      <Text style={{ color: purple, fontSize: 50, marginBottom: 45, marginTop: 30 }}>Settings</Text>

      <TouchableOpacity style={styles.item} onPress={() => {/* Navigate to Update Profile screen */ alert("Update Profile") }}>
        <Text style={{ fontSize: 20 }}>Update Profile</Text>
      </TouchableOpacity>

      <View style={styles.item}>
        <Text style={{ fontSize: 20 }}>Push Notifications</Text>
        <Switch
          value={pushNotificationEnabled}
          onValueChange={togglePushNotification}
        />
      </View>

      <TouchableOpacity style={styles.item} onPress={() => {/* Navigate to Feedback screen */ alert("Feedback page") }}>
        <Text style={{ fontSize: 20 }}>Give Feedback</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => {/* Navigate to Help & Support screen */ alert("Help & Support") }}>
        <Text style={{ fontSize: 20 }}>Help & Support</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => {/* Navigate to About screen */ alert("About Page") }}>
        <Text style={{ fontSize: 20 }}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={() => {
        props.navigation.navigate("Home")
        alert("You have logged out");
      }}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <MenuModal isVisible={menuVisible} toggleMenu={toggleMenu} navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: purple,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
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

export default Settings;
