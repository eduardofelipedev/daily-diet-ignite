import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";


type Props = TouchableOpacityProps & {
    onFunction?: () => void;
    title: string;
    typeIcon: boolean;
    nameIcon?: string;
    typeBg: 'PRIMARY' | 'SECONDARY';
}


export function ButtonAdd({onFunction, typeIcon = true, title, nameIcon, typeBg = 'PRIMARY'} : Props){
    return(
        <Container typeBg={typeBg} onPress={onFunction}>
            {typeIcon ? <Icon name={nameIcon} size={18} typeBg={typeBg}/> : false}
            
            <Title typeBg={typeBg}>{title}</Title>
        </Container>
    );

}

