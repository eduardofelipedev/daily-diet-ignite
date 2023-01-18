import { 
    Container, 
    Titlegeneral, 
    ContainerSequence,  
    TitleCountSequence,
    TitleSequence,
    ContainerInsideAndOff,
    ContainerInsideDiet,
    TitleCountInsideDiet,
    TitleInsideDiet,
    ContainerOffDiet,
    TitleCountOffDiet,
    TitleOffDiet,
    ContainerMeats,
    TitleCountMeats,
    TitleMeatsRegistered
} from "./styles";

interface Props{
    qtdMeats: number;
    qtdInDiet: number;
    qtdOfDiet: number;
    sequenceDiet: number;
}

export function CardStatistic({qtdMeats, qtdInDiet, qtdOfDiet, sequenceDiet} : Props){
    return(
        <Container>
            
            
                <Titlegeneral>Estatisticas gerais</Titlegeneral>
                
                <ContainerSequence>
                    <TitleCountSequence>{sequenceDiet}</TitleCountSequence>
                    <TitleSequence>melhor sequência de pratos dentro da dieta</TitleSequence>
                </ContainerSequence>

                <ContainerMeats>
                    <TitleCountMeats>{qtdMeats}</TitleCountMeats>
                    <TitleMeatsRegistered>refeições registradas</TitleMeatsRegistered>
                </ContainerMeats>

                <ContainerInsideAndOff>
                    <ContainerInsideDiet>
                        <TitleCountInsideDiet>{qtdInDiet}</TitleCountInsideDiet>
                        <TitleInsideDiet>refeições dentro da dieta</TitleInsideDiet>
                    </ContainerInsideDiet>

                    <ContainerOffDiet>
                        <TitleCountOffDiet>{qtdOfDiet}</TitleCountOffDiet>
                        <TitleOffDiet>refeições fora da dieta</TitleOffDiet>

                    </ContainerOffDiet>
                </ContainerInsideAndOff>
           
        </Container>
    );
}