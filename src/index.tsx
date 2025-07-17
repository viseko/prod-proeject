import {createRoot} from "react-dom/client";
import App from "app/App";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { BrowserRouter } from "react-router";
import "shared/config/i18n/i18n";

const rootElem = document.getElementById("root");
const root = createRoot(rootElem);

root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);