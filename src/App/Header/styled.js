import styled from "styled-components";

export const Title = styled.h1`
    text-align: center;
    font-size: 40px;
    color: ${({ theme }) => theme.color.seaGreen};

    @media (max-width: ${({theme})=> theme.breakpoint.mobileMax}px){
        font-size: 30px;
    }
`;