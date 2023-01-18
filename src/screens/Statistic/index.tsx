import { CardPorcentage } from "../../components/CardPorcentage";
import { CardStatistic } from "../../components/CardStatistic";
import { ContainerPorcentage, GeneralStatistics, Container } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { statisticsDietGetAll } from "../../Storage/utils/statisticsDietGetAll";
import { Loading } from "../../components/Loading";
import { Alert } from "react-native";


export function Statistic(){
    
    const [isLoading, setIsLoading] = useState(true);
    const [ qtd, setQtd] = useState<any>();

    

    const navegation = useNavigation();

    function handleBackHome(){
        navegation.navigate('home');
    }

    async function handleFechStatistic(){
        try{            
            setIsLoading(true);
            const data = await statisticsDietGetAll();

            const info = {
                statusDiet: data.statusdDiet,
                calcPorcent: data.calcPorcent,
                qtdMeat: data.qtdMeat,
                qtdInDiet: data.qtdInDiet,
                qtdOfDiet: data.qtdOfDiet,
                sequenceDiet: data.sequenceDiet
            }
            
            setQtd(info);
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

    useEffect(() => {
        handleFechStatistic();
    },[]);
    
    return(
        
        <Container>
            {
                isLoading ? <Loading /> :
            <>
                <ContainerPorcentage typecolor={qtd.statusDiet ? 'PRIMARY' : 'SECONDARY'}>
                    <CardPorcentage 
                        title={qtd.calcPorcent.toFixed(0)}
                        subtitle="das refeições dentro da dieta"
                        type={qtd.statusDiet ? 'PRIMARY' : 'SECONDARY'}
                        typeIcon="LEFT"
                        onFunction={handleBackHome}
                    />
                </ContainerPorcentage>
                <GeneralStatistics>               
                        <CardStatistic 
                            qtdMeats={qtd.qtdMeat}
                            qtdInDiet={qtd.qtdInDiet}
                            qtdOfDiet={qtd.qtdOfDiet}
                            sequenceDiet={qtd.sequenceDiet}
                        />                
                </GeneralStatistics>
            </>
            }
        </Container>
    );
}