import { CardNewMeal } from "../../components/CardNewMeal";
import { useEffect, useState } from "react";
import { 
    Container, 
    ContainerMeat,
    ContainerInfoMeat,
    ContainerButton,
    MeatName,
    MeatDescription,
    MeatDateAndHour,
    StatusDiet,
    MeatTitleDateAndHour,
    ContainerStatus,
    Status
} from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { ButtonAdd } from "../../components/ButtonAdd";

import { meatGetByMeat } from "../../Storage/meat/meatGetByMeat";

import { Loading } from "../../components/Loading";
import { Alert } from "react-native";
import { Modall } from "../../components/Modal";
import { meatRemove } from "../../Storage/meat/meatRemove";

type RouteParams = {
    name: string;
    hour: string;
    isDiet: boolean;
}

export function Meat(){

    const navigation = useNavigation();
    const route = useRoute();
    const { name, hour, isDiet } = route.params as RouteParams;

    const [meat, setMeat] = useState<any>(); 
    const [isLoading, setIsLoading] = useState(true);
    const [isVisible, setIsvisible] = useState(false);
    
   

    function handleBackHome(){
        navigation.navigate('home');
    }


    async function handleFecth(){
        try{
            setIsLoading(true);        
            const dataMeat = await meatGetByMeat(name, hour);
            setMeat(dataMeat);
            setIsLoading(false);
        }catch(error){
            console.log(error);
            Alert.alert('Aviso','Ops, Algo deu errado, tente novamente.',
            [
                {text: 'Ok', onPress: () => handleBackHome()}
            ]
            );
            
        }
        
    }


    async function handleRemove(){
        try{
            await meatRemove(meat?.date, name, hour);
            navigation.navigate('home');

        }catch(error){
            console.log(error);
            setIsvisible(false);
            Alert.alert('Aviso','Ops, Algo deu errado, tente novamente.',
            [
                {text: 'Ok', onPress: () => handleBackHome()}
            ]
            );

        }
    }

    async function handleEdit(){
        navigation.navigate('edit', 
        {
            name: name, 
            description: meat.description,
            date: meat.date,
            hour: hour,
            isDiet: isDiet
        })
       
    }

    


    useEffect(() => {
        handleFecth();
    },[]);


    return(
        <>
            <Container>
                <CardNewMeal 
                    title="Refeição"
                    onFunction={handleBackHome}
                    type={isDiet ? 'PRIMARY' : 'SECONDARY'}
                    
                />

                <ContainerMeat>
                    {   
                        isLoading ? <Loading /> : <>
                        <ContainerInfoMeat>

                        <MeatName>{meat?.title}</MeatName>
                        <MeatDescription>{meat?.description}</MeatDescription>
                        <MeatTitleDateAndHour>Data e hora</MeatTitleDateAndHour>
                        <MeatDateAndHour>{meat?.date} às {meat?.hours} </MeatDateAndHour>
                        <ContainerStatus>
                            <Status 
                                isDiet={isDiet}
                            />
                            <StatusDiet>dentro da dieta</StatusDiet>
                        </ContainerStatus>
                        



                    </ContainerInfoMeat>


                    <ContainerButton>
                        <ButtonAdd 
                            title="Editar refeição"
                            nameIcon="edit-3"
                            typeIcon={true}
                            onFunction={handleEdit}
                            typeBg='PRIMARY'

                        />

                        <ButtonAdd 
                            
                            title="Excluir refeição"
                            nameIcon="trash-2"
                            typeIcon={true}
                            onFunction={() => setIsvisible(true)}
                            typeBg='SECONDARY'
                        />
                        
                    </ContainerButton>
                    </>
                    }
                </ContainerMeat>
            </Container>
        <Modall 
            isvisible={isVisible}
            onFunctionDel={handleRemove}
            onFunctionCancel={() => setIsvisible(false)}
        />
        </>
    );
}