import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface iBuddySlice {
    buddy: any; // buddy 정보 general (어떤 버디 등)
    buddyInfo: {
        hunger: number; // 배고픔
        stamina: number; // 피로도
        affection: number; // 애정도
        health: number; // 건강
        hygiene: number; // 위생도
    };
}

const initState: iBuddySlice = {
    buddy: null,
    buddyInfo: {
        hunger: 100,
        stamina: 100,
        affection: 0,
        health: 1,
        hygiene: 100,
    }
};

const buddySlice = createSlice({
    name: "buddy",
    initialState: initState,
    reducers: {
        setBuddy: (state, action: PayloadAction<iBuddySlice>) => {
            state.buddy = action.payload.buddy;
        },
        setGainBuddyInfo: (state, action: PayloadAction<any>) => {
            const key = Object.keys(action.payload)[0]; // Get the dynamic key
            const value = action.payload[key]; // Get the value from action.payload
            // Update the buddyInfo state
            // TODO:: []로 나누기

            state.buddyInfo = {
                ...state.buddyInfo,
                [key]: (state.buddyInfo[key] || 0) + value,
            };
            console.log(112, state.buddyInfo);
        },
        setLossBuddyInfo:  (state, action: PayloadAction<any>) => {
            const key = Object.keys(action.payload)[0]; // Get the dynamic key
            const value = action.payload[key]; // Get the value from action.payload

            // TODO:: []로 나누기

            // Update the buddyInfo state
            state.buddyInfo = {
                ...state.buddyInfo,
                [key]: (state.buddyInfo[key]) - value,
            };
            // TODO: 만약 0보다 작을 경우, 디메릿 추가
            console.log(112, state.buddyInfo);
        },
    }

});

// export actions
export const { setBuddy, setGainBuddyInfo, setLossBuddyInfo } = buddySlice.actions;
// export reducers
export default buddySlice.reducer;