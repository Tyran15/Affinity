import { createStackNavigator } from "@react-navigation/stack";

// Telas
import Home from "../screeens/Home";
import Login from "../screeens/Login"
import Singup from "../screeens/Singup"

const Stack = createStackNavigator();

export default function StackRoutes() {
    return(
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Singup" component={Singup} />
        </Stack.Navigator>
    );
}