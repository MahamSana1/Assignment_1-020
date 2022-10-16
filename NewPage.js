import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback
  } from 'react';
  
  import { View,Text } from 'react-native'
  import { GiftedChat } from 'react-native-gifted-chat'
import { TouchableOpacity } from 'react-native-web';
import audio from './audio';
  
  export default function Chat() {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
  setMessages([
  {
  _id: 1,
  text: "Hello Minahil",
  createdAt: new Date(),
  user: {
  _id: 2,
  name: "React Native",
  avatar: 'https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000',
  },
  },
  {
  _id:2,
  text:"Hello Taha",
  createdAt: new Date(),
  user: {
  _id:3,
  name: "Hello Maham",
  avatar: 'https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000',
  
  }
  },
  {
  _id:3,
  text:"Hellow Hammad",
  createdAt: new Date(),
  user: {
  _id:2,
  name: "Ifra",
  avatar: 'https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000',
  
  }
  },
  {
  _id:4,
  text:"Hello Adil",
  createdAt: new Date(),
  user: {
  _id:3,
  name: "Ifra",
  avatar: 'https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000',
  },
  image:"https://w0.peakpx.com/wallpaper/547/598/HD-wallpaper-astheic-butterfly-cute-pastel.jpg",
  sent:true,
  received:true,
  },
  {
  _id:5,
  text:"Hello",
  createdAt: new Date(),
  user: {
  _id:1,
  name: "Ifra",
  avatar: 'https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000',
  },
  image:"https://w0.peakpx.com/wallpaper/547/598/HD-wallpaper-astheic-butterfly-cute-pastel.jpg",
  sent:true,
  received:true,
  },
  ])
  }, [])
  
  const onSend = useCallback((messages = []) => {
  setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
  return (
  <View style={{flex:1, backgroundColor:"lightgrey"}}>
  <Text style={{paddingLeft:600,color:"white",fontFamily:"Times New Roman"}}>Welcome to chat screen</Text>
  {/*<TouchableOpacity style={{width:150, height:40, backgroundColor:'green', alignItems:'center',justifyContent:'center'}}
          onPress={()=>navigation.navigate('audio')}
        >
           <Text style={{color:'white', fontSize:20}}>Call</Text>
  </TouchableOpacity> */}

  <GiftedChat
  messages={messages}
  onSend={messages => onSend(messages)}
  user={{
  _id: 1,
  _id: 2,
  _id: 3,
  _id: 4,
  _id: 5

  
  
  }}
  
  />
  
  </View>
  
  
  
  )
  }
  