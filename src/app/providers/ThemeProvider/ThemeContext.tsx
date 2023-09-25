import { createContext, type Dispatch, type SetStateAction } from 'react';

export type ThemeVariant = 'light' | 'dark';

export interface Theme {
  theme: ThemeVariant

  setTheme: Dispatch<SetStateAction<ThemeVariant>>

  toggleTheme: () => void
}

export const ThemeContext = createContext<Theme | null>(null);
