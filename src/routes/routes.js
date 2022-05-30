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
import FavoriteList from "../components/FavoriteList";
import axios from "axios";
import { useEffect, useState } from "react";
import { setBooks } from "../redux/features/bookSlices";
import { useDispatch } from "react-redux";
import Users from "../components/User";

const Routers = () => {
  
  const dispatch = useDispatch();
  const admin = JSON.parse(localStorage.getItem("loginUser"));
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        dispatch(setBooks(res.data));
      })
      .catch((error) => console.log(error));
  }, []);


  const handleToggle = () => {
    localStorage.removeItem("theme");
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "white";
    }
  };
  
    return (
      <div>
        <Router>
          <NavBar handleToggle={handleToggle} theme={theme}/>
          <Routes>
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route path="/users" element={<Users theme={theme} />} />
            <Route path="/login" element={<Login theme={theme}/>} />
            <Route path="/books" element={<Books theme={theme} />} />
            <Route path="/favorites" element={<FavoriteList theme={theme}/>} />
            <Route path="/details/:id" element={<Details theme={theme} />} />
            <Route path="notfound" element={<NotFound/>} />   
          </Routes>
        </Router>
      </div>
    );
  };
  
  export default Routers;