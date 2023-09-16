import { ReactNode, useContext, useEffect, useState } from "react"
import ThemeContext from "../contexts/ThemeContext"
import ThemeType from "../types/ThemeType"

const ThemeContextProvider = (
    {children}: {
        children: ReactNode
    }
) => {

    const [theme, setTheme] = useState<ThemeType>('light');

    const toggleTheme = () => {
        if(theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
            addClassDark();
            return;
        }
        setTheme('light');
        localStorage.setItem('theme', 'light');
        removeClassDark();
    }

    useEffect(() => {
        const localTheme : ThemeType | null = localStorage.getItem('theme') as ThemeType;

        if (localTheme) {
            setTheme(localTheme);
            localTheme === 'dark' ? addClassDark() : removeClassDark();
            return;
        } 
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
            addClassDark();
        }
    },[]);

    const provider : JSX.Element = <>
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
    </>
  return provider;
}

const removeClassDark = () => 
    document.documentElement.classList.remove('dark')

const addClassDark =() => 
    document.documentElement.classList.add('dark')

export const UseThemeContextProvider = () => {
    const context = useContext(ThemeContext);
    if(!context) throw new Error("UseThemeContextProvider must be used within ThemeContextProvider");
    return context;
}

export default ThemeContextProvider;