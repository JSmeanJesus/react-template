import React, { FC , useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

//new one in react 18
interface ThemeProviderProps  {
    children: React.ReactNode;
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Light;

const ThemeProvider: FC<ThemeProviderProps>  = ({ children }) => {
const [theme, setTheme] = useState<Theme>(defaultTheme);


const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme
}), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
            {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;