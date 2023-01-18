import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { ButtontypeStyleProps } from "../CardPorcentage/styles";


type Props = {
    typeBg: ButtontypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    width: 100%;
    border-radius: 6px;
    background-color: ${({ theme, typeBg}) => typeBg === 'PRIMARY' ?
    theme.COLORS.BASE.GRAY_200 : theme.COLORS.BASE.WHITE};

    flex-direction: row;
    justify-content: center;
    padding: 16px 12px;    
    margin-bottom: 10px;
    align-items: center;

    border: ${({ theme, typeBg}) => typeBg === 'PRIMARY' ?
    undefined : theme.COLORS.BASE.GRAY_100};
`;

export const Icon = styled(Feather)<Props>`    
    color: ${({ theme, typeBg}) => typeBg === 'PRIMARY' ?
    theme.COLORS.BASE.WHITE : theme.COLORS.BASE.GRAY_100};

    margin-right: 10px;
`;


export const Title = styled.Text<Props>`
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;

    color: ${({ theme, typeBg}) => typeBg === 'PRIMARY' ?
    theme.COLORS.BASE.WHITE : theme.COLORS.BASE.GRAY_100};

    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
