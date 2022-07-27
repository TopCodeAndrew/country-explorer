import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Symbols = () => {
    let currentDisplay = useSelector(selectDisplay);
    return (
        <div className="symbols">
            <div className="symbol-box">
                <h2>Flag of {currentDisplay.name.common}:</h2>
                {currentDisplay.flags ? (
                    <img src={currentDisplay.flags.png} />
                ) : (
                    "(No Data Found)"
                )}
            </div>
            <div className="symbol-box">
                <h2>Coat of Arms of {currentDisplay.name.common}:</h2>
                {currentDisplay.coatOfArms ? (
                    <img src={currentDisplay.coatOfArms.png} />
                ) : (
                    "(No Data Found)"
                )}
            </div>
            {/* <h1>{currentDisplay.name.official}</h1>
            <h2>"{currentDisplay.name.common}"</h2> */}
        </div>
    );
};

export default Symbols;
