import {
  BrowserRouter,
  NavLink,
} from "react-router";


import { useTheme } from "./providers/ThemeProvider";
import classNames from "shared/lib/classNames";

import "./styles/index.scss";
import {AppRouter} from "./providers/router";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  const cn = classNames("app", theme);
  
  return (
    <BrowserRouter>
      <div className={cn}>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <button onClick={toggleTheme}>{theme}</button>
        </nav>
        <AppRouter />
      </div>
    </BrowserRouter>
  )
}

export default App;