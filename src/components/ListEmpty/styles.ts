import styled from "styled-components/native";

export const Container = styled.View`
    justify-content: center;
    flex: 1;
    align-items: center;
    
   
`;


export const Message = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_M}px;
    color: ${({ theme }) => theme.COLORS.BASE.GRAY_300};
    margin-top: 100px;

`;