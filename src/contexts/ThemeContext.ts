import { createContext } from "react";
import ThemeType from "../types/ThemeType";

type ThemeContextType = {
    theme: ThemeType;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export default ThemeContext;