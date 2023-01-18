import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAT_COLLECTION } from "../storageConfig";
import { meatGetAll } from "./meatGetAll";




export async function meatRemove(date: string, name: string, hour: string){
    try{
        let storedMeals = await meatGetAll();
        const storedIndex = storedMeals.findIndex((item: {date: string}) => item.date === date); 
   
        const dateMeat: any = storedMeals.find((item: {date: string}) => item.date === date);        
        const countData = dateMeat.data.length === 1;
        

        if(countData){
            storedMeals = storedMeals.filter((item: {date: string}) => item.date !== date);            
        }else{            
            storedMeals[storedIndex].data = storedMeals[storedIndex].data.filter((item: {hour: string, name: string}) => 
            item.name !== name || item.hour !== hour);
        }    

        
        const storage = JSON.stringify(storedMeals);
        await AsyncStorage.setItem(MEAT_COLLECTION, storage);
        return true;
        
    }catch(error){
        throw error;
    }
    
   
    
}