import { CssBaseline, ThemeProvider } from "@mui/material";
import { RemixBrowser } from "@remix-run/react";
import { startTransition } from "react";
import { hydrateRoot } from "react-dom/client";
import { ClientStyleCacheProvider } from "./contexts/ClientStyleContext";
// import { ColorModeContextProvider } from "./contexts/ColorModeContext";
import { theme } from "./theme";

const hydrate = () => {
  startTransition(() => {
    hydrateRoot(
      document,
      <ClientStyleCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RemixBrowser />
        </ThemeProvider>
      </ClientStyleCacheProvider>
    );
  });
};

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1);
}
