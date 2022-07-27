import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";
import Overview from "./Overview";
import Weather from "./Weather";
import Symbols from "./Symbols";

const MainDisplay = () => {
    const [view, setView] = useState("Overview");
    let currentDisplay = useSelector(selectDisplay);
    console.log("CURRENT DISPLAY HERE", currentDisplay);
    return (
        <div className="main-display">
            <div className="tab-select">
                <button onClick={() => setView("Overview")}>Overview</button>
                <button onClick={() => setView("Weather")}>Weather</button>
                <button onClick={() => setView("Symbols")}>Symbols</button>
            </div>
            {view === "Overview" && <Overview />}
            {view === "Weather" && <Weather />}
            {view === "Symbols" && <Symbols />}
        </div>
    );
};

export default MainDisplay;
