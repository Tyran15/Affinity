import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from 'react-native-vector-icons'; // Importe o ícone correto

import StackRoutes from './stack.navigator';
import Perfil from '../screeens/Perfil';
import Match from '../screeens/Match';

const Tab = createBottomTabNavigator();

export default function  () {
  return (
    <Tab.Navigator
      initialRouteName='Match'
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        tabStyle: {
          height: 50,
        },
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackRoutes}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={StackRoutes}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <Feather name="message-circle" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Match"
        component={Match}
        options={{
          tabBarLabel: 'Match',
          tabBarIcon: ({ color }) => (
            <Feather name="heart" color={color} size={30} />
            
          ),
        }}
      />
      <Tab.Screen
        name="Info"
        component={StackRoutes}
        options={{
          tabBarLabel: 'Info.',
          tabBarIcon: ({ color }) => (
            <Feather name="info" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Feather name="user" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
