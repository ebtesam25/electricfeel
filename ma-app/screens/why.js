import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import HouseList from "../components/houseList";
import { TextInput } from 'react-native-gesture-handler';
import Graph from '../components/graph';

let customFonts  = {
  'FuturaH': require('../assets/fonts/futurah.ttf'),
  'FuturaL': require('../assets/fonts/futural.ttf'),
};
const chartConfig={
  backgroundColor: "#fff",
  backgroundGradientFrom: "#fff",
      backgroundGradientTo: "#fff",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16
  },
  propsForDots: {
    r: "6",
   
  }
}
const data = {
  
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(16, 33, 125, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ],
};
export default class Why extends React.Component  {
  state = {
    fontsLoaded: false,
    playing: false,
    name: null,
    house: null,
    address: null,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }


  componentDidMount() {
    this._loadFontsAsync();



  }

 

  


  render(){
    if (this.state.fontsLoaded) {
    return (
    <View style={styles.container}>

     
   
          <View>
            <Text style={{position:'relative',fontSize:30,marginTop:'10%',color:'#364f6b', fontFamily:'FuturaH', width:'95%', marginLeft:'5%'}}>Health Monitor</Text>
            <View style={{height:'90%', marginTop:'2.5%'}}>
            <ScrollView>
            <View style={{backgroundColor:'#FFF', elevation:1, width:'90%', height:200, alignSelf:'center', borderRadius:20, padding:'5%', marginBottom:'5%'}}>
        <View style={{textAlign:'center'}}>  
        <Text style={styles.name}>Pulse</Text>
       
           
            <LineChart
              data={data}
              width={320}
              height={120}
              verticalLabelRotation={30}
              chartConfig={chartConfig}
              bezier
            />
                    
        </View> 
    </View>


    <View style={{backgroundColor:'#FFF', elevation:1, width:'90%', height:200, alignSelf:'center', borderRadius:20, padding:'5%', marginBottom:'5%'}}>
        <View style={{textAlign:'center'}}>  
        <Text style={styles.name}>Body Temperature</Text>
       
          
            <LineChart
              data={data}
              width={320}
              height={120}
              verticalLabelRotation={30}
              chartConfig={chartConfig}
              bezier
            />
                    
        </View> 
    </View>


    <View style={{backgroundColor:'#FFF', elevation:1, width:'90%', height:200, alignSelf:'center', borderRadius:20, padding:'5%', marginBottom:'5%'}}>
        <View style={{textAlign:'center'}}>  
        <Text style={styles.name}>Oxygen Saturation</Text>
       
            <LineChart
              data={data}
              width={320}
              height={120}
              verticalLabelRotation={30}
              chartConfig={chartConfig}
              bezier
            />
                    
        </View> 
    </View>


    <View style={{backgroundColor:'#FFF', elevation:1, width:'90%', height:200, alignSelf:'center', borderRadius:20, padding:'5%', marginBottom:'5%'}}>
        <View style={{textAlign:'center'}}>  
        <Text style={styles.name}>Daily Step Count</Text>
       
          
            <LineChart
              data={data}
              width={320}
              height={120}
              verticalLabelRotation={30}
              chartConfig={chartConfig}
              bezier
            />
                    
        </View> 
    </View>


    <View style={{backgroundColor:'#FFF', elevation:1, width:'90%', height:200, alignSelf:'center', borderRadius:20, padding:'5%', marginBottom:'5%'}}>
        <View style={{textAlign:'center'}}>  
        <Text style={styles.name}>Stress Levels</Text>
       
            <Text style={styles.description}>
               Stressed
            </Text>
            <LineChart
              data={data}
              width={320}
              height={120}
              verticalLabelRotation={30}
              chartConfig={chartConfig}
              bezier
            />
                    
        </View> 
    </View>
            </ScrollView></View>
          </View>

          <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#FFF', fontFamily:'FuturaH', marginTop:'2.5%', backgroundColor:'#00487C', padding:'5%', width:'70%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.props.navigation.navigate('Home')}>BACK</Text>
    
 
      
      
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
  description: {
    fontSize: 18,
    fontFamily:'FuturaL',
    color:'#00487C',
    marginBottom:'2.5%',
},
  name: {
    fontSize: 20,
    color: '#000',
    fontFamily:'FuturaH',
    textAlignVertical:'center',
    marginBottom:'2.5%',
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