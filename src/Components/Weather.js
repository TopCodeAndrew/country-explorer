import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Weather = () => {
    let currentDisplay = useSelector(selectDisplay);
    return (
        <div>
            Today's Weather in {currentDisplay.name.common}:
            {/* <h1>{currentDisplay.name.official}</h1>
            <h2>"{currentDisplay.name.common}"</h2> */}
        </div>
    );
};

export default Weather;
