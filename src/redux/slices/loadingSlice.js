import { createSlice } from "@reduxjs/toolkit";

export const displayCountry = createSlice({
    name: "isLoading",
    initialState: {
        value: false,
    },
    reducers: {
        setLoadingTrue: (state) => {
            state.value = true;
        },
        setLoadingFalse: (state) => {
            state.value = false;
        },
        toggleLoading: (state) => {
            state.value = !state.value;
        },
    },
});

export const { setLoadingFalse, setLoadingTrue, toggleLoading } =
    displayCountry.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//     setTimeout(() => {
//         dispatch(incrementByAmount(amount));
//     }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectLoading = (state) => state.isLoading.value;

export default displayCountry.reducer;
