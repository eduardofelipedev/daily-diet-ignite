import { useNavigation } from "@react-navigation/native";
import { CardNewMeal } from "../../components/CardNewMeal";
import { Form } from "../../components/Form";
import { Container } from "./styles";


export function Register(){
   
    
    const navegation = useNavigation();

    function handleBackHome(){
        navegation.navigate('home');
    }

    return(
        <Container>
            <CardNewMeal 
                title="Nova refeição"
                onFunction={handleBackHome}
            />

            <Form />

            
        </Container>
    );
}

