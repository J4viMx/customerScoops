import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {

        @import url('https://fonts.googleapis.com/css2?family=K2D:wght@300;400;500;600;700&display=swap');
        font-family: 'K2D', sans-serif;
        line-height: 1.5;
        font-weight: 400;
        color: #000;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }   
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

`;

export default GlobalStyles;
