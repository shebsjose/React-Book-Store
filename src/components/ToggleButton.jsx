import useDarkMode from "./useDarkMode";
import { useState } from 'react'

const ToggleButton = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
    setTheme(colorTheme);
  }
  return (
    <>
      <div className="mb-3">
        <div className="w-50 ml-0 mr-0 mx-auto text-center">
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <div className="mr-5 cursor-pointer " onClick={handleToggle}>
        {isDark ? '🌞' : '🌒'}
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToggleButton;
