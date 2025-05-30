import {
  BrowserRouter,
  NavLink,
  Routes,
  Route
} from "react-router";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";

const routes = [
  {
    path: "/",
    Component: MainPage
  },
  {
    path: "/about",
    Component: AboutPage
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
        <Routes>
          {routes.map(route => <Route key={route.path} path={route.path} Component={route.Component}/>)}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App