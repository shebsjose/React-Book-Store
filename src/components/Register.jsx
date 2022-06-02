import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, userAdmin } from "../redux/features/userSlices";

const Register = () => {

  const initialValues = {
    name:"",
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
  console.log(inputValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem(
        "loginUser",
        JSON.stringify({ ...inputValues })
      );
      setInputValues({});
    }
  };
  const validate = () => {
    const input = { ...inputValues };
    let errors = {};
    let isValid = true;

    if (input.email === "") {
      isValid = false;
      errors.email = "Please enter your Email Address.";
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
      if (input.password.length <= 6) {
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
        />
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

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.607"
            height="17.076"
            viewBox="0 0 17.607 17.076"
          >
            <path
              id="eye-off"
              d="M12.392,16.769a8.718,8.718,0,0,1-9.935-5.938A8.675,8.675,0,0,1,3.817,8.2m5.1.79a2.611,2.611,0,1,1,3.692,3.692M8.914,8.985,12.6,12.675M8.916,8.986,6.053,6.124m6.554,6.554,2.863,2.863M2.929,3,6.053,6.124m0,0a8.7,8.7,0,0,1,13.011,4.707,8.723,8.723,0,0,1-3.6,4.708m0,0,3.123,3.123"
              transform="translate(-1.957 -2.293)"
              fill="none"
              stroke="#949090"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            />
          </svg>
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
