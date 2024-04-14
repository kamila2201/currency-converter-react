import styled from "styled-components";

export const StyledFooter = styled.footer`
    margin-top:10px;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
`;

export const Link = styled.a`
    margin-left: 5px;
    color: ${({theme}) => theme.color.seaGreen};
    text-decoration: none;

    &:hover {
        color: ${({theme}) => theme.color.froly};
    }
`;