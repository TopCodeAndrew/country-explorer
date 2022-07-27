import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
    selectDisplay,
    setDisplayCountry,
    deleteDisplayCountry,
} from "../redux/slices/displayCountrySlice";
import {
    selectPotentials,
    setPotentialCountries,
    deletePotentialCountries,
} from "../redux/slices/potentialCountriesSlice";
import {
    setLoadingFalse,
    setLoadingTrue,
    toggleLoading,
} from "../redux/slices/loadingSlice";

import { BsFillFlagFill } from "react-icons/bs";
const Header = () => {
    const [input, setInput] = useState("america");
    const dispatch = useDispatch();

    let currentDisplay = useSelector(selectDisplay);
    return (
        <div className="header">
            <div className="home">
                <BsFillFlagFill
                    style={{ marginRight: "10px" }}
                    fontSize="1.6em"
                />
                <h3 className="home-country">
                    {currentDisplay && currentDisplay.name.common}
                </h3>
            </div>
            <div className="country-input">
                <input
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        dispatch(setLoadingTrue);
                        dispatch(deleteDisplayCountry());
                        dispatch(deletePotentialCountries());
                        axios
                            .get(`https://restcountries.com/v3.1/name/${input}`)
                            .then((res) => {
                                console.log(res.data.length);
                                console.log(res.data[0].name.common);
                                dispatch(
                                    // this is an object
                                    setPotentialCountries(res.data)
                                );
                                dispatch(setLoadingFalse());
                            });
                    }}
                >
                    search
                </button>
            </div>
        </div>
    );
};

export default Header;
