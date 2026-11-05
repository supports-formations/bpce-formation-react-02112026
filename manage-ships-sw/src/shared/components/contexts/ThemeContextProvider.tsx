import { useState, type ReactNode } from "react"
import { ThemeContext } from "./models/theme-context"
import type { Theme } from "./models/context-theme"

type ThemeContextProviderProps = {
    children: ReactNode
}

const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const saveTheme = localStorage.getItem('theme');

        return saveTheme as Theme ?? 'light'
    });

    return (
        <ThemeContext.Provider value={ {current: theme, dispatch: setTheme} }>
            {children}
        </ThemeContext.Provider> 
    )
}

export default ThemeContextProvider