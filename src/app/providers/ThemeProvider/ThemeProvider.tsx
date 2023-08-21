import { PropsWithChildren, useContext, useEffect, useMemo, useState } from "react";
import { Theme, ThemeContext, ThemeVariant } from "./ThemeContext";
import { Logger } from "sass";

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (ctx == null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return ctx;
}

const LOCAL_STORAGE_THEME_KEY = "THEME-KEY";
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeVariant || "light";

export function ThemeProvider(props: PropsWithChildren<{}>) {
  let [ theme, setTheme ] = useState<ThemeVariant>(defaultTheme);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [ theme ]);

  const toggleTheme = () => {
    setTheme((theme) => theme === "light" ? "dark" : "light");
  };

  const themeContextValue: Theme = useMemo(() => ({
    theme,
    setTheme,
    toggleTheme,
  }), [ theme ]);

  return <ThemeContext.Provider value={ themeContextValue }>
    { props.children }
  </ThemeContext.Provider>;
}

function getThemeFromLocalStorage(): ThemeVariant {
  let theme = window.localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

  if (theme == null) {
    return "light";
  }
  return theme as ThemeVariant;
}