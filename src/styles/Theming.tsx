import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";
import { theme } from "./theme";

interface ThemeProps {
  children: ReactNode;
}

const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
