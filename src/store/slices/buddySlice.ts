import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface iBuddySlice {
    buddy: any; // buddy 정보 general (어떤 버디 등)
    buddyInfo: {
        hunger: number; // 배고픔
        fatigue: number; // 피로도
        affection: number; // 애정도
        health: number; // 건강
        hygiene: number; // 위생도
    };
}

const initState: iBuddySlice = {
    buddy: null,
    buddyInfo: {
        hunger: 0,
        fatigue: 0,
        affection: 0,
        health: 0,
        hygiene: 0,
    }
};

const buddySlice = createSlice({
    name: "buddy",
    initialState: initState,
    reducers: {
        setBuddy: (state, action: PayloadAction<iBuddySlice>) => {
            state.buddy = action.payload.buddy;
        },
        setBuddyInfo: (state, action: PayloadAction<any>) => {
            const key = Object.keys(action.payload)[0]; // Get the dynamic key
            const value = action.payload[key]; // Get the value from action.payload

            // Update the buddyInfo state
            state.buddyInfo = {
                ...state.buddyInfo,
                [key]: (state.buddyInfo[key] || 0) + value, // Safely add the value (default to 0 if undefined)
            };

            console.log(112, state.buddyInfo); // Log the updated buddyInfo
        }
    }

});

// export actions
export const { setBuddy, setBuddyInfo } = buddySlice.actions;
// export reducers
export default buddySlice.reducer;