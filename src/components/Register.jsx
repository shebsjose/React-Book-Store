import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/features/userSlices";

const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const [inputValues, setInputValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(addUser(inputValues));
      setInputValues({});
      navigate("/login");
    }
  };
  const validate = () => {
    const input = { ...inputValues };
    let errors = {};
    let isValid = true;

    if (input?.name === "") {
      isValid = false;
      errors.name = "Please enter User Name";
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
    if (input.password === "") {
      isValid = false;
      errors.password = "Please enter your password.";
    } else {
      if (input.password.length > 6) {
        isValid = false;
        errors.password = "Please enter six length password.";
      }
    }
    setErrors(errors);
    return isValid;
  };

  return (
    <div className="bg-white p-5 max-w-md mx-auto rounded shadow-sm dark:bg-slate-800 dark:text-gray-400">
      <h2 className="text-4xl px-4 ">Register</h2>
      <form className="mt-10 space-y-8" onSubmit={handleSubmit}>
        <input
          className="w-full border rounded h-12 px-4 focus:outline-none"
          placeholder="UserName "
          type="text"
          name="name"
          value={inputValues.name}
          onChange={handleChange}
        />{" "}
        {errors.name && <div className="text-red-600">{errors.name}</div>}
        <input
          className="w-full border rounded h-12 px-4 focus:outline-none"
          placeholder="Email Address "
          type="email"
          name="email"
          value={inputValues.email}
          onChange={handleChange}
        />
        {errors.email && <div className="text-red-600">{errors.email}</div>}
        <div className="flex items-center ">
          <input
            className="w-full border rounded h-12 px-4 focus:outline-none -mr-7"
            placeholder="Password"
            type="password"
            name="password"
            value={inputValues.password}
            onChange={handleChange}
          />
        </div>
        {errors.password && (
          <div className="text-red-600 mb-5">{errors.password}</div>
        )}
        <div className="flex flex-col md:flex-row justify-between ">
          <input
            className="mr-px bg-orange-500 text-sm active:bg-gray-700 cursor-pointer font-regular text-white px-4 py-2 rounded uppercase"
            type="submit"
            value="Register"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
