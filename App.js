import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold, Rajdhani_600SemiBold } from '@expo-google-fonts/rajdhani';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'react-native';
import { SignIn } from './src/screens/SignIn';
import { Languages } from './src/screens/Languages';
import { theme } from './src/global/styles/theme';

export default function App() {

  const Stack = createNativeStackNavigator();

  const MyTheme = {
    dark: false,
    colors: {
      background: theme.colors.background
    }
  };

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
    Rajdhani_600SemiBold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Stack.Navigator screenOptions={{ headerShown: false, backgroundColor: theme.colors.background }}>
        <Stack.Screen name="Languages" component={Languages}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

