import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";


export const Container = styled.View``;

export const ModalContainer = styled.View`
    background-color: rgba(0,0,0,0.2);
    flex: 1;   
    padding: 24px;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const ModalInfo = styled.View`
    background-color: #fff;
    border-radius: 8px;
    width: 100%;
    height: 192px;
    align-items: center;
    padding: 24px;
`;

export const ModalText = styled.Text`
    color: ${({ theme }) => theme.COLORS.BASE.GRAY_200};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_S}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    margin: 20px;
    text-align: center;
`;

export const Containerbutton = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;

export const ContainerButtonCancel = styled.View`
    width: 48%;    
`; 

export const ContainerButtonRemover = styled.View`
    width: 48%;    
`; 

export const ButtonCancel = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.COLORS.BASE.WHITE};
    border: solid 1px ${({ theme }) => theme.COLORS.BASE.GRAY_100};
    border-radius: 6px;
    width: 100%;
    align-items: center;
    padding: 12px;
`;

export const ButtonDel = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_200};   
    border: solid 1px ${({ theme }) => theme.COLORS.BASE.GRAY_200}; 
    border-radius: 6px;
    width: 100%;
    align-items: center;
    padding: 12px;
`;

export const TitleCancel = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;


export const TitleDel = styled.Text`
    color: ${({ theme }) => theme.COLORS.BASE.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;