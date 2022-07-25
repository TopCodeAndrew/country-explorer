import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Symbols = () => {
    let currentDisplay = useSelector(selectDisplay);
    return (
        <div>
            <div>
                Flag of {currentDisplay.name.common}:
                <img src={currentDisplay.flags.png} />
            </div>
            <div>
                Coat of Arms of {currentDisplay.name.common}:
                <img src={currentDisplay.coatOfArms.png} />
            </div>
            {/* <h1>{currentDisplay.name.official}</h1>
            <h2>"{currentDisplay.name.common}"</h2> */}
        </div>
    );
};

export default Symbols;
