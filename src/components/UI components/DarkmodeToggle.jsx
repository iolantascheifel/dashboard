import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import "./darkmodeToggle.css";

const DarkmodeToggle = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="darkmode-toggle"
        onClick={() => dispatch({ type: "TOGGLE" })}
      />
      <label htmlFor="darkmode-toggle"></label>
    </div>
  );
};

export default DarkmodeToggle;
