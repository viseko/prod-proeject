import { Suspense } from "react";
import { Routes, Route } from "react-router";
import { routeConfig } from "shared/config/routeConfig";

const routes = Object.values(routeConfig);

const AppRouter = () => {
  return (
    <Suspense fallback={ <div>Ждём-с...</div> }>
      <Routes>
        {
        routes.map(({path, Component}) => 
          <Route
            key={path}
            path={path}
            Component={Component}
          />)}
      </Routes>
    </Suspense>
  )
}

export default AppRouter