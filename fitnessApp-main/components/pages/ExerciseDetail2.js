import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView, Dimensions } from 'react-native'
import WebView from 'react-native-webview';
import React, { useEffect, useState } from 'react'
import BtnMenu from '../others/BtnMenu'
import Background from '../others/Background2'
import { purple, white } from '../others/Constants'
import Video from 'react-native-video';
import MenuModal from '../others/MenuModal';
import InfoModal from '../modals/InfoModal';
import style from '../others/style2';
import FastImage from 'react-native-fast-image'

export default function ExerciseDetail(props) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [pathUrl, setPathUrl] = useState("../Videos/BenchPress.mp4");

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleInfoModal = () => {
    setInfoModalVisible(!infoModalVisible);
  };
  
  const exercise = props.route.params.exercise;
  // const fileName = props.route.params.fileName;
    
    
///////////////////////////////////////////////////

// dumbbellExercisesMen (beginner)
 const GobletSquats= "../Videos/dumbbellExercisesMen/GobletSquats.mp4";
 const DumbbellBenchPress = "../Videos/dumbbellExercisesMen/DumbbellBenchPress.mp4";
 const DumbbellBentOverRows = "../Videos/dumbbellExercisesMen/DumbbellBentOverRows.mp4";
 const DumbbellLunges = "../Videos/dumbbellExercisesMen/DumbbellLunges.mp4";
 const DumbbellShoulderPress = "../Videos/dumbbellExercisesMen/DumbbellShoulderPress.mp4";
 const DumbbellRomanianDeadlifts = "../Videos/dumbbellExercisesMen/DumbbellRomanianDeadlifts.mp4";
 const DumbbellBicepCurls = "../Videos/dumbbellExercisesMen/DumbbellBicepCurls.mp4";
 const TricepDipswithDumbbells = "../Videos/dumbbellExercisesMen/TricepDipswithDumbbells.mp4";
 const DumbbellRussianTwists = "../Videos/dumbbellExercisesMen/DumbbellRussianTwists.mp4";
 const DumbbellPlankRows = "../Videos/dumbbellExercisesMen/DumbbellPlankRows.mp4";

 // dumbbellExercisesMen (intermediate)
const DumbbellFrontSquats = "../Videos/dumbbellExercisesMen/DumbbellFrontSquats.mp4";
const DumbbellRenegadeRows = "../Videos/dumbbellExercisesMen/DumbbellRenegadeRows.mp4";
const DumbbellPushPress = "../Videos/dumbbellExercisesMen/DumbbellPushPress.mp4";
const DumbbellBulgarianSplitSquats = "../Videos/dumbbellExercisesMen/DumbbellBulgarianSplitSquats.mp4";
const DumbbellHammerCurls = "../Videos/dumbbellExercisesMen/DumbbellHammerCurls.mp4";
const DumbbellSkullCrushers = "../Videos/dumbbellExercisesMen/DumbbellSkullCrushers.mp4";
const DumbbellFarmersWalk = "../Videos/dumbbellExercisesMen/DumbbellFarmersWalk.mp4";

// dumbbellExercisesMen (advanced)
const DumbbellThrusters = "../Videos/dumbbellExercisesMen/DumbbellThrusters.mp4";
const DumbbellCleanandPress = "../Videos/dumbbellExercisesMen/DumbbellCleanandPress.mp4";
const DumbbellRomanianDeadliftswithSingleLegBalance = "../Videos/dumbbellExercisesMen/DumbbellRomanianDeadliftswithSingleLegBalance.mp4";


////////////////////////

//  gymExercisesMen (beginner)
const BarbellSquats = "../Videos/gymExercisesMen/BarbellSquats.mp4";
const LatPulldowns = "../Videos/gymExercisesMen/LatPulldowns.mp4";
const SeatedLegPress = "../Videos/gymExercisesMen/SeatedLegPress.mp4";
const DumbbellRows = "../Videos/gymExercisesMen/DumbbellRows.mp4";
const MachineChestFlyes = "../Videos/gymExercisesMen/MachineChestFlyes.mp4";
const CableFacePulls = "../Videos/gymExercisesMen/CableFacePulls.mp4";
const LegExtensions = "../Videos/gymExercisesMen/LegExtensions.mp4";
const Plank = "../Videos/gymExercisesMen/Plank.mp4";

// gymExercisesMen (intermediate)
const BarbellBackSquats = "../Videos/gymExercisesMen/BarbellBackSquats.mp4";
const AssistedPullUps = "../Videos/gymExercisesMen/AssistedPullUps.mp4";
const BarbellBenchPress = "../Videos/gymExercisesMen/BarbellBenchPress.mp4";
const BarbellRows = "../Videos/gymExercisesMen/BarbellRows.mp4";
const Deadlifts = "../Videos/gymExercisesMen/Deadlifts.mp4";
const InclineDumbbellPress = "../Videos/gymExercisesMen/InclineDumbbellPress.mp4";
const BarbellBentOverRows = "../Videos/gymExercisesMen/BarbellBentOverRows.mp4";
const LegPress = "../Videos/gymExercisesMen/LegPress.mp4";
const HangingLegRaises = "../Videos/gymExercisesMen/HangingLegRaises.mp4";

// gymExercisesMen (advanced)
const WeightedPullUps = "../Videos/gymExercisesMen/WeightedPullUps.mp4";
const BarbellLunges = "../Videos/gymExercisesMen/BarbellLunges.mp4";
const WeightedHangingLegRaises = "../Videos/gymExercisesMen/WeightedHangingLegRaises.mp4";

///////////////////////

//  noEquipmentExercisesMen (beginner)
const PushUps = "../Videos/noEquipmentExercisesMen/PushUps.mp4";
const BodyweightSquats = "../Videos/noEquipmentExercisesMen/BodyweightSquats.mp4";
const Lunges = "../Videos/noEquipmentExercisesMen/Lunges.mp4";
const MountainClimbers = "../Videos/noEquipmentExercisesMen/MountainClimbers.mp4";
const GluteBridges = "../Videos/noEquipmentExercisesMen/GluteBridges.mp4";
const TricepDips = "../Videos/noEquipmentExercisesMen/TricepDips.mp4";
const Supermans = "../Videos/noEquipmentExercisesMen/Supermans.mp4";
const HighKnees = "../Videos/noEquipmentExercisesMen/HighKnees.mp4";
const SidePlanks = "../Videos/noEquipmentExercisesMen/SidePlanks.mp4";

// noEquipmentExercisesMen (intermediate)
const WidePushUps = "../Videos/noEquipmentExercisesMen/WidePushUps.mp4";
const PistolSquats = "../Videos/noEquipmentExercisesMen/PistolSquats.mp4";
const PlankWithShoulderTaps = "../Videos/noEquipmentExercisesMen/PlankWithShoulderTaps.mp4";
const JumpingLunges = "../Videos/noEquipmentExercisesMen/JumpingLunges.mp4";
const DiamondPushUps = "../Videos/noEquipmentExercisesMen/DiamondPushUps.mp4";
const HinduPushUps = "../Videos/noEquipmentExercisesMen/HinduPushUps.mp4";
const BodyweightRows = "../Videos/noEquipmentExercisesMen/BodyweightRows.mp4";
const BicycleCrunches = "../Videos/noEquipmentExercisesMen/BicycleCrunches.mp4";
const Burpees = "../Videos/noEquipmentExercisesMen/Burpees.mp4";
const SidePlankWithLegLift = "../Videos/noEquipmentExercisesMen/SidePlankWithLegLift.mp4";

// noEquipmentExercisesMen (advanced)
const OneArmPushUps = "../Videos/noEquipmentExercisesMen/OneArmPushUps.mp4";
const PlyometricSquats = "../Videos/noEquipmentExercisesMen/PlyometricSquats.mp4";
const HandstandPikePushUps = "../Videos/noEquipmentExercisesMen/HandstandPikePushUps.mp4";
const PlyometricLunges = "../Videos/noEquipmentExercisesMen/PlyometricLunges.mp4";
const ClappingPushUps = "../Videos/noEquipmentExercisesMen/ClappingPushUps.mp4";
const MuscleUpsPullUps = "../Videos/noEquipmentExercisesMen/PullUps.mp4";
const DragonFlags = "../Videos/noEquipmentExercisesMen/DragonFlags.mp4";
const LSitHangingLegRaises = "../Videos/noEquipmentExercisesMen/LSitHangingLegRaises.mp4";
const ExplosiveBurpees = "../Videos/noEquipmentExercisesMen/Burpees.mp4";
const PlankArmLegLift = "../Videos/noEquipmentExercisesMen/PlankArmLegLift.mp4";


 
///////////////////////////////////////////////////


let videoUri;

switch (pathUrl) {
  // Beginner dumbbell
  case "GobletSquats":            videoUri = require(GobletSquats); break;
  case "DumbbellBenchPress":      videoUri = require(DumbbellBenchPress); break;
  case "BentOverRows":            videoUri = require(DumbbellBentOverRows); break;
  case "DumbbellLunges":          videoUri = require(DumbbellLunges); break;
  case "DumbbellShoulderPress":   videoUri = require(DumbbellShoulderPress); break;
  case "DumbbellRomanianDeadlifts":videoUri = require(DumbbellRomanianDeadlifts); break;
  case "DumbbellBicepCurls":      videoUri = require(DumbbellBicepCurls); break;
  case "TricepDipswithDumbbells": videoUri = require(TricepDipswithDumbbells); break;
  case "DumbbellRussianTwists":   videoUri = require(DumbbellRussianTwists); break;
  case "DumbbellPlankRows":       videoUri = require(DumbbellPlankRows); break;
  
  // Intermediate dumbbell
  case "DumbbellFrontSquats":   videoUri = require(DumbbellFrontSquats); break;
  case "DumbbellRenegadeRows":  videoUri = require(DumbbellRenegadeRows); break;
  case "DumbbellPushPress":     videoUri = require(DumbbellPushPress); break;
  case "DumbbellBulgarianSplitSquats": videoUri = require(DumbbellBulgarianSplitSquats); break;
  case "DumbbellHammerCurls":   videoUri = require(DumbbellHammerCurls); break;
  case "DumbbellSkullCrushers": videoUri = require(DumbbellSkullCrushers); break;
  case "DumbbellFarmersWalk":   videoUri = require(DumbbellFarmersWalk); break;
    
  // Advanced dumbbell
  case "DumbbellThrusters":     videoUri = require(DumbbellThrusters); break;
  case "DumbbellCleanandPress": videoUri = require(DumbbellCleanandPress); break;
  case "DumbbellRomanianDeadliftswithSingleLegBalance": videoUri = require(DumbbellRomanianDeadliftswithSingleLegBalance); break;
  
  // Beginner gym
  case "BarbellSquats":     videoUri = require(BarbellSquats); break;
  case "LatPulldowns":      videoUri = require(LatPulldowns); break;
  case "SeatedLegPress":    videoUri = require(SeatedLegPress); break;
  case "DumbbellRows":      videoUri = require(DumbbellRows); break;
  case "MachineChestFlyes": videoUri = require(MachineChestFlyes); break;
  case "CableFacePulls":    videoUri = require(CableFacePulls); break;
  case "LegExtensions":     videoUri = require(LegExtensions); break;
  case "Plank":             videoUri = require(Plank); break;
  
  // Intermediate gym
  case "BarbellBackSquats":   videoUri = require(BarbellBackSquats); break;
  case "AssistedPullUps":     videoUri = require(AssistedPullUps); break;
  case "BarbellBenchPress":   videoUri = require(BarbellBenchPress); break;
  case "Deadlifts":           videoUri = require(Deadlifts); break;
  case "InclineDumbbellPress":videoUri = require(InclineDumbbellPress); break;
  case "BarbellBentOverRows": videoUri = require(BarbellBentOverRows); break;
  case "LegPress":            videoUri = require(LegPress); break;
  case "HangingLegRaises":    videoUri = require(HangingLegRaises); break;
  
  // Advanced gym
  case "BarbellSquats":       videoUri = require(BarbellSquats); break;
  case "WeightedPullUps":     videoUri = require(WeightedPullUps); break;
  case "BarbellBenchPress":   videoUri = require(BarbellBenchPress); break;
  case "Deadlifts":           videoUri = require(Deadlifts); break;
  case "BarbellRows":         videoUri = require(BarbellRows); break;
  case "InclineDumbbellPress":videoUri = require(InclineDumbbellPress); break;
  case "BarbellBentOverRows": videoUri = require(BarbellBentOverRows); break;
  case "BarbellLunges":       videoUri = require(BarbellLunges); break;
  case "WeightedHangingLegRaises": videoUri = require(WeightedHangingLegRaises); break;
  
  // Beginner noEquipments
  case "PushUps":           videoUri = require(PushUps); break;
  case "BodyweightSquats":  videoUri = require(BodyweightSquats); break;
  case "Lunges":            videoUri = require(Lunges); break;
  case "MountainClimbers":  videoUri = require(MountainClimbers); break;
  case "GluteBridges":      videoUri = require(GluteBridges); break;
  case "TricepDips":        videoUri = require(TricepDips); break;
  case "Supermans":         videoUri = require(Supermans); break;
  case "HighKnees":         videoUri = require(HighKnees); break;
  case "SidePlanks":        videoUri = require(SidePlanks); break;

  // Intermediate noEquipments
  case "WidePushUps":           videoUri = require(WidePushUps); break;
  case "PistolSquats":          videoUri = require(PistolSquats); break;
  case "PlankWithShoulderTaps": videoUri = require(PlankWithShoulderTaps); break;
  case "JumpingLunges":         videoUri = require(JumpingLunges); break;
  case "DiamondPushUps":        videoUri = require(DiamondPushUps); break;
  case "HinduPushUps":          videoUri = require(HinduPushUps); break;
  case "BodyweightRows":        videoUri = require(BodyweightRows); break;
  case "BicycleCrunches":       videoUri = require(BicycleCrunches); break;
  case "Burpees":               videoUri = require(Burpees); break;
  case "SidePlankWithLegLift":  videoUri = require(SidePlankWithLegLift); break;
  
  // Advanced noEquipments
  case "OneArmPushUps":       videoUri = require(OneArmPushUps); break;
  case "PlyometricSquats":    videoUri = require(PlyometricSquats); break;
  case "HandstandPikePushUps":videoUri = require(HandstandPikePushUps); break;
  case "PlyometricLunges":    videoUri = require(PlyometricLunges); break;
  case "ClappingPushUps":     videoUri = require(ClappingPushUps); break;
  case "MuscleUpsPullUps":    videoUri = require(MuscleUpsPullUps); break;
  case "DragonFlags":         videoUri = require(DragonFlags); break;
  case "LSitHangingLegRaises":videoUri = require(LSitHangingLegRaises); break;
  case "ExplosiveBurpees":    videoUri = require(ExplosiveBurpees); break;
  case "PlankArmLegLift":     videoUri = require(PlankArmLegLift); break;
  
  default: videoUri = require("../Videos/BenchPress.mp4"); break;
}

// let videoUri2 = require("https://media.giphy.com/media/xEp029Ei6kGLbcNKc0/giphy.gif");

/////////////////////////////////////////////////////

    useEffect(() => {
      setPathUrl(exercise.path);
      // const videoUri = require(pathUrl);
    }, [exercise.path]);

    // let videoUri = require(pathUrl);

  return (
    <Background>
      <View style={style.screenStyle2}>
        <TouchableOpacity style={style.menuButton} onPress={toggleMenu}>
          <Text style={style.menuButtonText}>III</Text>
        </TouchableOpacity>
        {/* <ScrollView style={{ height: Dimensions.get('window').height * 0.85, 
                    marginBottom: 10, }}
                    showsVerticalScrollIndicator={false} > */}
          <ScrollView style={style.scrollStyle}
                    showsVerticalScrollIndicator={false} >
          <Text style={style.subTitle}>
              {exercise.name}
          </Text>
          <View style={style.videoContainer}>
            <Video
                // source={link2}
                source={videoUri}
                paused={false} // make it start
                repeat={true} // make it a loop
                style={style.video}
                resizeMode= "contain"
            />
            {/* <FastImage
                source={{
                  uri: 'https://media.tenor.com/gVr4zPBbt_wAAAAd/barbellsquats.gif',
                  priority: FastImage.priority.normal,
                }}
                style={{ width: 280, height: 280 }}
                resizeMode={FastImage.resizeMode.contain}
            /> */}
          </View>
          <Text style={style.infoModalTitle}>
              Instruction : {exercise.reps}
          </Text>
          <TouchableOpacity
            style={style.customButton}
            onPress={toggleInfoModal}
          >
            <Text style={style.customButtonText}>View Steps</Text>
          </TouchableOpacity>
          <View style={{ marginBottom: 60 }}></View>
        </ScrollView>


      </View>

        {/* Info Modal */}
        <InfoModal isVisible={infoModalVisible}
          toggleInfoModal={toggleInfoModal}
          exercise={exercise}
        />

      <MenuModal isVisible={menuVisible} toggleMenu={toggleMenu} navigation={props.navigation} />
    </Background>
  )
}

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  infoModal: {
    position: 'absolute',
    bottom: 80,
    padding: 30,
    borderRadius: 10,
    backgroundColor: 'white',
    width: '80%',
    height: '65%',
    alignSelf: 'center', 
    elevation: 20, // Add a shadow
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
    padding: 5
  },
});