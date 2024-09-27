import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import TesteConcluido from './screens/Teste';
import CidadeShow from './screens/Cidade';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
        title: 'HOME',
        headerStyle: {
            backgroundColor: "#2C3E50", 
            width: "100%", 
            padding: 20, 
        },
        headerTitleAlign: "center", 
        headerTintColor: "#ffffff", 
        headerTitleStyle: {
            alignItems: "center", 
            marginVertical: 20, 
        },
    }} />
        <Stack.Screen name="Segunda Tela" component={TesteConcluido} options={{
        title: 'Destinos',
        headerStyle: {
            backgroundColor: "#2C3E50", 
            width: "100%", 
            padding: 20, 
        },
        headerTitleAlign: "center", 
        headerTintColor: "#ffffff", 
        headerTitleStyle: {
            alignItems: "center", 
            marginVertical: 20, 
        },
    }}  />
        <Stack.Screen name="Cidade" component={CidadeShow} options={{
        title: 'nomeDaCidade',
        headerStyle: {
            backgroundColor: "#2C3E50", 
            width: "100%", 
            padding: 20, 
        },
        headerTitleAlign: "center", 
        headerTintColor: "#ffffff", 
        headerTitleStyle: {
            alignItems: "center", 
            marginVertical: 20, 
        },
    }}   />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


