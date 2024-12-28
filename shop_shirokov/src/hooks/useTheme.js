import React, { createContext, useContext, useEffect, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material';


const ThemeContext = createContext();


export function useTheme() {
  return useContext(ThemeContext);
};


const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#8e11de",
      light: "#cd99f0",
      dark: "#6612d2",
    },
  },
});


export function ThemeContextProvider({ children }) {
  return (
    <ThemeProvider theme={lightTheme}>
      {children}
    </ThemeProvider>
  );
}
