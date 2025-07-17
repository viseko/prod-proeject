import { useTheme } from "./providers/ThemeProvider";
import classNames from "shared/lib/classNames";
import {AppRouter} from "./providers/router";
import { NavBar } from "widgets/NavBar";

import "./styles/index.scss";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";

const App = () => {
  const {theme} = useTheme();
  const cn = classNames("app", theme);
  
  return (
    <div className={cn}>
      <Suspense fallback="Loading..">
        <NavBar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App;