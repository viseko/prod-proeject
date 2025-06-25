import {createRoot} from "react-dom/client";
import App from "app/App";
import { ThemeProvider } from "app/providers/ThemeProvider";

const rootElem = document.getElementById("root");
const root = createRoot(rootElem);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);