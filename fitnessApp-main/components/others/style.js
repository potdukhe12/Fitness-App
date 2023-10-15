import { Dimensions, StyleSheet } from "react-native"
import { purple } from "./Constants"

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
  },
  scrollStyle2: {
    // flex: 1, 
    height: Dimensions.get('window').height*0.65,
    width: Dimensions.get('window').width*0.65,
    paddingVertical: Dimensions.get('window').height*0.1,
    // marginBottom: 10,
    // alignContent: 'center',
    // backgroundColor: 'white',
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
    paddingHorizontal: 11,
  },
  menuButtonText: {
    color: purple,
    fontSize: 22,
    transform: [{ rotate: '90deg' }],
    fontFamily: 'Cochin',
  },
  })

  