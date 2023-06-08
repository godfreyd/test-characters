import { FC, ReactNode } from "react";
import { css, Global } from "@emotion/react";
import {
  createTheme,
  ThemeProvider as MaterialThemeProvider,
} from "@mui/material/styles";

const THEME = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <MaterialThemeProvider theme={THEME}>
    <Global
      styles={css`
        html {
          font-family: "Share Tech Mono", monospace;
        }

        button {
          border: none;
          padding: 0;
          background: transparent;
          outline: none;
          color: inherit;
          cursor: pointer;
        }
      `}
    />{" "}
    {children}
  </MaterialThemeProvider>
);
