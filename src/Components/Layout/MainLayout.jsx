import React, {useState} from "react";
import Nav from "./Nav";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
   return (
      <div className="bg-[#00040F] min-h-[200vh] h-auto relative">
         <Nav />
         <div className=" pt-[4.3rem] md:pt-[6rem]">
            <Outlet />
         </div>
      </div>
   );};

export default MainLayout;
