import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/features/userSlices";

const LoginForm = () => {
  const logged = useSelector((state) => state.user.isLoggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    logged ? navigate("/books") : navigate("/login");
  }, [logged, navigate]);

  useEffect(() => {
    const user = getCookie("myEmail");
    const password = getCookie("myPassword");
    setInputValues({
      email: user,
      password: password,
    });
    document.cookie = "myEmail=; MaxAge=0; secure ;path=http://localhost:3000";
    document.cookie =
      "myPassword=; MaxAge=0; secure ; path=http://localhost:3000";
  }, []);

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(loginUser(inputValues));
      localStorage.setItem("loginUser", JSON.stringify({ ...inputValues }));
    }
  };
  const validate = () => {
    const input = { ...inputValues };
    let errors = {};
    let isValid = true;

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
      if (input.password.length <= 6) {
        isValid = false;
        errors.password = "Please enter six length password.";
      }
    }
    setErrors(errors);
    return isValid;
  };

  const getCookie = (key) => {
    const name = key + "=";
    const arr = document.cookie.split("; ");
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      while (item.charAt(0) === " ") {
        return (item = item.substring(1));
      }
      if (item.indexOf(name) === 0) {
        return item.substring(name.length, item.length);
      }
    }
  };

  const remember = () => {
    document.cookie =
      "myEmail=" + inputValues.email + "; path=http://localhost:3000";
    document.cookie =
      "myPassword=" + inputValues.password + "; path=http://localhost:3000";
  };

  return (
    <div className="bg-white p-5 max-w-md mx-auto rounded shadow-sm dark:bg-slate-800 dark:text-gray-400">
      <h2 className="text-4xl px-4 ">Log In</h2>
      <form className="mt-10 space-y-8" onSubmit={handleSubmit}>
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
        <input
          type="checkbox"
          name="remember me"
          id="myCheck"
          onClick={() => {
            remember();
          }}
        />{" "}
        Remember me
        <div className="flex flex-col md:flex-row justify-between ">
          <input
            className="mr-px bg-orange-500 text-sm active:bg-gray-700 cursor-pointer font-regular text-white px-4 py-2 rounded uppercase"
            type="submit"
            value="Login now"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
