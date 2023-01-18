import { meatGetAll } from "../meat/meatGetAll";
import { meatRemove } from "./meatRemove";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MeatListProps } from "./meatStorageDTO";
import { meatCreate } from "./meatCreate";




export async function meatEditByMeat(date: string, name: string, hour: string, newMeat: MeatListProps){
    
    try{
        const storedRemove = await meatRemove(date, name, hour);
        storedRemove ? await meatCreate(newMeat) : false;
    }catch(error){
        throw error
    }  
   

}