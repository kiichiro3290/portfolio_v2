import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import * as React from "react";

export interface ClientStyleContextData {
  reset: () => void;
}

interface ClientCacheProviderProps {
  children: React.ReactNode;
}

export const ClientStyleContext = React.createContext<ClientStyleContextData>({
  reset: () => {},
});

const createEmotionCache = () => {
  return createCache({ key: "css" });
};

export const ClientStyleCacheProvider = ({
  children,
}: ClientCacheProviderProps) => {
  const [cache, setCache] = React.useState(createEmotionCache());

  const clientStyleContextValue = React.useMemo(
    () => ({
      reset() {
        setCache(createEmotionCache());
      },
    }),
    []
  );

  return (
    <ClientStyleContext.Provider value={clientStyleContextValue}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
};
