import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';


type Props = {
    type: 'PRIMARY' | 'SECONDARY' | 'DEFAULT';
}


export const Container = styled.View<Props>`
    height: 132px;
    width: 100%;
    
    background-color: ${({ theme, type}) => type === 'PRIMARY' ? theme.COLORS.BRAND.GREEN.LIGHT :
    type === 'SECONDARY' ? theme.COLORS.BRAND.RED.LIGHT : theme.COLORS.BASE.GRAY_400 };

    justify-content: center;
    align-items: center;
    padding: 24px;
    justify-content: center;
`;

export const Header = styled.View`
    flex-direction: row;    
    width: 100%;
    justify-content: center;
    align-items: center;    
`;

export const ButtonBack = styled(TouchableOpacity)`
    width: 8%;        
    position: absolute;
    left: 0%;
`;


export const Icon = styled(Feather).attrs({
    name: 'arrow-left',
    size: 24
})`
    
   
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_S}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.BASE.GRAY_100};    
`; 