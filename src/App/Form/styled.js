import styled from "styled-components";

export const StyledForm = styled.form`
    margin: 20px 20px 0;
    padding: 10px 10px 0;
    font-size: 20px;
`;

export const Fieldset = styled.fieldset`
    border: 2px solid ${({ theme }) => theme.color.seaGreen};
    border-radius: 5px;
`;

export const Legend = styled.legend`
    padding: 10px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.seaGreen};
    border-radius: 5px;
`;

export const LabelText = styled.span`
    display: inline-block;
    margin-right: 5px;
    width: 100%;
    max-width: 300px;
    font-weight: 500;
`;

export const Field = styled.input`
    padding: 10px;
    width: 100%;
    max-width: 400px;
    font-weight: 700;
    border: 2px solid ${({ theme }) => theme.color.black};
    border-radius: 5px;
    box-shadow: 0px 0px 9px 3px ${({ theme }) => theme.color.gunPowder};

    &:required {
        border-width: 4px;
    }
    &:invalid {
        background-color: ${({ theme }) => theme.color.mandysPink};
    }
`;

export const End = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    flex-basis:300px;
    margin-top: 10px;
    padding: 10px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.seaGreen};;
    border: none;
    border-radius: 5px;
    transition: filter .3s;

    &:hover{
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;


