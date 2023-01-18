import styled from "styled-components/native";



export const Container = styled.View`
    flex: 1;   
`;

export const ContainerButtonAdd = styled.View`    
    justify-content: flex-end;    
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BASE.WHITE};
    width: 100%;
    padding: 24px;
`;

