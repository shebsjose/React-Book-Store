/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateBook } from "../redux/features/bookSlices";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state;

  const { id } = useParams();
  const books = useSelector((state) => state.book.books);
  const userDetails = books && books.filter((d) => d.id === Number(id))[0];

  const [details, setDetails] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    setDetails({
      id: userDetails.id,
      name: userDetails.name,
      username: userDetails.username,
      email: userDetails.email,
      phone: userDetails.phone,
    });
  }, []);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(updateBook(details));
    navigate("/books");
  };
  return (
    <div className="bg-white p-5 max-w-md mx-auto rounded shadow-sm  dark:bg-slate-800 dark:text-gray-400">
      <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div className="flex justify-center md:justify-end -mt-16">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-orange-500"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          />
        </div>
        <div>
          <h2 className="text-orange-800 text-3xl font-semibold">
            Details Page
          </h2>
          <input
            className="mt-2 text-orange-600 text-xl font-medium text-color-500"
            value={details?.name}
            name="name"
            onChange={handleChange}
            disabled={result === "view"}
          />
          <input
            className="mt-2 text-gray-600"
            value={details?.username}
            name="username"
            onChange={handleChange}
            disabled={result === "view"}
          />
          <input
            className="mt-2 text-gray-600"
            value={details?.email}
            name="email"
            onChange={handleChange}
            disabled={result === "view"}
          />
          <input
            className="mt-2 text-gray-600"
            value={details?.phone}
            name="phone"
            onChange={handleChange}
            disabled={result === "view"}
          />
        </div>
        <br></br>
        {result === "edit" && (
          <button
            className="text-white bg-orange-600 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-500 focus:outline-none dark:focus:ring-orange-600"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Details;
