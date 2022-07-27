import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Components/Header";
import { selectDisplay } from "./redux/slices/displayCountrySlice";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import { selectLoading, toggleLoading } from "./redux/slices/loadingSlice";
import LoadingModal from "./Components/LoadingModal";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";

function App() {
    let currentDisplay = useSelector(selectDisplay);

    let isLoading = useSelector(selectLoading);
    const dispatch = useDispatch();
    return (
        <div className="App font-link">
            {isLoading && <LoadingModal />}
            <Header />
            {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
            {/* {currentDisplay} */}
            {/* {currentPotentials} */}
            {/* this will be used to toggle a loading modal app-wide */}
            <button onClick={() => dispatch(toggleLoading())}>toggle</button>
        </div>
    );
}

export default App;
