import {
  BrowserRouter,
} from "react-router";

import { useTheme } from "./providers/ThemeProvider";
import classNames from "shared/lib/classNames";
import {AppRouter} from "./providers/router";
import { NavBar } from "widgets/NavBar";

import "./styles/index.scss";
import { Sidebar } from "widgets/Sidebar";

const App = () => {
  const {theme} = useTheme();
  const cn = classNames("app", theme);
  
  return (
    <BrowserRouter>
      <div className={cn}>
        <NavBar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;