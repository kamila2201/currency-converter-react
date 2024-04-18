import styled from "styled-components";

export const Container = styled.main`
    flex-basis: 900px;
    padding: 20px;
    margin: 50px auto;
    background-color: ${({ theme }) => theme.color.semiTransparent};
    border-radius: 20px;
    box-shadow: 0px 0px 20px 21px ${({ theme }) => theme.color.gunPowder};
`;