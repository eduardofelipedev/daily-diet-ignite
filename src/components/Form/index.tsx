
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { Button } from "../Button";
import { ButtonAdd } from "../ButtonAdd";
import { InputForm } from "../InputForm";
import { InputMask } from "../InputMask";
import { 
    Container, 
    ContainerDateAndHour, 
    ContainerDate, 
    ContainerHour, 
    TitleQuestion, 
    ContainerButton,    
    TitleName,
    TitleDescription,
    Fields
} from "./styles";

import { Control, FieldValues, useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { meatCreate } from "../../Storage/meat/meatCreate";




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


interface FormDataProps  {
    date: string;    
    name: string,
    description: string,
    hour: string,
    isDiet: string           
}


export function Form(){
    const navegation = useNavigation();



    const {
        control, 
        handleSubmit,
        formState: { errors }
    } = useForm<FormDataProps>({
            resolver: yupResolver(schema)
    });

    const formControl = control as unknown as Control<FieldValues, any>;
    
    const [transectionsTypeSelect, setTransectionsTypeSelect] = useState('');    

    
    function handleTransactionsTypeSelect(typeSelect: string ){
        setTransectionsTypeSelect(typeSelect);
    }
    
    async function handleRegister({name, description, date, hour, isDiet} : FormDataProps){

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
        
        

        if(transectionsTypeSelect === '')
            return(Alert.alert('Aviso','Escolha se está dentro da dieta ou não'));

        
        

        await meatCreate(newMeal) ? navegation.navigate('feedback', {isDiet: transectionsTypeSelect === 'yes'}):
        false;          

       
    }




    return(
       
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>               
                
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
                        //onFunction={fetchMeats}
                        title="Cadastrar refeição"
                        typeIcon={false}
                        typeBg='PRIMARY'
                    />         
                
                </Container>
            </TouchableWithoutFeedback>
            

    
        

    );
}