/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";

export const theme = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#000",
    secondary: "#f5e342",
    green: "#2aa819",
  },
};

export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
