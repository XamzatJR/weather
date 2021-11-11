import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        theme: 'light',
    },
    reducers: {
        setTheme(state, action) {
            state.theme = action.payload
        }
    }
})

export const {setTheme} = weatherSlice.actions;
export default weatherSlice.reducer;