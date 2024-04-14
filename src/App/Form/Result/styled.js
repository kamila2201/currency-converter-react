import styled from "styled-components";

export const Wrapper = styled.p`
    text-align: center;
`;

export const Text = styled.strong`
    padding-left: 5px;
    color: ${({theme}) => theme.color.seaGreen};
`;