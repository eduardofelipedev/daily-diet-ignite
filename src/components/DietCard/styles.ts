import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";


type Props = {
    isDiet: string;
}

export const Container = styled(TouchableOpacity)`
    width: 100%;
    border: solid 1px #DDDEDF;
    border-radius: 6px;
    padding: 16px;
    margin-top: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;    
`;

export const TitleTime = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_XS}px;
    margin-right: 10px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Title = styled.Text`
    margin-left: 10px;
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_M}px;
    width: 217px;
    color: ${({ theme }) => theme.COLORS.BASE.GRAY_200};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};    
`;


export const Status = styled.View<Props>`
    background-color: ${({ theme, isDiet }) => isDiet === 'yes' ? 
    theme.COLORS.BRAND.GREEN.MID : theme.COLORS.BRAND.RED.MID};

    width: 14px;
    height: 14px;
    border-radius: 500px;
`;

