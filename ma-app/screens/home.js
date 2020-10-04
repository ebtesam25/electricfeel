import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Avatar from '../assets/avatar.jpg';
import HouseList from "../components/houseList";

let customFonts  = {
  'FuturaH': require('../assets/fonts/futurah.ttf'),
  'FuturaL': require('../assets/fonts/futural.ttf'),
};

export default class Home extends React.Component  {
  state = {
    fontsLoaded: false,
    playing: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();



  }

 

  
  getData() {
    return  [
    {
      
    name:"Jane Doe",
    house:Avatar, 
    address:"Lorel ipsum",
  },
  {
    
    name:"Jane Doe",
    house:Avatar,
    address:"Lorel ipsum",
  },
  {
    name:"Jane Doe",
    house:Avatar,
    address:"Lorel ipsum",
  },
  {
    name:"Jane Doe",
    house:Avatar,
    address:"Lorel ipsum",
  },
  ]
  }

  render(){
    if (this.state.fontsLoaded) {
    return (
    <View style={styles.container}>
   
      <View style={styles.playing}>
     
   
          <View>
            <Text style={{position:'relative',fontSize:20,marginTop:'10%',textAlign:'center', color:'#364f6b', fontFamily:'FuturaH', width:'70%',alignSelf:'center'}}>MIT Medical</Text>
            <Image source={require('../assets/solution.png')} style={styles.house}></Image>
            <Text style={{position:'relative',fontSize:35,marginTop:'5%',textAlign:'center', color:'#364f6b', fontFamily:'FuturaH'}} onPress={()=>this.props.navigation.navigate('Why')}>Dr. John Doe</Text>
          
          </View>
    
      </View>
      <Text style={{position:'relative',fontSize:20,marginTop:'10%',marginLeft:'5%', textAlign:'left', color:'#364f6b', fontFamily:'FuturaH'}}>Your Patients</Text>
    
      <ScrollView style={styles.scrollcontainer}>
      <HouseList itemList={this.getData()}/>
      </ScrollView>
      
      
    </View>
    );
    }
    else {
    return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    position:'relative',
    backgroundColor:'#f5f5f5'
  },
  left:{
    height:'7%',
    width:'7%',
    top:'2.5%',
    resizeMode:'contain',
    left:'5%',
    position:'absolute',
  },
  right:{
    height:'7%',
    width:'7%',
    top:'2.5%',
    resizeMode:'contain',
    right:'5%',
    position:'absolute'
  },
  middle:{
    height:'60%',
    width:'60%',
    marginTop:'5%',
    resizeMode:'contain',
    zIndex:3,
    alignSelf:'center',
  },
  house:{
    height:'40%',
    width:'70%',
    marginTop:'7.5%',
    resizeMode:'contain',
    zIndex:3,
    alignSelf:'center',
    borderRadius:10,
  },
 
  playing:{
      width:'70%',
      height:'35%',
      elevation:1,
      backgroundColor:'#FFF',
      alignSelf:'center',
      marginTop:'15%',
      borderRadius:20
  }
  
});