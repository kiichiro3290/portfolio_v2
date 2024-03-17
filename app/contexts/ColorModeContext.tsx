import { ThemeProvider, useMediaQuery } from "@mui/material";
import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { theme } from "~/theme";
import { parseCookies, setCookie } from "nookies";

type ColorModeContextType = {
  mode: string;
  setMode: () => void;
};

export const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType
);

export const ColorModeContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [mode, setMode] = useState("light");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const systemTheme = useMediaQuery("(prefers-colors-scheme: dark)");

  useEffect(() => {
    if (isMounted) {
      setMode(parseCookies()["themes"] || (systemTheme ? "dark" : "light"));
    }
  }, [isMounted, systemTheme]);

  const toggleTheme = () => {
    const nextTheme = mode === "light" ? "dark" : "light";

    setMode(nextTheme);
    setCookie(null, "theme", nextTheme);
  };

  return (
    <ColorModeContext.Provider
      value={{
        setMode: toggleTheme,
        mode,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
