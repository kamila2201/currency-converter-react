import styled from "styled-components";

export const StyledFooter = styled.footer`
    text-align: center;
    font-size: 15px;
    font-weight: 500;
`;

export const Link = styled.a`
    margin-left: 5px;
    color: ${({theme}) => theme.color.seaGreen};
    text-decoration: none;
    transition: color .3s;

    &:hover {
        color: ${({theme}) => theme.color.froly};
    }
`;