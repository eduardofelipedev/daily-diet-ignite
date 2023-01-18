import { Container, TitleTime, Title, Status } from "./styles";
import { Text, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    hour: string;
    title: string;
    type: string;
    onFunction: () => void;
}

export function DietCard({hour, title, type = 'yes', onFunction, ...rest} : Props){
    return(       
           
            <Container onPress={onFunction} {...rest}>
                <TitleTime>{hour}</TitleTime>
                <Text style={{fontSize: 16, color: '#DDDEDF'}}>|</Text>
                <Title numberOfLines={1}>{title}</Title>
                <Status isDiet={type}></Status>
            </Container>
       
    );
}