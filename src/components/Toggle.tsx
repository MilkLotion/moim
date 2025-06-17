import { useState } from "react";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const toggleEvent = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div className="mt-3 flex items-center justify-between">
      <label
        htmlFor="theme-toggle"
        className="relative inline-flex items-center cursor-pointer"
      >
        <input
          type="checkbox"
          id="theme-toggle"
          className="sr-only peer"
          checked={isToggled}
          onChange={toggleEvent}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
    </div>
  );
};

export default Toggle;
