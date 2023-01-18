import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled from "styled-components/native";


export type ButtontypeStyleProps = 'PRIMARY' | 'SECONDARY';
export type IcontypeStylesProps = 'LEFT' | 'RIGHT';

type Props = TouchableOpacityProps & {
    type?: ButtontypeStyleProps;
    typeIcon?: IcontypeStylesProps;
}



export const Container = styled.View<Props>`
    width: 100%;    
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 40px;
    padding: 15px 20px 30px 10px;


    background-color: ${({ theme, type }) => type === 'PRIMARY' ? 
    theme.COLORS.BRAND.GREEN.LIGHT : theme.COLORS.BRAND.RED.MID};
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_G}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme}) => theme.COLORS.BASE.GRAY_100};    
`;



export const Subtitle = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_S}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme}) => theme.COLORS.BASE.GRAY_200}; 
`;



export const ContainerIcon = styled(TouchableOpacity)<Props>`    
    
    width: 10%;    
    margin-bottom: -10px;     
    ${({ typeIcon }) => typeIcon === 'LEFT' ? 'align-self: flex-start' : 'align-self: flex-end'};
       
`;

export const Icon = styled(Feather).attrs<Props>(({ theme, typeIcon }) => ({    
    name: typeIcon === 'LEFT' ? 'arrow-left' : 'arrow-up-right',    
    size: 30
}))<Props>`
    color: ${({ theme, type }) => type === 'PRIMARY' ? 
    theme.COLORS.BRAND.GREEN.DARK : theme.COLORS.BRAND.RED.DARK};
`;


