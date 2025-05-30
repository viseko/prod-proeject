import {createRoot} from "react-dom/client";
import "./index.scss"

const rootElem = document.getElementById("root");
const root = createRoot(rootElem);

root.render(<h1>Hello, world</h1>);