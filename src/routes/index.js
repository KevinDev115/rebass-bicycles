import { Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
];

export const generateRoutes = () =>
  routes &&
  routes.map((item) => (
    <Route key={item.path} path={item.path} element={item.element} />
  ));

export default routes;
