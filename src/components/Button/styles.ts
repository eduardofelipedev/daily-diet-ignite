import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ButtontypeStyleProps } from "../CardPorcentage/styles";


export type ButtonStyleProps = {
    isActive?: boolean;
    type?: ButtontypeStyleProps;
    typeSelect?: 'yes' | 'no';
}


export const Container = styled(TouchableOpacity)<ButtonStyleProps>`   
    border-radius: 6px;
    height: 50px;
    width: 48%;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_600};

    background-color: ${({ theme, isActive, type}) => isActive && type === 'PRIMARY' ? 
    theme.COLORS.BRAND.GREEN.LIGHT : isActive && type === 'SECONDARY' ? 
    theme.COLORS.BRAND.RED.LIGHT : theme.COLORS.BASE.GRAY_600};  
    
    border: 1px solid ${({ theme, isActive, type}) => isActive && type === 'PRIMARY' ? 
    theme.COLORS.BRAND.GREEN.DARK : isActive && type === 'SECONDARY' ? 
    theme.COLORS.BRAND.RED.DARK : theme.COLORS.BASE.GRAY_600};
`;

export const ContainerStatus = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Status = styled.View<ButtonStyleProps>`
    width: 8px;
    height: 8px;

    background-color: ${({ theme, type }) => type === 'PRIMARY' ?
    theme.COLORS.BRAND.GREEN.DARK : theme.COLORS.BRAND.RED.DARK};
    
    margin-right: 5px;
    border-radius: 999px;
`; 


export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.BASE.GRAY_100};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;