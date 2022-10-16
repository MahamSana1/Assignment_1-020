import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useEffect } from 'react';


const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

export default function LearnFlatList({navigation}) {

  const [fonts, setFonts] = useState(global.fs)
  const [color, setColor] = useState(global.bc)

  
  const [data, setData] = useState([
    {name:'Usmara',
    message:'Hello',
    path:'https://urstatusquotes.com/wp-content/uploads/2022/04/Stylish-Girls-Cap-Wearing-Dp-images-Girls-Cap-Profile-pictures-23.jpg',
    time:'10:59 AM'
    }, 
    {name:'Aifa',
    message:'Hello',
    path:'https://urstatusquotes.com/wp-content/uploads/2022/04/Stylish-Girls-Cap-Wearing-Dp-images-Girls-Cap-Profile-pictures-23.jpg',
    time:'11:02 AM'
    },{name:'Minahil',
    message:'Hello',
    path:'https://urstatusquotes.com/wp-content/uploads/2022/04/Stylish-Girls-Cap-Wearing-Dp-images-Girls-Cap-Profile-pictures-23.jpg',
    time:'10:59 AM'
    }, 
    {name:'Ifra',
    message:'Hello',
    path:'https://urstatusquotes.com/wp-content/uploads/2022/04/Stylish-Girls-Cap-Wearing-Dp-images-Girls-Cap-Profile-pictures-23.jpg',
    time:'11:02 AM'
    },{name:'Ayesha',
    message:'Hello',
    path:'https://urstatusquotes.com/wp-content/uploads/2022/04/Stylish-Girls-Cap-Wearing-Dp-images-Girls-Cap-Profile-pictures-23.jpg',
    time:'10:59 AM'
    }, 
    {name:'Mahnoor',
    message:'Hello',
    path:'https://urstatusquotes.com/wp-content/uploads/2022/04/Stylish-Girls-Cap-Wearing-Dp-images-Girls-Cap-Profile-pictures-23.jpg',
    time:'11:02 AM'
    }])
  
    


    useEffect(() => {
      console.log('navigation useEffect is =')
      const unsubscribe = navigation.addListener('focus', () => {
        // console.log('Called When you are back on LearnFlatList',route.params.ammar)
         setFonts(global.fs);
         setColor(global.bc);
         console.log(global.fs);
      });
      return unsubscribe;
    }, [navigation]);
    
  
return (
    <View style={{flex:1,}}>
      
     

      <View style={{flex:0.90, backgroundColor:'white'}}>

        {console.log(data)}
        
        <FlatList
            data={data}
            renderItem={
                ({item}) => (
                  <TouchableOpacity onPress={() =>
                    navigation.navigate('NewPage')}>
                <View style={{backgroundColor:color, marginBottom:20,flexDirection:'row', borderWidth: 1,
                borderColor: "thistle"}}>
                  <View style={{flexDirection:'row'}}>
                  <Image  
                    source={{uri: item.path}}
                    style={{width:40,height:40,alignItems: 'center',margin:5,borderRadius:50}}  
                    />
                    
                    </View>
                      <View>
                      <Text style={{fontSize:fonts, color:'Black',fontWeight:'bold'}}> {item.name}</Text>
                    <Text style={{fontSize:14, color:'black'}}>     {item.message}</Text>
                    </View>
                    <View>
                    <Text style={{fontSize:8, color:'black'}}>                                 {item.time}</Text>
                    </View>
                  
                   
                    
                   
                   
                </View>
                </TouchableOpacity>
                )
                }
            // keyExtractor={item=>item.key}
        />

     </View>

     

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