import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { MEAT_COLLECTION } from '../storageConfig';
import { meatGetAll } from './meatGetAll';
import { MeatListProps } from './meatStorageDTO';   



export async function meatCreate(newMeat: MeatListProps){
    try{        
        const storedMeals = await meatGetAll();
        const DateMeat = storedMeals.filter((v: MeatListProps) => v.date === newMeat.date);
        const index: number = storedMeals.findIndex((item: MeatListProps) => item.date === newMeat.date);
        
        if(DateMeat.length > 0){
            
            const HourMeal = DateMeat[0].data.filter((hour: { hour: string; }) => hour.hour === newMeat.data[0].hour);            
            
            if(HourMeal.length > 0){                
                Alert.alert('Aviso', `Já existe uma refeição na data ${newMeat.date} às ${newMeat.data[0].hour} `);
                return false;                
            } else{                
                
                storedMeals[index].data.push(newMeat.data[0]);
                const storage = JSON.stringify(storedMeals);
                await AsyncStorage.setItem(MEAT_COLLECTION, storage);          
                return true;
            }
            
        }

        const storage = JSON.stringify([...storedMeals, newMeat]);    
        await AsyncStorage.setItem(MEAT_COLLECTION, storage);
        return true;

        


        

    }catch(error){
        throw error;
    }
}