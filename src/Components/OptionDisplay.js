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
        <div>
            {currentPotentials &&
                currentPotentials.map((e, i) => {
                    return (
                        <div>
                            <h2
                                onClick={() =>
                                    dispatch(
                                        setDisplayCountry(currentPotentials[i])
                                    )
                                }
                            >
                                {e.name.common}
                            </h2>
                            <br />
                        </div>
                    );
                })}
        </div>
    );
};

export default OptionDisplay;
