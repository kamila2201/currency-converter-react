import styled from "styled-components";

export const Wrapper = styled.div`
    min-height: 70px;
    padding:20px;
    margin:10px;
    text-align: center;
`;

export const ResultText = styled.strong`
    padding-left: 5px;
    color: ${({ theme }) => theme.color.seaGreen};
`;

export const Text = styled.p`
    margin:0;
    padding: 0;
`;