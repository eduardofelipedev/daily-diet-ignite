import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FeedBack } from "../screens/Feedback";
import { Edit } from "../screens/Edit";
import { Home } from "../screens/Home";
import { Meat } from "../screens/Meat";
import { Register } from "../screens/Register";
import { Statistic } from "../screens/Statistic";



const { Navigator, Screen } = createNativeStackNavigator();


export function AppRoutes() {
    return(
       
        <Navigator screenOptions={{headerShown: false}}>
            <Screen 
                name="home"
                component={Home}
            />

            <Screen 
                name="statistic"
                component={Statistic}         
            />

            <Screen 
                name="register"
                component={Register}         
            />

            <Screen 
                name="feedback"
                component={FeedBack}         
            />

            <Screen 
                name="meat"
                component={Meat}         
            />

            <Screen 
                name="edit"
                component={Edit}         
            />
            
        </Navigator>
           
      
    );
}