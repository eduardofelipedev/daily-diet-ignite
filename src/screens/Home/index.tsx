import { 
    Container, 
    Header, 
    Logo, 
    User, 
    Title, 
    CardPorcentageEmpty, 
    TitlePorcentageEmpty, 
    SubTitlePorcentageempty,
    TextDate
} from "./styles";

import { SectionList } from 'react-native';



import Image from '../../assets/logo/Logo.png';
import ImgUser from '../../assets/avatar/user.png';

import { CardPorcentage } from "../../components/CardPorcentage";
import { ButtonAdd } from "../../components/ButtonAdd";


import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from "react";

import { meatGetAll } from "../../Storage/meat/meatGetAll";
import { DietCard } from "../../components/DietCard";
import { MeatListProps } from "../../Storage/meat/meatStorageDTO";
import { statisticsDietGetAll } from "../../Storage/utils/statisticsDietGetAll";

import { ListEmpty } from "../../components/ListEmpty";
import { Loading } from "../../components/Loading";






export function Home(){
    

    const [meats, setMeats] = useState<MeatListProps[]>([]);    
    const [statistic, setStatistic] = useState<any>(0);
    const [isLoading, setIsLoading] = useState(true);

    const navegation = useNavigation();

    function handleNextStatistic(){
        navegation.navigate('statistic');
    }

    function handleNextRegister(){
        navegation.navigate('register');
    }
            
    async function fetchMeats(){
        try{
            setIsLoading(true);
            const data = await meatGetAll();        
            setMeats(data);
            setIsLoading(false);
        }catch(error){            
            console.log(error);           
        }        
    }

    async function handleFechStatistic(){
        const data = await statisticsDietGetAll();
        const info = {
            statusDiet: data.statusdDiet,
            calcPorcent: data.calcPorcent,            
        }
        setStatistic(info);
    }

    async function handleNestMeat(name: string, hour: string, isDiet: boolean) {

        navegation.navigate('meat', 
        {
            name: name, 
            hour: hour,
            isDiet: isDiet
        })

       
    }
    

    useFocusEffect(useCallback(() => {
        fetchMeats();
        handleFechStatistic();
    }, []));



    


    return(
        <Container>
             {
                 isLoading ? <Loading /> :
             <>   
            <Header>
                <Logo source={Image}></Logo>                
                
                <User source={ImgUser}></User>
                
            </Header>

            {
                meats.length > 0 ? 
                <CardPorcentage 
                    title={statistic.calcPorcent > 0 ? statistic.calcPorcent.toFixed(0) : statistic.calcPorcent}
                    subtitle="das refeições dentro da dieta"
                    type={statistic.statusDiet ? 'PRIMARY' : 'SECONDARY'}
                    typeIcon="RIGHT"
                    onFunction={handleNextStatistic}
                /> : 
                <CardPorcentageEmpty>
                    <TitlePorcentageEmpty>
                        0%
                    </TitlePorcentageEmpty>
                    <SubTitlePorcentageempty>
                        das refeições cadastradas
                    </SubTitlePorcentageempty>
                </CardPorcentageEmpty>
            }

            

            <Title>Refeições</Title>
            <ButtonAdd 
                onFunction={handleNextRegister}
                title="Nova refeição"
                typeIcon={true}
                nameIcon="plus"
                typeBg='PRIMARY'
            />

          
          
                <SectionList 
                    sections={meats}
                    keyExtractor={(item) => item.hour}               
                    renderSectionHeader={({section: {date}}) => (
                        <TextDate>{date}</TextDate>
                    )} 
                    renderItem={({item}) => (
                        <DietCard 
                            title={item.name}
                            hour={item.hour}
                            type={item.isDiet}
                            onFunction={() => handleNestMeat(item.name, item.hour, item.isDiet === 'yes')}
                            
                        />
                    )}
                    
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: 40}}
                    ListEmptyComponent={
                        <ListEmpty />
                    }
                />
                </> 
            }

                      
        </Container>
    );
    
}