import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackRoutes from './stack.navigator'; 

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} >
      <Tab.Screen name="Home" component={StackRoutes} />
    </Tab.Navigator>
  );
}