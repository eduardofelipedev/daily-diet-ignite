import styled from "styled-components/native";



export const Container = styled.View`
    width: 100%;
`;


export const Error = styled.Text`
    color: ${({ theme }) => theme.COLORS.BRAND.RED.DARK};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
