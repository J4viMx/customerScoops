// src/styles/GlobalStyles.ts
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;
        color: #000;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
    }   
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

`;

export default GlobalStyles;
