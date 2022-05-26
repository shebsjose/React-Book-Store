
import { useState } from "react";

const ToggleButton = () => {
  const [change, setChange] = useState("light");

  const handleToggle = () => {
    if (change === "light") {
      setChange("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setChange("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <h1 className="mt-4 w-50 ml-0 mr-0 mx-auto text-center">Toggle Button</h1>
      <div className="mb-3">
        <div className='w-50 ml-0 mr-0 mx-auto text-center'>
        <label className="switch ">
          <input type="checkbox" onClick={handleToggle} change={change} />
          <span className="slider"></span>
        </label>
        {change === "light" ? " light" : "dark"}
        </div>
      </div>
    </>
  );
};

export default ToggleButton;