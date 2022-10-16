import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import ProfileScreen from './ProfileScreen.js';
import Dashboard from './Dashboard';
import LearnFlatList from './LearnFlatList';
import Settings from './Settings';
import Chatting from './Chatting';
import SettingsScreen from './SettingsScreen';
import NewPage from './NewPage';
import audio from './audio';
import voiceChat from './voiceChat';

const Stack = createNativeStackNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome' }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="LearnFlatList" component={LearnFlatList} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Chatting" component={Chatting} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="NewPage" component={NewPage} />
        <Stack.Screen name="audio" component={audio} />
        <Stack.Screen name="voiceChat" component={voiceChat} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
