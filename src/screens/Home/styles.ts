import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context';




export const Container = styled(SafeAreaView)`
    background-color: ${({ theme }) => theme.COLORS.BASE.WHITE};
    padding: 24px;
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


export const Logo = styled.Image`    
    width: 82px;
`;

export const User = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 999px;    
    border: solid 2px ${({ theme }) => theme.COLORS.BASE.GRAY_200};
    overflow: hidden;      
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_M}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.BASE.GRAY_100};
    margin-bottom: 15px;
`;

export const CardPorcentageEmpty = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_600};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 40px;
    padding: 15px 20px 30px 10px;
`;

export const TitlePorcentageEmpty = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_G}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme}) => theme.COLORS.BASE.GRAY_100};
`;


export const SubTitlePorcentageempty = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_S}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme}) => theme.COLORS.BASE.GRAY_200};
`;


export const TextDate = styled.Text`
    color: ${({ theme}) => theme.COLORS.BASE.GRAY_100};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_S}px;
    margin-top: 20px;
`;