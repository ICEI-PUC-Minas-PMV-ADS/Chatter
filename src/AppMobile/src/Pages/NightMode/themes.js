import React, { createContext, useContext, useEffect, useState } from 'react';
import { lightColors, darkColors } from './colors';
import { Appearance, useColorScheme } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";


export const ThemeContext = createContext({
  dark: false,
  colors: lightColors,
});

export const ThemeProvider = (props) => {
    const colorScheme = useColorScheme();
    const [isDark, setIsDark] = useState(null);
  
    useEffect(() => {
      const getStoredTheme = async () => {
        try {
          const storedTheme = await AsyncStorage.getItem("theme");
          if (storedTheme !== null) {
            setIsDark(storedTheme === "dark");
          } else {
            setIsDark(colorScheme === "dark");
          }
        } catch (error) {
          console.log("Error retrieving theme from storage:", error);
          setIsDark(colorScheme === "dark");
        }
      };
  
      getStoredTheme();
    }, [colorScheme]);
  
    const toggleTheme = async () => {
      try {
        const newTheme = isDark ? "light" : "dark";
        await AsyncStorage.setItem("theme", newTheme);
        setIsDark(!isDark);
      } catch (error) {
        console.log("Error storing theme in storage:", error);
      }
    };
  
    const theme = {
      dark: isDark,
      colors: isDark ? darkColors : lightColors,
      toggleTheme: toggleTheme,
    };
  
    return (
      <ThemeContext.Provider value={theme}>
        {props.children}
      </ThemeContext.Provider>
    );
  };
  
  

export const useTheme = () => {
    const { dark, colors, toggleTheme } = useContext(ThemeContext);
  
    return { dark, colors, toggleTheme };
  };
