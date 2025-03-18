import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Pag1 from './Pag1.js'
import Pag2 from './Pag2.js';

const Stack =createStackNavigator();

export default function Rotabotao() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Pag1" component={Pag1}/>
          <Stack.Screen name="Pag2" component={Pag2}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}