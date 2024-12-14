import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface iAuthSlice {
    name: string;
    createdDate: string;
    lastLoginInDate: string;
}

// Initial state for the slice
const initState: iAuthSlice = {
    name: "",
    createdDate: "",
    lastLoginInDate: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState: initState,
    reducers: {
        setAuth: (state, action: PayloadAction<iAuthSlice>) => {
            // Update state fields with the payload data
            console.log("act::: ", action);
            state = action.payload
        },
        setLastLogin: (state, action: PayloadAction<string>) => {
            state.lastLoginInDate = action.payload;
        }
    },
});

// Export actions
export const { setAuth, setLastLogin } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
