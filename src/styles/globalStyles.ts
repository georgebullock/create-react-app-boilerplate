import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

    html {
        font-size: 37.5%;
    }

    body {
        text-rendering: geometricPrecision;
        font-size: 1rem;
    }

`;
