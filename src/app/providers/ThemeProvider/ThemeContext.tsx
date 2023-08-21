import { createContext } from "react";

export type ThemeVariant = "light" | "dark";

export interface Theme {
  theme: ThemeVariant;

  setTheme(value?: ThemeVariant): void;

  toggleTheme(): void;
}

export const ThemeContext = createContext<Theme | null>(null);