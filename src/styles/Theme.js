import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      light: "#52c7b8",
      main: "#009688",
      dark: "#00675b",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ffffff",
      main: "#ffede1",
      dark: "#ccbbaf",
      contrastText: "#000000",
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        color: "#fff",
        underline: "hover",
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
