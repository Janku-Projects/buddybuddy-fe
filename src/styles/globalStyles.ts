import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: ${({ theme }) => theme.colors.blueGrey90}
    }
    
    html {
        /* root element 62.5% (which is 10px) => 1rem = 10px */
        font-size: 62.5%;
    }

    body {
        /* initial value for the font-size to be 16px or 1.6rem */
        font-size: 1.6rem;
        font-family: 'SUIT', sans-serif;
        line-height: 150%;
        letter-spacing: -0.02em;
    }

    html,
    body,
    #root {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    button {
        border: none;
        background-color: transparent;
    }

   textarea:focus, input:focus {
        outline: none;
    }
   
   .blink{
       animation: blink 1.5s step-start infinite;
   }
   
   @keyframes blink {
       0%, 100% {
           visibility: hidden;
       }
       50% {
           visibility: visible;
       }
   }
`;

export default GlobalStyles;
