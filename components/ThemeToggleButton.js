// components/ThemeToggleButton.js
import React, { useContext } from 'react';
import { Button } from 'react-native-paper';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggleButton = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <Button onPress={toggleTheme} mode="contained">
      Switch to {theme.mode === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
};

export default ThemeToggleButton;