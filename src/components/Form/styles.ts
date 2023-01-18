import styled from "styled-components/native";


export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.BASE.WHITE};    
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    flex: 1;
    margin-top: -20px;      
    width: 100%;
    padding: 24px 24px 0px 24px;    
    justify-content: space-between;    
`;

export const Fields = styled.View`
 
`;


export const ContainerDateAndHour = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;   
`;

export const ContainerDate = styled.View`
    width: 46%;
`; 

export const ContainerHour = styled.View`
    width: 46%;
`;

export const TitleQuestion = styled.Text`
    margin-top: 20px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
    margin-bottom: 5px;    
    color: ${({ theme }) => theme.COLORS.BASE.GRAY_200};
`;

export const ContainerButton = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;   
`;

export const TitleName = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
    margin-bottom: 5px;
    margin-top: 10px;
    color: ${({ theme }) => theme.COLORS.BASE.GRAY_200};
`;

export const TitleDescription = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
    margin-bottom: 5px;
    margin-top: 10px;
    color: ${({ theme }) => theme.COLORS.BASE.GRAY_200};
`;

