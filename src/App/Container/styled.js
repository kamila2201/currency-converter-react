import styled from "styled-components";

export const StyledContainer = styled.main`
    flex-basis: 900px;
    padding: 20px;
    margin: 50px auto;
    background-color: ${({ theme }) => theme.color.semiTransparent};
    border-radius: 20px;
    -webkit-box-shadow: ${({ theme }) => theme.color.gunPowder};
    -moz-box-shadow: 0px 0px 20px 21px ${({ theme }) => theme.color.gunPowder};
    box-shadow: 0px 0px 20px 21px ${({ theme }) => theme.color.gunPowder};
`;