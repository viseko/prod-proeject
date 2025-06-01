import {
  BrowserRouter,
  NavLink,
  Routes,
  Route
} from "react-router";
import { Suspense } from "react";

import useTheme from "./theme/useTheme";

import MainPageAsync from "./pages/Mainpage/MainPage.async";
import AboutPageAsync from "./pages/AboutPage/AboutPage.async";

import "./styles/index.scss";
import classNames from "./helpers/classNames";

const routes = [
  {
    path: "/",
    Component: MainPageAsync
  },
  {
    path: "/about",
    Component: AboutPageAsync
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