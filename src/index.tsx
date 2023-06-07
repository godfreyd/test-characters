import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { css, Global } from "@emotion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/Theme";
import RequestProvider from "./services/request/provider";

const IndexPage = lazy(() => import("./pages"));
const CharacterPage = lazy(() => import("./pages/character"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Global
      styles={css`
        html,
        body,
        #root {
          height: 100%;
          background-color: hsl(216, 19%, 89%);
        }
      `}
    />
    <ThemeProvider>
      <RequestProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/character/:id" element={<CharacterPage />} />
          </Routes>
        </BrowserRouter>
      </RequestProvider>
    </ThemeProvider>
  </React.StrictMode>
);
