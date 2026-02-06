import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { light, dark } from '../styles/themes';

type ThemeName = 'light' | 'dark';
type Theme = typeof light;

interface ThemeContextType {
  name: ThemeName;
  colors: Theme;
  toggle: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  name: 'light',
  colors: light,
  toggle: () => {},
  isDark: false,
});

const THEME_STORAGE_KEY = '@app_theme';

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [name, setName] = useState<ThemeName>('light');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      if (savedTheme === 'light' || savedTheme === 'dark') {
        setName(savedTheme);
      }
    } catch (error) {
      console.error('Failed to load theme:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggle = async () => {
    const newTheme: ThemeName = name === 'light' ? 'dark' : 'light';
    setName(newTheme);
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch (error) {
      console.error('Failed to save theme:', error);
    }
  };

  const colors = name === 'light' ? light : dark;
  const isDark = name === 'dark';

  if (isLoading) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ name, colors, toggle, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);