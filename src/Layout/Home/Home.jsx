// import React from 'react';

import { Outlet } from "react-router-dom";
import img from "../../../img/Logo.png";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div>

            <div className="container mx-auto">
            <div className="flex justify-between mt-5 ">
          <div>
            <img src={img} alt="" />
          </div>
            <div className="flex gap-6">
                <Navbar></Navbar>
                {/* <p>Home</p>
             <p>Donation</p>
             <p>Strict</p> */}

            </div>
            </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;