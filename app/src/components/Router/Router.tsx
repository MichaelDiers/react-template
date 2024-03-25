import { createHashRouter } from "react-router-dom";
import PageLayout from "../PageLayout/PageLayout";
import { HomeRoute } from "./Routes/HomeRoute";

/**
 * The default router used in the application.
 * The hash router is required if the applicaton is deployed to GitHub Pages.
 */
const router = createHashRouter([
  {
    element: <PageLayout />,
    children: [
      HomeRoute
    ]
  }
]);

export default router;
