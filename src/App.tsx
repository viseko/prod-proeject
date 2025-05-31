import {
  BrowserRouter,
  NavLink,
  Routes,
  Route
} from "react-router";
import MainPageAsync from "./pages/Mainpage/MainPage.async";
import AboutPageAsync from "./pages/AboutPage/AboutPage.async";
import { Suspense } from "react";

const routes = [
  {
    path: "/",
    Component: MainPageAsync
  },
  {
    path: "/about",
    Component: AboutPageAsync
  },
]

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
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
    </>
  )
}

export default App