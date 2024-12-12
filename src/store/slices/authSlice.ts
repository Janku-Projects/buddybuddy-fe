import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface iAuthSlice {
    name: string;
    createdDate: string;
    lastLoginInDate: string;
}

const initState: iAuthSlice = {
    name: "dummy",
    createdDate: "",
    lastLoginInDate: ""
};

const authSlice = createSlice({
    name: "auth",
    initialState: initState,
    reducers: {
        setAuth: (state, action: PayloadAction<iAuthSlice>) => {
            state = { ...action };
        }
    }

});

// export actions
export const { setAuth } = authSlice.actions;
// export reducers
export default authSlice;