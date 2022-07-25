import "./App.css";
import { useSelector } from "react-redux";
import Header from "./Components/Header";
import { selectDisplay } from "./redux/slices/displayCountrySlice";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";

function App() {
    let currentDisplay = useSelector(selectDisplay);
    let currentPotentials = useSelector(selectPotentials);
    return (
        <div className="App">
            <Header />
            {currentDisplay}
            {currentPotentials}
        </div>
    );
}

export default App;
