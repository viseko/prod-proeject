import {MainPage} from "pages/Mainpage";
import {AboutPage} from "pages/AboutPage";
import { FC } from "react";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

interface RouteInterface {
  path: string,
  Component: FC
}

export const routeConfig: Record<AppRoutes, RouteInterface> = {
  [AppRoutes.MAIN]: {
    path: "/",
    Component: MainPage
  },
  [AppRoutes.ABOUT]: {
    path: "/about",
    Component: AboutPage
  },
};