import React, { createContext, useContext } from 'react'
import type { ReactNode } from 'react'

import useThemeValue from '../hooks/useThemeValues'

const settings = {
  nav: { title: 'Menu', key: 'nav', default: 'true', saveToLocalStorage: false, },
  set: { title: 'Settings', key: 'set', default: 'false', saveToLocalStorage: false, },
  theme: { title: 'Theme', key: 'theme', default: 'no item', saveToLocalStorage: true, },
  color: { title: 'Color', key: 'color', default: '#f44336', saveToLocalStorage: true, },
}

interface ThemeContextType {
    nav: { key: string, value: string, setValue: (newValue: string) => void },
    set: { key: string, value: string, setValue: (newValue: string) => void },
    theme: { key: string, value: string, setValue: (newValue: string) => void; removeValue: () => void },
    color: { key: string, value: string, setValue: (newValue: string) => void; removeValue: () => void },
    loading: boolean,
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {

    const nav = useThemeValue(settings.nav.key, settings.nav.default, settings.nav.saveToLocalStorage);
    const set = useThemeValue(settings.set.key, settings.set.default, settings.set.saveToLocalStorage);
    const theme = useThemeValue(settings.theme.key, settings.theme.default, settings.theme.saveToLocalStorage);
    const color = useThemeValue(settings.color.key, settings.color.default, settings.color.saveToLocalStorage);
    const loading = nav.loading || theme.loading || color.loading;

  return (
    <ThemeContext.Provider value={{ nav, set, theme, color, loading }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) { throw new Error('useTheme must be used within a ThemeProvider'); }
    return context;
};