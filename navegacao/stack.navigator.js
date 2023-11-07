import { createStackNavigator } from "@react-navigation/stack";

// Telas
import Home from "../screeens/Home";
import Login from "../screeens/Login";
import Singup from "../screeens/Singup";
import Match from "../screeens/Match";

const Stack = createStackNavigator();

export default function StackRoutes() {
    return(
        <Stack.Navigator initialRouteName="Match" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Singup" component={Singup} />
            <Stack.Screen name="Match" component={Match} />
        </Stack.Navigator>
    );
}