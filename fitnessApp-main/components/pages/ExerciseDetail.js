import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Background from '../others/Background2'
import { purple, white } from '../others/Constants'
import MenuModal from '../modals/MenuModal';
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


let pathUri;

switch (pathUrl) {
  // Beginner dumbbell
  case "GobletSquats":            
        pathUri = 'https://media.tenor.com/qFbKc6Uh8ewAAAAd/gobletsquats.gif'; break;
  case "DumbbellBenchPress":      
        pathUri = 'https://media.tenor.com/p_R7ZPIF2s8AAAAC/dumbbellbenchpress.gif'; break;
  case "BentOverRows":            
        pathUri = 'https://media.tenor.com/BUTY_prSQAoAAAAC/dumbbellrows.gif'; break;
  case "DumbbellLunges":          
        pathUri = 'https://media.tenor.com/8tiJ9jjB8U4AAAAd/dumbbelllunges.gif'; break;
  case "DumbbellShoulderPress":   
        pathUri = 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif'; break;
  case "DumbbellRomanianDeadlifts":
        pathUri = 'https://media.tenor.com/1S6xA-aeHiQAAAAC/dumbbellromaniandeadlifts.gif'; break;
  case "DumbbellBicepCurls":      
        pathUri = 'https://media.tenor.com/dQ0q45CW-twAAAAC/dumbbellbicepcurls.gif'; break;
  case "TricepDipswithDumbbells": 
        pathUri = 'https://media.tenor.com/B1KE8Bne6f4AAAAC/noequipmentexercisesmen-tricepdips.gif'; break;
  case "DumbbellRussianTwists":   
        pathUri = 'https://media.tenor.com/Fmh1xemYphAAAAAd/dumbbellrussiantwists.gif'; break;
  case "DumbbellPlankRows":       
        pathUri = 'https://www.inspireusafoundation.org/wp-content/uploads/2022/08/renegade-row.gif'; break;

  // Intermediate dumbbell
  case "DumbbellFrontSquats":   
        pathUri = 'https://media.tenor.com/7rVN5X68EMQAAAAC/dumbbellfrontsquats.gif'; break;
  case "DumbbellRenegadeRows":  
        pathUri = 'https://media.tenor.com/eSPsUGjc-h0AAAAd/dumbbellrenegaderows.gif'; break;
  case "DumbbellPushPress":       
        pathUri = 'https://media.tenor.com/LXB21EhZuZkAAAAC/dumbbellpushpress.gif'; break;
  case "DumbbellBulgarianSplitSquats": 
        pathUri = 'https://media.tenor.com/nBAROZqmTYMAAAAC/dumbbellbulgariansplitsquats.gif'; break;
  case "DumbbellHammerCurls":   
        pathUri = 'https://media.tenor.com/QsbI3bt31_4AAAAC/dumbbellhammercurls.gif'; break;
  case "DumbbellSkullCrushers": 
        pathUri = 'https://media.tenor.com/4hBiIf3Lr9wAAAAC/dumbbellskullcrushers.gif'; break;
  case "DumbbellFarmersWalk":   
        pathUri = 'https://media.tenor.com/OC3OCZAAZL4AAAAC/dumbbellfarmerswalk.gif'; break;

  // Advanced dumbbell
  case "DumbbellThrusters":     
        pathUri = 'https://media.tenor.com/i3i6sFchZ2AAAAAC/dumbbellthrusters.gif'; break;
  case "DumbbellCleanandPress": 
        pathUri = 'https://media.tenor.com/R7yoN5qL3QQAAAAC/dumbbellcleanandpress.gif'; break;
  case "DumbbellRomanianDeadliftswithSingleLegBalance": 
        pathUri = 'https://media.tenor.com/bTgzUy4xXDQAAAAC/dumbbellromaniandeadliftswithsinglelegbalance.gif'; break;

  // Beginner gym
  case "BarbellSquats":     
        pathUri = 'https://media.tenor.com/Re3T3B66V9UAAAAd/barbellsquats-gymexercisesmen.gif'; break;
  case "LatPulldowns":      
        pathUri = 'https://fitnessvolt.com/wp-content/uploads/2023/09/wide-grip-lat-pulldown.gif'; break;
  case "SeatedLegPress":    
        pathUri = 'https://www.inspireusafoundation.org/wp-content/uploads/2022/10/leg-press.gif'; break;
  case "DumbbellRows":      
        pathUri = 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Upright-Row.gif'; break;
  case "MachineChestFlyes": 
        pathUri = 'https://newlife.com.cy/wp-content/uploads/2019/11/22551301-Lever-Seated-Fly-female_Chest_360.gif'; break;
  case "CableFacePulls":    
        pathUri = 'https://i.pinimg.com/originals/bb/ad/ae/bbadae1b92108a8024ab8a709e711e14.gif'; break;
  case "LegExtensions":     
        pathUri = 'https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif'; break;
  case "Plank":             
        pathUri = 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a8048480486129.5ce2e67ba3247.gif'; break;

  // Intermediate gym
  case "BarbellBackSquats":   
        pathUri = 'https://media.tenor.com/3TLVyHMQKVoAAAAC/barbellbacksquats-gymexercisesmen.gif'; break;
  case "AssistedPullUps":     
        pathUri = 'https://media.tenor.com/P4VvJvjWYPMAAAAC/assistedpullups-gymexercisesmen.gif'; break;
  case "BarbellBenchPress":   
        pathUri = 'https://media.tenor.com/oaRRq3lgB-wAAAAd/barbellbenchpress-gymexercisesmen.gif'; break;
  case "Deadlifts":           
        pathUri = 'https://media.tenor.com/V3n5nfP10_QAAAAd/deadlifts-gymexercisesmen.gif'; break;
  case "InclineDumbbellPress":
        pathUri = 'https://media.tenor.com/aZA3ic0doecAAAAC/gymexercisesmen-inclinedumbbellpress.gif'; break;
  case "BarbellBentOverRows": 
        pathUri = 'https://media.tenor.com/xD4Lm41haCEAAAAC/barbellbentoverrows-gymexercisesmen.gif'; break;
  case "LegPress":            
        pathUri = 'https://media.tenor.com/wU4Q0HEV8YIAAAAd/gymexercisesmen-legpress.gif'; break;
  case "HangingLegRaises":    
        pathUri = 'https://media.tenor.com/kLC3ct0whf8AAAAC/gymexercisesmen-hanginglegraises.gif'; break;

  // Advanced gym
  case "WeightedPullUps":     
        pathUri = 'https://media.tenor.com/nEjPwsjdEMwAAAAd/archerpullups-gymexercisesmen.gif'; break;
  case "BarbellRows":         
        pathUri = 'https://media.tenor.com/z2db2cIRxXgAAAAC/barbellrows-gymexercisesmen.gif'; break;
  case "BarbellLunges":       
        pathUri = 'https://media.tenor.com/9ZSZ5WCZ-uQAAAAd/barbelllunges-gymexercisesmen.gif'; break;
  case "WeightedHangingLegRaises": 
        pathUri = 'https://media.tenor.com/YSCameXoya0AAAAC/weightedhanginglegraises-gymexercisesmen.gif'; break;

  // Beginner noEquipments
  case "PushUps":           
        pathUri = 'https://media.tenor.com/0xCguCJWdYMAAAAd/noequipmentexercisesmen-pushups.gif'; break;
  case "BodyweightSquats":  
        pathUri = 'https://media.tenor.com/5VAiLZhxaHYAAAAC/bodyweightsquats-noequipmentexercisesmen.gif'; break;
  case "Lunges":            
        pathUri = 'https://media.tenor.com/HATy7iboOZ4AAAAC/lunges-noequipmentexercisesmen.gif'; break;
  case "MountainClimbers":  
        pathUri = 'https://media.tenor.com/En3iqGhFVrUAAAAC/mountainclimbers-noequipmentexercisesmen.gif'; break;
  case "GluteBridges":      
        pathUri = 'https://media.tenor.com/jLvLvHZyIuwAAAAd/glutebridges-noequipmentexercisesmen.gif'; break;
  case "TricepDips":        
        pathUri = 'https://media.tenor.com/B1KE8Bne6f4AAAAC/noequipmentexercisesmen-tricepdips.gif'; break;
  case "Supermans":         
        pathUri = 'https://media.tenor.com/mju5ewyZa0UAAAAd/noequipmentexercisesmen-supermans.gif'; break;
  case "HighKnees":         
        pathUri = 'https://media.tenor.com/Tild4YQUweAAAAAC/highknees-noequipmentexercisesmen.gif'; break;
  case "SidePlanks":        
        pathUri = 'https://media.tenor.com/r9cqd_wnQmMAAAAC/noequipmentexercisesmen-sideplanks.gif'; break;

  // Intermediate noEquipments
  case "WidePushUps":           
        pathUri = 'https://media.tenor.com/BBfXKyT6XFwAAAAC/noequipmentexercisesmen-widepushups.gif'; break;
  case "PistolSquats":          
        pathUri = 'https://media.tenor.com/ENMApuzr7lEAAAAC/pistolsquats-noequipmentexercisesmen.gif'; break;
  case "PlankWithShoulderTaps": 
        pathUri = 'https://media.tenor.com/Fsu8BIKJWQQAAAAC/plankwithshouldertaps-noequipmentexercisesmen.gif'; break;
  case "JumpingLunges":         
        pathUri = 'https://media.tenor.com/3QhRBuBZhowAAAAC/jumpinglunges-noequipmentexercisesmen.gif'; break;
  case "DiamondPushUps":        
        pathUri = 'https://media.tenor.com/7JnImp72Jw0AAAAC/diamondpushups-noequipmentexercisesmen.gif'; break;
  case "HinduPushUps":          
        pathUri = 'https://media.tenor.com/0Qra-jBOI80AAAAC/hindupushups-noequipmentexercisesmen.gif'; break;
  case "BodyweightRows":        
        pathUri = 'https://media.tenor.com/EdRFzxcgAJAAAAAC/bodyweightrows-noequipmentexercisesmen.gif'; break;
  case "BicycleCrunches":       
        pathUri = 'https://media.tenor.com/Pvk6sdP9Q7gAAAAC/bicyclecrunches-noequipmentexercisesmen.gif'; break;
  case "Burpees":                
        pathUri = 'https://media.tenor.com/bx0KQ_SUtWMAAAAC/burpees-noequipmentexercisesmen.gif'; break;
  case "SidePlankWithLegLift":  
        pathUri = 'https://media.tenor.com/MnlsRsMm5OgAAAAC/noequipmentexercisesmen-sideplankwithleglift.gif'; break;

  // Advanced noEquipments
  case "OneArmPushUps":       
        pathUri = 'https://media.tenor.com/RPlAGEwiEAcAAAAd/onearmpushups-noequipmentexercisesmen.gif'; break;
  case "PlyometricSquats":    
        pathUri = 'https://media.tenor.com/ClEeYj2r8qkAAAAd/noequipmentexercisesmen-plyometricsquats.gif'; break;
  case "HandstandPikePushUps":
        pathUri = 'https://media.tenor.com/-n8ulyKB77MAAAAd/handstandpikepushups-noequipmentexercisesmen.gif'; break;
  case "PlyometricLunges":    
        pathUri = 'https://media.tenor.com/wLhkRvCnj38AAAAd/plyometriclunges-noequipmentexercisesmen.gif'; break;
  case "ClappingPushUps":     
        pathUri = 'https://media.tenor.com/55pfbJMCkKAAAAAC/clappingpushups-noequipmentexercisesmen.gif'; break;
  case "MuscleUpsPullUps":    
        pathUri = 'https://media.tenor.com/nEjPwsjdEMwAAAAd/archerpullups-gymexercisesmen.gif'; break;
  case "DragonFlags":         
        pathUri = 'https://www.oldschoollabs.com/wp-content/uploads/2021/02/40581301-Leg-Raise-Dragon-Flag_Waist_720.gif'; break;
  case "LSitHangingLegRaises":
        pathUri = 'https://media.tenor.com/E2m2qFASwisAAAAC/lsithanginglegraises-noequipmentexercisesmen.gif'; break;
  case "ExplosiveBurpees":    
        pathUri = 'https://media.tenor.com/bx0KQ_SUtWMAAAAC/burpees-noequipmentexercisesmen.gif'; break;
  case "PlankArmLegLift":     
        pathUri = 'https://media.tenor.com/tznEgror2VkAAAAC/plankarmleglift-noequipmentexercisesmen.gif'; break;

  default: pathUri = 'https://media.tenor.com/K37Z3kLOHlwAAAAC/benchpress-animated.gif'; break;
}


/////////////////////////////////////////////////////

    useEffect(() => {
      setPathUrl(exercise.path);
      
    }, [exercise.path]);

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
            <FastImage
                source={{
                  uri: pathUri,
                  priority: FastImage.priority.normal,
                }}
                style={style.video}
                resizeMode={FastImage.resizeMode.contain}
            />
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
