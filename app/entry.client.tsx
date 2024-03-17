/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { CssBaseline } from "@mui/material";
import { RemixBrowser } from "@remix-run/react";
import { startTransition } from "react";
import { hydrateRoot } from "react-dom/client";
import { ClientStyleCacheProvider } from "./contexts/ClientStyleContext";
import { ColorModeContextProvider } from "./contexts/ColorModeContext";

const hydrate = () => {
  startTransition(() => {
    hydrateRoot(
      document,
      <ClientStyleCacheProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <RemixBrowser />
        </ColorModeContextProvider>
      </ClientStyleCacheProvider>
    );
  });
};

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  setTimeout(hydrate, 1);
}
