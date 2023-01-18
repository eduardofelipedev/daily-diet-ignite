import styled from "styled-components/native";



type Props = {
    isDiet: boolean;
}



export const Container = styled.View`
    background-color: red;
    flex: 1;
`;

export const ContainerMeat = styled.View`
    background-color: #fff;
    padding: 24px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;    
    margin-top: -25px;
    width: 100%;
    flex: 1;
    justify-content: space-between;   
    
`;

export const ContainerInfoMeat = styled.View`    
    width: 100%;
    margin-top: 20px;
`;

export const ContainerButton = styled.View`    
    width: 100%;
`;

export const MeatName = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_M}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.BASE.GRAY_100};
    margin-bottom: 10px;
    text-transform: capitalize;
`;


export const MeatDescription = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_M}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.BASE.GRAY_200};
    margin-bottom: 20px;
    text-transform: capitalize;
`;

export const MeatDateAndHour = styled.Text`
    margin-bottom: 25px;
`;

export const StatusDiet = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_S}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.BASE.GRAY_100};    
`;



export const MeatTitleDateAndHour = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.BASE.GRAY_100};    
`;



export const ContainerStatus = styled.View`
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_600};
    width: 144px;    
    border-top-right-radius: 1000px;
    border-top-left-radius: 1000px;
    border-bottom-left-radius: 1000px;
    border-bottom-right-radius: 1000px;
    padding: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;


export const Status = styled.View<Props>`
    background-color: ${({ theme, isDiet }) => isDiet ? theme.COLORS.BRAND.GREEN.DARK :
    theme.COLORS.BRAND.RED.DARK};

    border-radius: 1000px;
    height: 10px;
    width: 10px;
    margin-right: 5px;
`;