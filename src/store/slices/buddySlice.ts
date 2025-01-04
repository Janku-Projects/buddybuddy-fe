import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface iBuddySlice {
    buddy: any; // buddy 정보
    data: any; // buddy info data
}

const initState: iBuddySlice = {
    data: null,
    buddy: null
};

const buddySlice = createSlice({
    name: "buddy",
    initialState: initState,
    reducers: {
        setBuddy: (state, action: PayloadAction<iBuddySlice>) => {
            state.data = action.payload.data;
            state.buddy = action.payload.buddy;
        }
    }

});

// export actions
export const { setBuddy } = buddySlice.actions;
// export reducers
export default buddySlice.reducer;