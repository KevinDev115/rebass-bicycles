/** @jsxImportSource theme-ui */
import * as React from "react";
import MainLayout from "./layouts/MainLayout";
import ThemeProvider from "./providers/ThemeProvider";
import "./assets/css/app.css";

function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
