// import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Page from "../Pages/Page";
import Donation from "../Pages/Donation";
import Staticis from "../Pages/Staticis";
import DonationPage from "../Components/DonationPage/DonationPage";


const MainRoute = createBrowserRouter([{

    path:"/",
    element:<Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element:<Page></Page>,
          loader:()=>fetch("Data.json")
        },
        {
            path:"/donation",
            element:<Donation></Donation>
        },
        {
            path:"staticis",
            element:<Staticis></Staticis>
        },
      {
        path:"/DonationPage/:id",
        element:<DonationPage></DonationPage>,
        loader:()=>fetch("Data.json")
      }

    ]
}

    // {
    //     path:"/",
    //     element:<Home></Home>
    // }
])

export default MainRoute;