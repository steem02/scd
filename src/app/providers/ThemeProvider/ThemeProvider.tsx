import {
  type PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { type Theme, ThemeContext, type ThemeVariant } from './ThemeContext';

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (ctx == null) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return ctx;
}

const LOCAL_STORAGE_THEME_KEY = 'THEME-KEY';
const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeVariant) ?? 'light';

export function ThemeProvider(
  props: PropsWithChildren<Record<string, unknown>>
) {
  const [theme, setTheme] = useState<ThemeVariant>(defaultTheme);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  const themeContextValue: Theme = useMemo(
    (): Theme => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
}
