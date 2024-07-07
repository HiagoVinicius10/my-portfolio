import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main:  "#ffff",
      },
      secondary: {
        main: "#e53939",
      },
    },
    typography: {
        fontFamily: "Helvetica Neue",
    }
  });

theme = responsiveFontSizes(theme);
  
  export default theme;


  /*
        Sugestões De fonts
    
        *  Helvetica Neue,
        * -apple-system,
        * BlinkMacSystemFont,
        * Segoe UI,
        * Roboto,
        * Arial
        * sans-serif,
        * Apple Color Emoji,
        * Segoe UI Emoji
        * Segoe UI Symbol.
  
  */