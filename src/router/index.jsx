import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Root = lazy(() => import("../pages/Root"));
const Homepage = lazy(() => import("../pages/Homepage"));
const About = lazy(() => import("../pages/About"));
const Legacy = lazy(() => import("../pages/Legacy"));
const LindenHouse = lazy(() => import("../pages/LindenHouse"));
const MixedUse = lazy(() => import("../pages/MixedUse"));
const HomeownerCare = lazy(() => import("../pages/HomeownerCare"));
const Contact = lazy(() => import("../pages/Contact"));
const Privacy = lazy(() => import("../pages/Privacy"));

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/legacy",
        element: <Legacy />,
      },
      {
        path: "/linden-house",
        element: <LindenHouse />,
      },
      {
        path: "/mixed-use",
        element: <MixedUse />,
      },
      {
        path: "/homeowner-care",
        element: <HomeownerCare />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
