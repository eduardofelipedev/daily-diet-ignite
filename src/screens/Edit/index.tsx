import { Control, FieldValues, FormProvider, useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useNavigation, useRoute } from "@react-navigation/native";

import { useState } from "react";
import { meatEditByMeat } from "../../Storage/meat/meatEditByMeat";

import { Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Button } from "../../components/Button";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CardNewMeal } from "../../components/CardNewMeal";
import { InputForm } from "../../components/InputForm";
import { InputMask } from "../../components/InputMask";
import { 
    Container,
    Fields,
    TitleName,    
    TitleDescription,
    ContainerDateAndHour,
    ContainerDate,
    ContainerHour,
    TitleQuestion,
    ContainerButton,
    ContainerForm
} from "./styles";




const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    description: Yup.string().required('Descrição é obrigatório'),
    date: Yup.string()
    .min(10, 'A data está incompleta')        
    .required('A data é obrigatória'),   

    hour: Yup.string()
    .min(5, 'A hora está incompleta')
    .required('A hora é obrigatória')
}).required();


interface FormDataProps {
    date: string;    
    name: string,
    description: string,
    hour: string,
    isDiet: string        
}


type RouteParams = {
    name: string;
    description: string;
    date: string;
    hour: string;
    isDiet: boolean;
}

export function Edit(){
    const navigation = useNavigation();
    const route = useRoute();
    const { name, description, date, hour, isDiet } = route.params as RouteParams;    
    

    const editMeal = {
        name: name,
        description: description,
        date: date, 
        hour: hour
    }

    const {
        control, 
        handleSubmit,
        formState: { errors }
    } = useForm<FormDataProps>({
        defaultValues:{
            name: name,
            description: description,
            date: date,
            hour: hour
        },
        resolver: yupResolver(schema)
    });

    const formControl = control as unknown as Control<FieldValues, any>;

    const [transectionsTypeSelect, setTransectionsTypeSelect] = useState(isDiet ? 'yes' : 'no');


    function handleBackHome(){
        navigation.navigate('home');
    }

    

    function handleTransactionsTypeSelect(typeSelect: string ){
        setTransectionsTypeSelect(typeSelect);
    }

    async function handleRegister({name, description, date, hour, isDiet} : FormDataProps){

        try{

            if(transectionsTypeSelect === ''){
                return(Alert.alert('Aviso','Escolha se está dentro da dieta ou não'));
            }

            const newMeal = {
                date: date,            
                    data: 
                        [{
                        name: name,
                        description: description,
                        hour: hour,
                        isDiet: transectionsTypeSelect
                    }]
                            
            };
            await meatEditByMeat(editMeal.date, editMeal.name, editMeal.hour, newMeal);
            navigation.navigate('home');

        }catch(error){
            console.log(error)
        }             

        
    }


    
    
    return(
        <Container>
            <CardNewMeal 
                title="Editar refeição"
                onFunction={handleBackHome}
            />

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ContainerForm>                                      
                    
                    <Fields>
                        <TitleName>Nome</TitleName>
                        <InputForm                             
                            control={formControl}
                            name="name"
                            error={errors.name && errors.name.message}                               
                                    
                        />

                        <TitleDescription>Descrição</TitleDescription>
                            <InputForm                             
                                style={{
                                    height: 120,                   
                                    textAlignVertical: 'top'
                                        
                                }}
                                numberOfLines={10}
                                multiline={true}
                                control={formControl}
                                name="description"
                                error={errors.description && errors.description.message}
                            />

                            

                            <ContainerDateAndHour>
                                <ContainerDate>
                                    <InputMask 
                                        title="Data"
                                        typeMask="PRIMARY"                                    
                                        control={formControl}
                                        name='date'
                                        error={errors.date && errors.date.message}                                            
                                    />
                                </ContainerDate>

                                <ContainerHour>
                                    <InputMask 
                                        title="Hora"
                                        typeMask="SECONDARY"
                                        control={formControl}
                                        name="hour"
                                        error={errors.hour && errors.hour.message}
                                            
                                    />
                                </ContainerHour>               
                                    
                            </ContainerDateAndHour>

                        

                            

                            <TitleQuestion>
                                Está dentro da dieta?
                            </TitleQuestion>

                            <ContainerButton>
                                <Button                     
                                    title="Sim"  
                                    type="PRIMARY"  
                                    onFunction={() => handleTransactionsTypeSelect('yes')}
                                    isActive={transectionsTypeSelect === 'yes'}                                                  
                                />

                                <Button                     
                                        title="Não"     
                                        type="SECONDARY"
                                        onFunction={() => handleTransactionsTypeSelect('no')}
                                        isActive={transectionsTypeSelect === 'no'}                                       
                                    />                           
                                    
                                </ContainerButton>
                            </Fields>          
                            
                            
                            <ButtonAdd                     
                                onFunction={handleSubmit(handleRegister)}                                
                                title="Salvar alterações"
                                typeIcon={false}
                                typeBg='PRIMARY'
                            />         
                        
                        </ContainerForm>
                    </TouchableWithoutFeedback>
        </Container>
    );
}