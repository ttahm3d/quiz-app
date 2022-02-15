import React, { useState } from "react";
import { GlobalStyle, darkTheme, lightTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";

const App = () => {
  const [theme, setTheme] = useState("lightTheme");

  const toggleTheme = () => {
    theme === "lightTheme" ? setTheme("darkTheme") : setTheme("lightTheme");
  };

  return (
    <div>
      <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
        <div className="main__container">
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} theme={theme} />
          <h1>App</h1>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
