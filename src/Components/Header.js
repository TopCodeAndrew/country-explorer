import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    selectDisplay,
    setDisplayCountry,
} from "../redux/slices/displayCountrySlice";

const Header = () => {
    const [input, setInput] = useState("america");
    const dispatch = useDispatch();

    let currentDisplay = useSelector(selectDisplay);
    return (
        <div>
            {currentDisplay}
            <input
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    console.log(input);
                    dispatch(setDisplayCountry(input));
                }}
            >
                search
            </button>
        </div>
    );
};

export default Header;
