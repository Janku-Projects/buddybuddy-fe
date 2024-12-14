import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface iBuddySlice {

}

const initState: iBuddySlice = {
    name: "dummy",
    createdDate: "",
    lastLoginInDate: ""
};

const buddySlice = createSlice({
    name: "buddy",
    initialState: initState,
    reducers: {
        setAuth: (state, action: PayloadAction<iBuddySlice>) => {
            state = { ...action };
        }
    }

});
//
// // export actions
// export const { setAuth } = buddySlice.actions;
// // export reducers
// export default buddySlice;