import { createBrowserRouter } from "react-router-dom";

import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Blogs from "../Pages/Blogs";
import CountryDetails from "../Pages/CountryDetails";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <h2>Error</h2>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/blogs",
            element: <Blogs/>
        },
        {
          path: "/countrydetails/:nameId",
          element: <CountryDetails/>,
          loader:()=>{fetch("https://restcountries.com/v3.1/all")}
      },
      ]
    },
  ]);

export default Router;


