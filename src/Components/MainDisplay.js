import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";
import Overview from "./Overview";
import Symbols from "./Symbols";
import Weather from "./Weather";

const MainDisplay = () => {
    const [view, setView] = useState("Overview");
    let currentDisplay = useSelector(selectDisplay);
    console.log("CURRENT DISPLAY HERE", currentDisplay);
    return (
        <div className="stack">
            <div className="tab-select">
                <button onClick={() => setView("Overview")}>Overview</button>
                <button onClick={() => setView("Weather")}>
                    Current Weather at Capitol
                </button>
                <button onClick={() => setView("Symbols")}>Symbols</button>
            </div>
            {view === "Overview" && <Overview />}
            {view === "Weather" && <Weather />}
            {view === "Symbols" && <Symbols />}
        </div>
    );
};

export default MainDisplay;
