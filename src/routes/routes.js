import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Details from "../components/Details";
import Login from "../components/Login";
import NotFound from "../components/Notfound";
import Books from "../components/Books";
import NavBar from "../components/NavBar";
import Register from "../components/Register";


const Routers = () => {

  const isLoggedIn = JSON.parse(localStorage.getItem("loginUser"));
  console.log(isLoggedIn)

  return (
    <Router>
      <NavBar />
      <Routes>
        {isLoggedIn ? <>
          <Route
            path="/"
            replace
            element={
              <Navigate to="/books" />
            }
          />
          <Route path="/books" element={<Books />} />
          <Route path="/details/:id" element={<Details />} />
        </> : 
        <>
         <Route
            path="/"
            replace
            element={
              <Navigate to="/login" />
            }
          />
          <Route path="/login" element={<Login />} />
        </>
        }
        <Route path="/register" element={<Register />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default Routers;
