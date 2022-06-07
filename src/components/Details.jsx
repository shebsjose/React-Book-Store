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
  const [errors, setErrors] = useState({});

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
    if (validate()) {
      dispatch(updateBook(details));
      navigate("/books");
    }
  };

  const validate = () => {
    const input = { ...details };
    let errors = {};
    let isValid = true;

    if (input?.name === "") {
      isValid = false;
      errors.name = "Please enter your first name";
    } else if (input.name?.length > 8) {
      isValid = false;
      errors.name = "Name cannot exceed 8 characters";
    }

    if (input?.username === "") {
      isValid = false;
      errors.name = "Please enter your last name";
    } else if (input.name?.length > 8) {
      isValid = false;
      errors.name = "Name cannot exceed 8 characters";
    }

    if (input.email === "") {
      isValid = false;
      errors.email = "Please enter your email address.";
    } else {
      const emailPattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!emailPattern.test(input.email)) {
        isValid = false;
        errors.email = "Please enter valid email address.";
      }
    }
    if (!input.phone) {
      isValid = false;
      errors.phone = "Please enter your phone number.";
    }
    if (typeof input.phone !== "undefined") {
      var phonePattern = new RegExp(/^[0-9\b]+$/);
      if (!phonePattern.test(input.phone)) {
        isValid = false;
        errors.phone = "Please enter only number.";
      } else if (input.phone.length !== 10) {
        isValid = false;
        errors.phone = "Please enter valid phone number.";
      }
    }
    setErrors(errors);
    return isValid;
  };

  return (
    <div className=" bg-white p-5 max-w-md mx-auto rounded shadow-sm  dark:bg-slate-800 dark:text-gray-400">
      <h2 className=" text-center text-orange-800 text-3xl font-semibold">
        {result === "edit" ? " Edit User Details" : "User Details"}
      </h2>
      <div className="max-w-md py-4 px-8 bg-white border-2  border-orange-400 shadow-md border-shadow-5 shadow-lg rounded-lg my-8 dark:bg-slate-800 dark:text-gray-400">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            First Name
          </label>
          <input
            className="w-full border rounded h-12 px-4 focus:outline-none dark:bg-slate-800 dark:text-gray-400"
            value={details?.name}
            name="name"
            onChange={handleChange}
            disabled={result === "view"}
          />
          {errors.name && <div className="text-red-600">{errors.name}</div>}
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Last Name
          </label>
          <input
            className="w-full border rounded h-12 px-4 focus:outline-none dark:bg-slate-800 dark:text-gray-400"
            value={details?.username}
            name="username"
            onChange={handleChange}
            disabled={result === "view"}
          />
          {errors.username && (
            <div className="text-red-600">{errors.username}</div>
          )}
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="w-full border rounded h-12 px-4 focus:outline-none dark:bg-slate-800 dark:text-gray-400"
            value={details?.email}
            name="email"
            onChange={handleChange}
            disabled={result === "view"}
          />
          {errors.email && <div className="text-red-600">{errors.email}</div>}
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {" "}
            Phone
          </label>
          <input
            className="w-full border rounded h-12 px-4 focus:outline-none dark:bg-slate-800 dark:text-gray-400"
            value={details?.phone}
            name="phone"
            onChange={handleChange}
            disabled={result === "view"}
          />
          {errors.phone && <div className="text-red-600">{errors.phone}</div>}
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
    </div>
  );
};

export default Details;
