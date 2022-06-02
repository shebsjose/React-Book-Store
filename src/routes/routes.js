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
import { useEffect } from "react";
import { setBooks } from "../redux/features/bookSlices";
import { useDispatch } from "react-redux";
import Card from "../components/cards";

const Routers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        dispatch(setBooks(res.data));
      })
      .catch((error) => console.log(error));
  }, []);

  const admin = JSON.parse(localStorage.getItem("loginUser"));
  console.log(admin);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/books" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<Books />} />
        <Route path="/favorites" element={<FavoriteList />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/card" element={<Card />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Routers;
