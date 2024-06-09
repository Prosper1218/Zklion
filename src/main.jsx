import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import MainLayout from "./Components/Layout/MainLayout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route element={<MainLayout />}>
               <Route path={"/"} element={<Home />} />
            </Route>
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
);
