import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAT_COLLECTION } from "../storageConfig";


export async function meatGetAll(){
    try{
        const storage = await AsyncStorage.getItem(MEAT_COLLECTION);
        const meats = storage ? JSON.parse(storage) : [];
        return meats;
    }catch(error){
        throw error;
    }
    

    
}