import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Dancing Script", "cursive"].join(","),
    fontSize: 26,
    button: { textTransform: "none" },
  },
  palette: {
    text: {
      primary: "#e5e7eb",
    },
    primary: {
      main: "#e5e7eb",
    },
    background: {
      paper: "#000",
      default: "#000",
    },
  },
});
