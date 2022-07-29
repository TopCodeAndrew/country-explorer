import { useSelector } from "react-redux";
import "./App.css";
import Header from "./Components/Header";
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
            Starter Code
            {isLoading && <LoadingModal />}
            <Header />
            {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
        </div>
    );
}

export default App;
