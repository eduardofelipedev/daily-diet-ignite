import styled from "styled-components/native";



export const Container = styled.View`        
    align-items: center;    
    padding: 24px;
    flex: 1;    
`;


export const Titlegeneral = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.BASE.GRAY_100};
    margin-top: 20px;    
`;


export const ContainerSequence = styled.View`
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_600};
    margin-top: 20px;
    padding: 16px;
`;

export const TitleCountSequence = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_M}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.BASE.GRAY_100};
`;


export const TitleSequence = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_S}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.BASE.GRAY_200};
    margin-top: 10px;
`;


export const ContainerInsideAndOff = styled.View`
    flex-direction: row;
    margin-top: 20px;
    justify-content: space-between;
    width: 100%;
`;

export const ContainerInsideDiet = styled.View`   
    background-color: ${({ theme }) => theme.COLORS.BRAND.GREEN.LIGHT};
    height: 107px;
    border-radius: 8px;
    width: 48%;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;


export const TitleCountInsideDiet = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_M}px;
    font-family: ${({ theme}) => theme.FONT_FAMILY.BOLD};    
`;

export const TitleInsideDiet = styled.Text`
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_S}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.BASE.GRAY_200};
`;



export const ContainerOffDiet = styled.View`
    padding: 20px;
    justify-content: center;
    align-items: center;    
    background-color: ${({ theme }) => theme.COLORS.BRAND.RED.LIGHT};
    height: 107px;
    border-radius: 8px;
    width: 48%;
`;


export const TitleCountOffDiet = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_M}px;
    font-family: ${({ theme}) => theme.FONT_FAMILY.BOLD};
`;


export const TitleOffDiet = styled.Text`
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_S}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.BASE.GRAY_200};
`;


export const ContainerMeats = styled.View`
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_600};
    margin-top: 20px;
    padding: 16px;
`;




export const TitleCountMeats = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_M}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.BASE.GRAY_100};
`;



export const TitleMeatsRegistered = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_S}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.BASE.GRAY_200};
    margin-top: 10px;
`;