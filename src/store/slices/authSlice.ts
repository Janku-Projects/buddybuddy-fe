import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/db/dexieDB.def";

interface UserData {
    name: string;
    createdDate: string;
    lastLoginInDate: string;
}

interface iAuthSlice {
    isLoggedIn: boolean;
    userData: UserData;
}

// Initial state for the slice
const initState: iAuthSlice = {
    isLoggedIn: false,
    userData: {
        name: "",
        createdDate: "",
        lastLoginInDate: "",
    },
};

const authSlice = createSlice({
    name: "auth",
    initialState: initState,
    reducers: {
        setAuth: (state, action: PayloadAction<UserData>) => {
            state.userData = action.payload;
            state.isLoggedIn = true;
        },

        setLastLogin: (state, action: PayloadAction<string>) => {
            state.userData.lastLoginInDate = action.payload;
            state.isLoggedIn = true;
        },
    },
});

// Export actions
export const { setAuth, setLastLogin } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
