import { createGlobalStyle } from "styled-components";
import {
  gray,
  blue,
  red,
  green,
  sage,
  sageDark,
  grayDark,
  blueDark,
  redDark,
  greenDark,
} from "@radix-ui/colors";

export const lightTheme = {
  colors: {
    ...sage,
    ...gray,
    ...blue,
    ...red,
    ...green,
  },
};

export const darkTheme = {
  colors: {
    ...sageDark,
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
};

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
  }

  :root {
    --font-family-open-sans: 'Open Sans', sans-serif;
    --font-family-poppins: "Poppins", sans-serif;
    --font-family-lato-sans: "Lato Sans", sans-serif;

  }

  img {
    max-width: 100%;
  }

  input, button {
    font-family: inherit;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
  }

  body {
    margin: 0;
    font-family: var(--font-family-poppins);
    background-color:  ${(props) => props.theme.colors.sage1};
    color: ${(props) => props.theme.colors.gray12}; 
    font-size: 1rem;
  }

  .main__container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

`;
