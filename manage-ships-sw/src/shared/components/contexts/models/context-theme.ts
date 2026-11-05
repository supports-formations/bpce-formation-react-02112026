export type Theme = 'dark' | 'light'

// export type ThemeType = {
//     theme: Theme
// }

export type CustomContextType<T> = {
    current: T,
    dispatch: React.Dispatch<React.SetStateAction<T>>
} 

export type ThemeContextType = CustomContextType<Theme>

// export type ThemeContextType = {
//     theme: Theme,
//     updateTheme: React.Dispatch<React.SetStateAction<Theme>>
// } 