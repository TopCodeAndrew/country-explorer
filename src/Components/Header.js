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

const Header = () => {
    const [input, setInput] = useState("america");
    const dispatch = useDispatch();

    let currentDisplay = useSelector(selectDisplay);
    return (
        <div>
            {JSON.stringify(currentDisplay.name.common)}
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
    );
};

export default Header;
