import React from "react";
import "./Layout.scss"
import Navbars from "../Navbar/Navbars";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    
      <div className="layout">
        <div className="navbar">
          <Navbars />
        </div>
        <div className="content">
           <Outlet/>
        </div>
         
      </div>
    
  );
}

export default Layout;
