// import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className="flex gap-5">
                    <li>
                    <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
  }
>
  Home
</NavLink>
                    </li>

                    <li>
                    <NavLink
  to="/donation"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
  }
>
  Donation
</NavLink>
                    </li>

                    <li>
                    <NavLink
  to="/staticis"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
  }
>
Statistics
</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;