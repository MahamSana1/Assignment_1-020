import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, SectionList } from 'react-native';
import { useEffect } from 'react';
import { ScrollView } from 'react-native-web';
import SelectDropdown from 'react-native-select-dropdown'

export default function audio({navigation}) {

 useEffect(() => {

  // return(()=>{
  //   console.log('is this calling');
  // })

  return()=>{
    console.log('I am going Back from Setting Screen');
  }
 
},[]);

const fs = [20, 30,50,70]
const fc =['green','red','blue']
 const saveSettings=(a)=>{
    
    global.setting={
      fs: a,
      
      bc:'white'
    }
    // console.log('pressed')
    navigation.navigate('LearnFlatList')
 }
 const saveColor=(b)=>{
    
  global.setting={
    
    fc:b,
    bc:'white'
  }
  // console.log('pressed')
  navigation.navigate('LearnFlatList')
}

return (

      <View style={{flex:1, backgroundColor:'green'}}>
        <TouchableOpacity style={{width:100, height:60, backgroundColor:'grey'}}
        onPress={saveSettings}
        >
            <Text> I am testing </Text>
        </TouchableOpacity>
        <SelectDropdown
	data={fs}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index);
    saveSettings(selectedItem)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>
<SelectDropdown
	data={fc}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index);
    saveColor(selectedItem)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
