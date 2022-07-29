import { useSelector } from "react-redux";
import "./App.css";
import LoadingModal from "./Components/LoadingModal";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectDisplay } from "./redux/slices/displayCountrySlice";
import { selectLoading } from "./redux/slices/loadingSlice";

function App() {
    let currentDisplay = useSelector(selectDisplay);
    let isLoading = useSelector(selectLoading);
    return (
        <div className="App font-link">
            {isLoading && <LoadingModal />}

            {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
        </div>
    );
}

export default App;
