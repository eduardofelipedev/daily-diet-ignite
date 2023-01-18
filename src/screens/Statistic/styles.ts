import styled from "styled-components/native";
import { ButtontypeStyleProps } from "../../components/CardPorcentage/styles";


type Props = {
    typecolor: ButtontypeStyleProps;
}

export const Container = styled.View`
    flex: 1;
`;


export const ContainerPorcentage = styled.View<Props>`
    width: 100%;
    height: 200px;
    padding-left: 15px;

    background-color: ${({ theme, typecolor }) => typecolor === 'PRIMARY' ? 
    theme.COLORS.BRAND.GREEN.LIGHT : theme.COLORS.BRAND.RED.MID};    
`;


export const GeneralStatistics = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.BASE.WHITE};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    position: absolute;
    top: 168px;    
`;