import { TouchableOpacityProps } from "react-native";

import { Container, Title, ButtonStyleProps, Status, ContainerStatus } from "./styles";



type Props = TouchableOpacityProps & ButtonStyleProps & {
    title: string;   
    onFunction: () => void;
}


export function Button({title, typeSelect, type = "PRIMARY", isActive = false, onFunction, ...rest} : Props){
    return(
        <Container    
            typeSelect={typeSelect}    
            isActive={isActive}     
            onPress={onFunction}
            type={type}           
            {...rest}            
        >   
            <ContainerStatus>
                <Status type={type}></Status>
                <Title>{title}</Title>
            </ContainerStatus>
        </Container>
    );
}