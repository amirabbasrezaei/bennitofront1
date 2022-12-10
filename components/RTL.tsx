import { Box, CssBaseline, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const theme = createTheme({
  direction: "rtl"
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin]
});

export default function RTL({children})   {
  return (
    <div dir="rtl" className="h-full">
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            {children}
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
}
