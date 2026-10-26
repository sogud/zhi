import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { DocsApp } from "./DocsApp";
import "@fontsource-variable/noto-sans-sc";
import "@fontsource-variable/noto-serif-sc";
import "./styles.css";
import "./docs.css";

const root = document.getElementById("root");
if (!root) throw new Error("Missing application root");
createRoot(root).render(
  <StrictMode>
    {location.pathname.endsWith("/playground/") ? <App /> : <DocsApp />}
  </StrictMode>,
);
