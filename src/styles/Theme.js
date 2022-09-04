import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      light: "#52c7b8",
      main: "#009688",
      dark: "#00675b",
      contrastText: "#ffff",
    },
    secondary: {
      light: "#ffffff",
      main: "#ffede1",
      dark: "#ccbbaf",
      contrastText: "#0000",
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

export default theme;
