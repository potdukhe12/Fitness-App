import { Dimensions, StyleSheet } from "react-native"
import { purple, white } from "./Constants"

{/* 3. External Styling */}
export default styles=StyleSheet.create({
  screenStyle: {
    paddingVertical: 40,
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  screenStyle2: {
    paddingTop: 40,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
  },
  title: {
    color: purple, 
    fontSize: 40, 
    marginBottom: 30,
    paddingHorizontal: 40,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  subTitle: {
    color: purple, 
    fontSize: 30,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    // height: Dimensions.get('window').height*0.18,
  },
  scrollStyle: {
    height: Dimensions.get('window').height*0.85,
    width: Dimensions.get('window').width*1,
    paddingHorizontal: Dimensions.get('window').width*0.12,
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
  // Style for the video container
  videoContainer: {
    flex: 1, // Fill the entire available space
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    margin: 20,
    borderRadius: 20,
    borderWidth: 7,
    borderColor: '#A3A3A3',
    elevation: 3,
    backgroundColor: white,
  },
  // Style for the Video component
  video: {
    width: '100%',
    aspectRatio: 1 / 1,
    borderRadius: 10,
  },
  customButton: {
    backgroundColor: purple,
    borderRadius: 10,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    elevation: 5,
  },
  customButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoModalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: purple,
    alignSelf: 'center'
  },
  })

  