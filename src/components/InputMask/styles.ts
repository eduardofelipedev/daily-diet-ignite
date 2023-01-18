import styled from "styled-components/native";


import {TextInputMask } from 'react-native-masked-text';



export const Container = styled(TextInputMask)`
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


export const Error = styled.Text`
    color: ${({ theme }) => theme.COLORS.BRAND.RED.DARK};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;