import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Details from "../components/Details";
import Home from "../components/Home";
import Login from "../components/Login";
import NotFound from "../components/Notfound";

import Books from "../components/Books";

const Routers = () => {
   
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/books" element={<Books/>} />
            <Route path="/details/:id" element={<Details/>} />
            <Route path="notfound" element={<NotFound/>} />
          </Routes>
        </Router>
      </div>
    );
  };
  
  export default Routers;