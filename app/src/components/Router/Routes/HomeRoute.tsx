import { RouteObject } from "react-router";
import Home from "../../../pages/Home/Home";
import IRouteObjectHandle from "../../../types/IRouteObjectHandle";

/**
 * The handle used for the HomeRoute.
 */
const homeRouteHandle: IRouteObjectHandle = {
  displayText: 'home',
  link: 'home',
  title: 'home'
}

/**
 * The home route and its route handle.
 */
const HomeRoute: RouteObject = {
  path: '/',
  element: <Home />,
  handle: homeRouteHandle
};

export {
  HomeRoute,
  homeRouteHandle
};
