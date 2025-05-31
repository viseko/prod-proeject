import {createRoot} from "react-dom/client";
import App from "./App";
import ThemeProvider from "./theme/ThemeProvider";

const rootElem = document.getElementById("root");
const root = createRoot(rootElem);

root.render(<ThemeProvider><App /></ThemeProvider>);