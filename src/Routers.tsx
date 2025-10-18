import { lazy } from "react";
import { RouteObject, createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/layout";
const HomePage = lazy(() => import("./pages/home/Home"));
const Aboutpage = lazy(() => import("./pages/aboutus/aboutus"));
const Pricing = lazy(() => import("./pages/pricing/card"));
const Contact = lazy(() => import("./pages/contact/contact"));
const Documents = lazy(() => import("./pages/Additional Information/Documents/index"));
const Privacy = lazy(() => import("./pages/Additional Information/Privacy-policy/index"));
const Tou = lazy(() => import("./pages/Additional Information/terms-of-use/tou"));
const Disclaimer = lazy(() => import("./pages/Additional Information/Disclaimer/Disclaimer"));
const Methodall = lazy(() => import("./pages/method/index"));
const rootRoute: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        path: "/"
      },
      {
        path: "/about",
        element: <Aboutpage />
      },
      {
        path: "pricing",
        element: <Pricing />
      }
      ,
      {
        path: "contact",
        element: <Contact />
      },
    
      {
        path: "/privacy-policy",
        element: <Privacy />
      }
      ,
      {
        path: "/Documents",
        element: <Documents />
      },
      {
        path: "/terms-of-use",
        element: <Tou />
      }
      ,
      {
        path: "Disclaimer",
        element: <Disclaimer />
      },
      {
        path: "/phuongphapgiaoduc",
        element: <Methodall />
      }
    ]
  }
]

const router = createBrowserRouter(rootRoute);

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router;