import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import About from "../../../pages/about";
import Home from "../../../pages/home";
import Service from "../../../pages/service";






export default function AppRouter() {
  return (
    <Router>
    <Routes>
  <Route   path="/" element={<About />}/>
  <Route   path="/home" element={<Home/>}/>
  <Route   path="/service" element={<Service />}/>






    </Routes> 
    </Router>
  );
}

