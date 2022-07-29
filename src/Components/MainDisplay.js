import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const MainDisplay = () => {
    const [view, setView] = useState("Overview");
    let currentDisplay = useSelector(selectDisplay);
    return (
        <div className="stack">
            <div className="tab-select">
                <button onClick={() => setView("Overview")}>Overview</button>
                <button onClick={() => setView("Weather")}>
                    Current Weather at Capitol
                </button>
                <button onClick={() => setView("Symbols")}>Symbols</button>
            </div>
        </div>
    );
};

export default MainDisplay;
