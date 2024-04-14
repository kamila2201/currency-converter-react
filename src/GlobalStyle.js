import { createGlobalStyle } from "styled-components";
import money from "./money.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        line-height: 1.5;
        font-family: "Raleway", sans-serif;
        background-image: url("${money}");
        background-size: cover;
    }
`;