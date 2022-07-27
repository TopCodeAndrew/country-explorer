import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    selectDisplay,
    setDisplayCountry,
    deleteDisplayCountry,
} from "../redux/slices/displayCountrySlice";

import { selectPotentials } from "../redux/slices/potentialCountriesSlice";

const OptionDisplay = () => {
    let currentPotentials = useSelector(selectPotentials);
    const dispatch = useDispatch();

    return (
        <div className="options-display">
            {currentPotentials &&
                currentPotentials.map((e, i) => {
                    return (
                        <h2
                            className="country-option"
                            onClick={() =>
                                dispatch(
                                    setDisplayCountry(currentPotentials[i])
                                )
                            }
                        >
                            {e.name.common}
                        </h2>
                    );
                })}
        </div>
    );
};

export default OptionDisplay;
