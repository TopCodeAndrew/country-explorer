import { createSlice } from "@reduxjs/toolkit";
import initialCountry from "../../assets/initialCountry";

export const displayCountry = createSlice({
    name: "displayCountry",
    initialState: {
        value: initialCountry,
    },
    reducers: {
        setDisplayCountry: (state, action) => {
            state.value = action.payload;
        },
        deleteDisplayCountry: (state) => {
            state.value = null;
        },
    },
});

export const { setDisplayCountry, deleteDisplayCountry } =
    displayCountry.actions;

export const selectDisplay = (state) => state.displayedCountry.value;

export default displayCountry.reducer;
