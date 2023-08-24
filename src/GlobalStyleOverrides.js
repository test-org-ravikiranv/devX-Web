import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export default function GlobalStyleOverrides() {
  const theme = createTheme({       
    typography: {
      fontFamily: [
        "'Open Sans', sans-serif",
      ].join(','),         
      body: {
        fontFamily: "'Open Sans', sans-serif",
      },
    },
  });

  return responsiveFontSizes(theme);
}