import { meatGetAll } from "./meatGetAll";

type Props = {
    title: string,
    description: string,
    hours: string
    isDiet: boolean,
    date: string
}


export async function meatGetByMeat(name: string, hour: string){
    const data = await meatGetAll();
    const length = data.length;
    
    

    for (var i = 0; i < length; i++){
        const dataMeat = data[i].data.filter((v: {hour: string, name: string}) =>
        v.name === name && v.hour === hour);        
        
        const testedate = data[i].date;

        if(dataMeat.length > 0){
           
            const newMeat: Props = {
                title: dataMeat[0].name,
                description: dataMeat[0].description,
                hours: dataMeat[0].hour,
                isDiet: dataMeat[0].isDiet,
                date: testedate
            }
           
            return newMeat;
        }
        
    }


};