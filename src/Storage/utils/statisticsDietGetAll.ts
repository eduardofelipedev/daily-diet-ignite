import { meatGetAll } from "../meat/meatGetAll";




export async function statisticsDietGetAll(){
    try{
        const storedMeats = await meatGetAll();

        const dateMeat = storedMeats.length ;
        
        
        var qtdMeat = 0;        
        var qtdInDiet = 0;        
        var qtdOfDiet = 0;

        

        for(var i = 0; i < dateMeat; i++){

            const filteredData = storedMeats[i].data.length;
            qtdMeat = qtdMeat + filteredData;
            
            const filteredInDiet = storedMeats[i].data.filter((item: any ) => item = item.isDiet === 'yes');
            const countInDiet = filteredInDiet.length;
            qtdInDiet = qtdInDiet + countInDiet;
            
            const filteredOfDiet = storedMeats[i].data.filter((item: any ) => item = item.isDiet === 'no');
            const countOfDiet = filteredOfDiet.length;
            qtdOfDiet = qtdOfDiet + countOfDiet;

            
        }


        const calcOfDiet = qtdInDiet + qtdOfDiet;
        const statusdDiet = qtdInDiet > (calcOfDiet/2);
        const calcPorcent = (qtdInDiet * 100 ) / calcOfDiet;
        
        
        let dataIsdiet = [];

        for(var i = 0; i < dateMeat; i++){
            const filteredIsDiet = storedMeats[i].data.filter((item: any ) => item = item.isDiet === 'yes');
            
            if(filteredIsDiet.length === 1){
              dataIsdiet.push(filteredIsDiet[0]);
            }else{
              for(var v = 0; v < filteredIsDiet.length; v++){
                dataIsdiet.push(filteredIsDiet[v]);
              }
              
            }
        }
       

        const unique = dataIsdiet.map((item) => item.name);

        let amountOfMeal = unique.reduce(function (allDiets: any, diet) {
            if (diet in allDiets) {
              allDiets[diet]++;
            }
            else {
              allDiets[diet] = 1;
            }
            return allDiets;
          }, {});

        let valueOfMeal: any = []; 

        let numbers = Object.values(amountOfMeal);
        numbers.forEach((number) => valueOfMeal.push(number) )    


        const newStatistic = {
          qtdMeat: qtdMeat,
          qtdInDiet: qtdInDiet,
          qtdOfDiet: qtdOfDiet,
          calcPorcent: calcPorcent,
          statusdDiet: statusdDiet,
          sequenceDiet: Math.max(...valueOfMeal)



        }
        
        return newStatistic;







    }catch(error){
        throw error
    }
}