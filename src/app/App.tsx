import {
  BrowserRouter,
  NavLink,
  Routes,
  Route
} from "react-router";


import { Suspense } from "react";
import { useTheme } from "./providers/ThemeProvider";
import {MainPage} from "pages/Mainpage";
import {AboutPage} from "pages/AboutPage";
import classNames from "shared/lib/classNames";

import "./styles/index.scss";

const routes = [
  {
    path: "/",
    Component: MainPage
  },
  {
    path: "/about",
    Component: AboutPage
  },
];

const App = () => {
  const {theme, toggleTheme} = useTheme();

  const cn = classNames("app", theme);
  
  return (
    <div className={cn}>
      <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <button onClick={toggleTheme}>{theme}</button>
        </nav>
        <Suspense fallback={ <div>Загрузка...</div> }>
          <Routes>
            {
            routes.map(route => 
              <Route
                key={route.path}
                path={route.path}
                Component={route.Component}
              />)}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App