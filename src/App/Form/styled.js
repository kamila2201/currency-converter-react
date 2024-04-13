import styled from "styled-components";

export const StyledForm = styled.form`
    margin: 20px;
    padding: 10px;
    font-size: 20px;
`;

export const Fieldset = styled.fieldset`
    border: 2px solid #296e54;
    border-radius: 5px;
`;

export const Legend = styled.legend`
    padding: 10px;
    color: white;
    background-color: #296e54;
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
    border: 2px solid black;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 9px 3px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 0px 9px 3px rgba(66, 68, 90, 1);
    box-shadow: 0px 0px 9px 3px rgba(66, 68, 90, 1);

    &:required {
        border-width: 4px;
    }
    &:invalid {
        background-color: rgb(242, 183, 183);
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
    color: white;
    background-color: #296e54;
    border: none;
    border-radius: 5px;

    &:hover{
        background-color: #598c79;
    }

    &:active {
        border: 2px solid #296e54;
    }
`;


