import React, { Suspense, useState } from "react";
import { GlobalStyle, darkTheme, lightTheme } from "./styles/theme";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import Router from "./router/router";

const App = () => {
  const [theme, setTheme] = useState("lightTheme");

  const toggleTheme = () => {
    theme === "lightTheme" ? setTheme("darkTheme") : setTheme("lightTheme");
  };

  return (
    <div>
      <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Suspense fallback="Loading...">
          <BrowserRouter>
            <Page>
              <Header toggleTheme={toggleTheme} theme={theme} />
              <Router />
            </Page>
          </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </div>
  );
};

export default App;

const Page = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: 1rem;
`;
