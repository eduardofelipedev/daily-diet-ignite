import styled from "styled-components/native";
import { TextInput } from "react-native";
//import TextInputMask from "react-native-text-input-mask";





export const Container = styled(TextInput)`
    width: 100%;
    padding: 14px 14px;
    background-color: ${({ theme }) => theme.COLORS.BASE.WHITE};
    color: ${({ theme }) => theme.COLORS.BASE.GRAY_100};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_M}px;
    border: solid 1px ${({ theme }) => theme.COLORS.BASE.GRAY_500};
    border-radius: 6px;


`;


export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
    margin-bottom: 5px;
    margin-top: 10px;
    color: ${({ theme }) => theme.COLORS.BASE.GRAY_200};

`;