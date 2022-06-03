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
import axios from "axios";
import { useEffect } from "react";
import { setBooks } from "../redux/features/bookSlices";
import { useDispatch } from "react-redux";
import Card from "../components/cards";
import Register from "../components/Register";
import { useSelector } from "react-redux";

const Routers = () => {
  const Selector = useSelector(state=>state.book)
  const dispatch = useDispatch();

  const handleApi = async() =>{
    const favIds = []
    Selector?.favBooks.forEach(item=>{
      favIds.push(item.id)
    })
    const result = await axios("https://jsonplaceholder.typicode.com/users")
    const updatedBooks = result.data.map(item=>{
      return (favIds.includes(item.id)?{...item,isFav:true}:{...item,isFav:false})
    })
      dispatch(setBooks(updatedBooks));
  }

  useEffect(() => {
    handleApi()
  }, []);

  const isLoggedIn = JSON.parse(localStorage.getItem("loginUser"));

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Navigate replace to={`${isLoggedIn ? "/books" : "/login"}`} />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<Books />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/card" element={<Card />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Routers;
