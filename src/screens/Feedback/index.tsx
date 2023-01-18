import { ButtonAdd } from "../../components/ButtonAdd";
import { Container, Title, Subtitle, Image, ContainerButton } from "./styles";
import ImgInsite from '../../assets/images/insidediet.png';
import ImgOff from '../../assets/images/offdiet.png';
import { useRoute, useNavigation } from "@react-navigation/native";

type RouteParams = {
    isDiet: boolean;
}



export function FeedBack(){

    const navigation = useNavigation();
    const route = useRoute();
    const { isDiet } = route.params as RouteParams;   


    function handleBackHome(){
        navigation.navigate('home');
    }


    return(
        <Container>
            <Title isDiet={isDiet}>
                {isDiet ? 'Continue assim!' : 'Que pena!'}
            </Title>
            <Subtitle>
                {isDiet ? 
                    'Você continua dentro da dieta. Muito bem!' : 
                    'Você saiu da dieta dessa vez, mais continue se esforçando e não desista!'
                }
                
            </Subtitle>            

            {
                isDiet ?
                <Image 
                    source={ImgInsite}
                />
                :
                <Image 
                    source={ImgOff}
                />
            }
            <ContainerButton>
                <ButtonAdd 
                    title="Ir para a página inicial"
                    typeIcon={false}
                    onFunction={handleBackHome}
                    typeBg='PRIMARY'
                    
                />
            </ContainerButton>
        </Container>
    );
}