import React from "react"; 
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes.tsx";
import "@mantine/core/styles.css";

import {
  MantineProvider,
  createTheme,
  virtualColor,
  ColorSchemeScript,
} from "@mantine/core";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  colors: {
    muay: virtualColor({
      name: "muay",
      light: "violet",
      dark: "yellow",
    }),
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorSchemeScript defaultColorScheme="light" />
    <MantineProvider theme={theme} defaultColorScheme="light">
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
