// ThemeToggle.js
import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-colors duration-300"
    >
      {isDarkMode ? (
        <FiMoon className="text-yellow-300 w-6 h-6" />
      ) : (
        <FiSun className="text-yellow-500 w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
