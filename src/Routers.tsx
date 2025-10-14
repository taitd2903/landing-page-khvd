import { lazy } from "react";
import { RouteObject, createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/layout";
const HomePage = lazy(() => import("./pages/home/Home"));
const Aboutpage = lazy(() => import("./pages/aboutus/aboutus"));
const Location = lazy(() => import("./pages/location/index"));
const Pricing = lazy(() => import("./pages/pricing/card"));
const Contact = lazy(() => import("./pages/contact/contact"));
const Map3d = lazy(() => import("./pages/services/image3d"));
const Streetview = lazy(() => import("./pages/services/street-view"));
const Staticmap = lazy(() => import("./pages/services/staticmap/index"));
const Mapdataset = lazy(() => import("./pages/services/mapdataset/index"));
const Autofill = lazy(() => import("./pages/services/autofill/index"));
const Geolocation = lazy(() => import("./pages/services/geolocation/index"));
const Selfdriving = lazy(() => import("./pages/solution/selfdriving/index"));
const Taxmanagement = lazy(() => import("./pages/solution/taxmanagement/index"));
const Immersive = lazy(() => import("./pages/solution/immersiveexperience"));
const Object = lazy(() => import("./pages/solution/objectdetection/index"));
const Grid = lazy(() => import("./pages/solution/gridmanagement/index"));
const OpenStreetMap = lazy(() => import("./pages/resources/openstreetmap/index"));
const OpenMap = lazy(() => import("./pages/resources/openmap/index"));
const Opendata = lazy(() => import("./pages/solution/opendata/index"));
const Documents = lazy(() => import("./pages/Additional Information/Documents/index"));
const Privacy = lazy(() => import("./pages/Additional Information/Privacy-policy/index"));
const Tou = lazy(() => import("./pages/Additional Information/terms-of-use/tou"));
const Disclaimer = lazy(() => import("./pages/Additional Information/Disclaimer/Disclaimer"));
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
        path: "/service/3d-images",
        element: <Map3d />
      },
      {
        path: "/service/street-view",
        element: <Streetview />
      }
  
      ,
      {
        path: "pricing",
        element: <Pricing />
      }
      ,
      {
        path: "contact",
        element: <Contact />
      }
      ,
      {
        path: "/service/static-map",
        element: <Staticmap />
      }
      ,
      {
        path: "/service/route-calculation",
        element: <Staticmap />
      }
      ,
      {
        path: "/service/map-dataset",
        element: <Mapdataset />
      }
      ,
      {
        path: "/service/auto-fill",
        element: <Autofill />
      }
      ,
      {
        path: "/service/geolocation",
        element: <Geolocation />
      }
    
      ,
      {
        path: "/solution/self-driving",
        element: <Selfdriving />
      }
       ,
      {
        path: "/solution/tax-management",
        element: <Taxmanagement />
      }
      ,
      {
        path: "/solution/immersive-experience",
        element: <Immersive />
      },
      {
        path: "/solution/ideal-location",
        element: <Location />
      },
      {
        path: "/solution/object-detection",
        element: <Object />
      },
      {
        path: "/solution/grid-management",
        element: <Grid />
      }
      ,
      {
        path: "/solution/open-data",
        element: <Opendata />
      }
      ,
      {
        path: "/OpenStreetMap",
        element: <OpenStreetMap />
      }
      ,
      {
        path: "/openmap",
        element: <OpenMap />
      } ,
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
      }
    ]
  }
]

const router = createBrowserRouter(rootRoute);

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router;