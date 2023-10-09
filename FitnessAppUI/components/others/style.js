import { Dimensions, StyleSheet } from "react-native"
import { purple } from "./Constants"

{/* 3. External Styling */}
export default styles=StyleSheet.create({
  screenStyle: {
    padding: 40,
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  title: {
    color: purple, 
    fontSize: 40, 
    marginBottom: 30,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  scrollStyle: {
    height: 580,
    width: Dimensions.get('window').width*0.65,
    marginBottom: 10,
    alignContent: 'center',
    // alignItems: 'center',
  },
  menuButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 9,
  },
  menuButtonText: {
    color: purple,
    fontSize: 22,
    transform: [{ rotate: '90deg' }],
    fontFamily: 'Cochin',
  },
  })

  