import { configureStore } from "@reduxjs/toolkit";
import displayedCountryReducer from "../redux/slices/displayCountrySlice";
import potentialCountriesReducer from "../redux/slices/potentialCountriesSlice";
import isLoadingReducer from "../redux/slices/loadingSlice";

export default configureStore({
    reducer: {
        displayedCountry: displayedCountryReducer,
        potentialCountries: potentialCountriesReducer,
        isLoading: isLoadingReducer,
    },
});
