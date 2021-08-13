import React, { useState } from "react";
import { colors } from "../colors";
import ThemeContext from "../contexts/Theme"

const ThemeProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const theme = toggle ? colors.theme.dark : colors.theme.light;
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleStatus: toggle,
        toggleTheme: () => setToggle(! toggle)
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;