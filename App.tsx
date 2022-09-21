import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";

import SplashScreen from './screens/splashScreen/SplashScreen';
import Home from './screens/home/Home';
import { PokemonEntity } from './src/services/pokemons/types';

export type RootStackParamList = {
  Home: undefined;
  Detail: {
    pokemon: PokemonEntity
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App (){

  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,        
})

if (!fontsLoaded){
    return null
}

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
