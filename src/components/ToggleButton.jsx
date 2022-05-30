import React, { useState }  from 'react';
import useDarkMode from './useDarkMode';

const ToggleButton = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [change, setChange] = useState(false);

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
      <div className="mb-3">
        <div className="w-50 ml-0 mr-0 mx-auto text-center">
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              onClick={() => {
                handleToggle();
                setTheme(colorTheme)
              }}
            />
                   {change === "" ? " light" : ""}
            <label
              htmlFor="toggle"
              className={`toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer  ${colorTheme === "dark" ? "toggle-checkbox:checked toggle-label" : "toggle-checkbox:checked"}`}
            ></label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToggleButton;
