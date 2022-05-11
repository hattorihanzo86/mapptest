import React, { useRef,useState,useCallback,useEffect } from 'react'
import MapView from 'react-native-maps';
import { StyleSheet, Text, Image, View, Dimensions,TouchableOpacity,Appearance } from 'react-native';
import { TextInput } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Marker } from "react-native-maps";
const region = {
  latitude: 37.321996988,
  longitude: -122.0325472123455,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
}

const datasource = [
  {id: 1, name: 'Nezuko'},
  {id: 2, name: 'Tanjiro'},
  {id: 3, name: 'Enosuke'},
  {id: 4, name: 'Zenetsu'},
  {id: 5, name: 'Itachi'},
  {id: 6, name: 'Naruto'},
  {id: 7, name: 'Sasuke'},
  {id: 8, name: 'Kakashi'},
  {id: 9, name: 'Jiraiya'},
  {id: 10, name: 'Minato'},
];
const WrenchScreen = ({darkModeStatus}) => {

  const [darkMode,setDarkMode] = useState('');
  const [serverData, setServerData] = useState([]);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('darktheme', value)
      console.log('async status ' + value)
    } catch (e) {
      // saving error
    }
  }


   
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('darktheme')
      if(value !== null) {
       console.log("Dark theme Triggered :" + value)
       setDarkMode(value)
      }
    } catch(e) {
      // error reading value
    }
  }

  useEffect(() => {
    getData();
 
  }, []);




  const toggleTheme = () => {
    setDarkMode(!darkMode)
    storeData(''+!darkMode)
    darkModeStatus =!darkMode;
    console.log("Data : " + ''+!darkMode)
    
  }

  


  return (

    <View style={styles.container}>
        <MapView 
          region={region}
          userInterfaceStyle={darkMode== true? 'dark':'light'}
          showsIndoors={true}
          showsMyLocationButton={true}
          zoomControlEnabled={true}
          zoomEnabled={true}
          zoomTapEnabled={true}
          showsScale={true}
          showsCompass={true}
        style={styles.map} >

        <Marker
            coordinate={{latitude: 37.321996988,longitude:-122.0325472123455}}
            image={{ uri:'https://www.freeiconspng.com/uploads/pink-restaurants-icon-19.png'}} 
            style={{ width: 5, height: 5 }}
          >
          </Marker>

          <Marker
            coordinate={{latitude: 37.321996988,longitude:-122.0325472123455}}
            image={{ uri:'https://www.freeiconspng.com/uploads/pink-restaurants-icon-19.png'}} 
            style={{ width: 5, height: 5 }}
          >
          </Marker>

          <Marker   
            coordinate={{latitude:   37.35365726298215,longitude:-122.03488316016957}}
            image={{ uri:'https://www.freeiconspng.com/uploads/shopkins-donut-png-3.png'}} 
            style={{ width: 5, height: 5 }}
          >
          </Marker>

          <Marker   
            coordinate={{latitude:37.33480586052936,longitude: -122.00898090890367}}
            image={{ uri:'https://www.freeiconspng.com/uploads/two-storied-house-icon--large-business-iconset--aha-soft-14.png'}} 
            style={{ width: 5, height: 5 }}
          >
          </Marker>


          <Marker  
            coordinate={{latitude:37.36038886064046,longitude:  -122.0681487466763}}
            image={{ uri:'https://www.freeiconspng.com/uploads/two-storied-house-icon--large-business-iconset--aha-soft-14.png'}} 
            style={{ width: 5, height: 5 }}
          >
          </Marker>

        </MapView>
        <View style={darkMode ==true ? styles.overlay_dark  : styles.overlay}>
          <View style={{flexDirection:'row'}}>
            <Image source={require('../../assets/icons/search.png')} 
            style={{width:24,height:24,margin:15}}
            />

          <SearchableDropdown
          onTextChange={(text) => console.log(text)}
          onItemSelect={(datasource) => alert(JSON.stringify(datasource))}
          containerStyle={{padding: 5,width:300}}
          textInputStyle={{
            padding: 12,
            backgroundColor: darkMode ==true ? 'black':'white',
            borderRadius:5,
          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: darkMode ==true ? 'black':'white',
            borderColor: '#bbb',
            borderWidth: 1,
         
   
          }}
          itemTextStyle={{
            color: darkMode == true? 'white':'black',
          }}
          itemsContainerStyle={{
            maxHeight: '100%',
            position:'relative',
            borderRadius:10,
          }}
          items={datasource}
          defaultIndex={2}
          placeholder="Search Here"
          resPtValue={false}
          underlineColorAndroid="transparent"
        />

    
          
      

          </View>
        </View>

        <View style={darkMode== true? styles.cards_overlay_dark : styles.cards_overlay}>
        <View style={{flexDirection:'row'}}>
        <Image 
          source={{uri:'https://lh5.googleusercontent.com/p/AF1QipMUj3Ts9UxyKGgeBY_hMFc5p0ekdpiEox7Zpxba=w408-h305-k-no'}}  
          style=
          {{height:100,width:120,borderRadius:10,margin:10}}
          />
          <View style={{alignContent:'center'}} >
          <Text style={{margin:10,fontSize:24,marginTop:35,color: darkMode == true? 'white':'black',}}>Lokai Hamburk</Text> 
         <Text style={{margin:10,fontSize:16,marginTop:-5,color: darkMode == true? 'white':'black',}}>Pub in praque</Text> 
          </View>
        
        </View>
        </View>


        <View style={styles.cards_overlay_button_container}>
          <TouchableOpacity onPress={()=> toggleTheme()  }>
          <View style={{backgroundColor:darkMode== true? 'black' : 'white',borderRadius:50,width:50,height:50, alignItems:'center'}}>
               <FontAwesome5
                name="link"
                size={18}
                color={darkMode == true? 'white' : 'black'
              }
                style={{marginTop:15}}
              ></FontAwesome5>
          </View>  
          </TouchableOpacity>
          <View style={{margin:5}}></View>
          <TouchableOpacity>
          <View style={{backgroundColor:darkMode == true? 'black' : 'white',borderRadius:50,width:50,height:50,alignItems:'center'}}>
          <FontAwesome5
                name="location-arrow"
                size={18}
                color={darkMode== true? 'white' : 'black'
              }
                style={{marginTop:15}}
              ></FontAwesome5>
          </View>
     
          </TouchableOpacity>


        </View>

      

    </View>

  )
}

export default WrenchScreen

const styles = StyleSheet.create({

container:{
  flex: 1,
  alignItems: 'center',
},

map: {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
},
overlay: {
  position: 'absolute',
  top:60,
  width:380,
  height:52,
  borderRadius:15,
  backgroundColor:'white',
  shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 5,
    shadowOpacity: .5
},

overlay_dark: {
  position: 'absolute',
  top:60,
  width:380,
  height:52,
  borderRadius:15,
  backgroundColor:'black',
  shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 5,
    shadowOpacity: .5
},



cards_overlay_button_container:{

  borderRadius:15,
  position: 'absolute',
  overflow:'hidden',
  height:120,
  width:'auto',
  top:150,
  right: 20,


},
cards_overlay: {
  backgroundColor:'white',
  borderRadius:15,
  position: 'absolute',
  overflow:'hidden',
  height:120,
  width:380,
  bottom:150

},
cards_overlay_dark: {
  backgroundColor:'black',
  borderRadius:15,
  position: 'absolute',
  overflow:'hidden',
  height:120,
  width:380,
  bottom:150

},

textbox : {
  width: '80%',
  height : 35,
  marginTop:-5,
  backgroundColor:'transparent',
  fontSize:16,
  overflow:'hidden',
  color:'black',


},

textbox_dark : {
  width: '80%',
  height : 35,
  marginTop:-5,
  backgroundColor:'transparent',
  fontSize:16,
  overflow:'hidden',
  color:'white',

 
},

titleText: {
  padding: 8,
  fontSize: 16,
  textAlign: 'center',
  fontWeight: 'bold',
},
headingText: {
  padding: 8,
},

})