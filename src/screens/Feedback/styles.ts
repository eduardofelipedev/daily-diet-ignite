import styled from "styled-components/native";


type Props = {
    isDiet: boolean;
}

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.BASE.WHITE};
    flex: 1;
    padding: 24px;    
    align-items: center;    
`;



export const Title = styled.Text<Props>`
    margin-top: 160px;
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_M}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

    color: ${({ theme, isDiet}) => isDiet ? 
    theme.COLORS.BRAND.GREEN.DARK : theme.COLORS.BRAND.RED.DARK};
    margin-bottom: 20px;
`;


export const Subtitle = styled.Text`
    margin-bottom: 20px;
    text-align: center;
`;



export const Image = styled.Image`
    margin-bottom: 20px;
`;


export const ContainerButton = styled.View`
    width: 60%;
`;



