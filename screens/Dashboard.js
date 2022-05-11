import { StyleSheet, View , Image} from 'react-native'
import React, { useRef,useState,useCallback,useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useFonts } from 'expo-font';
// Font Awesome Icons...
import { FontAwesome5 } from '@expo/vector-icons'

import ProfileIcon from '../assets/icons/account.png'
import TeamsIcon from '../assets/icons/teams.png'

import PlusIcon from '../assets/icons/plus_icon.png'
import CarRepairIcon from '../assets/icons/car_repair.png'
import MobileServiceIcon from '../assets/icons/mobile_service.png'
//Screens


import ProfileScreen from './tabscreens/ProfileScreen';
import WrenchScreen from './tabscreens/WrenchScreen';

import CarRepairScreen from './tabscreens/CarRepairScreen';
import MobileServiceScreen from './tabscreens/MobileServiceScreen';
import RoadSideScreen from './tabscreens/RoadSideScreen';




import { useColorScheme } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator()



const Dashboard = () => {

  const [isDark, setDark] = useState('')



  async function check() {

    try {
      const value = await AsyncStorage.getItem('darktheme')
      if(value !== null) {
       console.log("Dark theme Triggered :" + value)
       setDark(value)
      }
    } catch(e) {
      // error reading value
    }

    }
    useEffect(() => {
      check()
    }, []);
  
  
  setInterval(check, 300);
  return (

     <Tab.Navigator
     screenOptions={{
      tabBarLabel:'',
      headerShown:false,
      tabBarStyle: [{ 
        position:'absolute',
        elevation:5,
        backgroundColor: isDark == 'false' ? 'white' : 'black',
        borderRadius:2,
        height:75,
        width:'100%',
        shadowColor: '#000000',
        shadowOpacity:0.08,
        shadowOffset:{
              width:1,
              height:1
        },
      
      }]
     }}
     >
     <Tab.Screen name = "Mobile Service" component={MobileServiceScreen} 
     options={{
      tabBarIcon: ({focused}) => {
        return (
        <View style={styles.viewtab}>
       <FontAwesome5
                name="compass"
                size={24}
                color={focused ? 'red' : 'gray'}
        ></FontAwesome5>
       
        </View>
     
        )

      }
    
     }}
     />
     <Tab.Screen name = "Car Repairs" component={CarRepairScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
              <View style={styles.viewtab}>
                <FontAwesome5
                name="map"
                size={24}
                color={focused ? 'red' : 'gray'}
              ></FontAwesome5>
              </View>
           
              )
      
            }
          
           }}
     />
     
     <Tab.Screen name = "All Services" component={WrenchScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
             
                <View style={{
                  width:60,
                  height: 60,
                  backgroundColor: 'red',
                  borderRadius:50,
                  justifyContent:'center',
                  alignItems:'center',
                  marginTop:-5


                }}>
                <Image  source={PlusIcon } resizeMode="contain" style={{
                width:32,
                height:32,
                tintColor:'white',
              }} />
            
              </View>



            
           
              )
      
            }
          
           }}
     />
     <Tab.Screen name = "Roadside Assistance" component={RoadSideScreen}
     options={{
      tabBarIcon: ({focused}) => {
        return (
        <View style={styles.viewtab}>
          <FontAwesome5
                name="bell"
                size={24}
                color={focused ? 'red' : 'gray'}
              ></FontAwesome5>
        </View>
     
        )

      }
    
     }}
     />
     <Tab.Screen name = "Profile" component={ProfileScreen}
     options={{
      tabBarIcon: ({focused}) => {
        return (
        <View style={styles.viewtab}>
                <FontAwesome5
                name="user"
                size={24}
                color={focused ? 'red' : 'gray'}
              ></FontAwesome5>
        </View>
     
        )

      }
    
     }}
     />
     </Tab.Navigator>

  )
}

export default Dashboard

const styles = StyleSheet.create({

 container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 viewtab:{
   alignItems:'center',
   justifyContent:'center',
   top:10
 },
 h1:{
   fontSize:40
 }



})