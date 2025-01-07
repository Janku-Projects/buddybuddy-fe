import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getEnumValue } from "@/Util/util";

enum eAction {
    WAIT,
    EAT,
    SLEEP,
    PLAY,
    CURE,
    SHOWER,
    STATUS,
    CHAT,
    CALL
}


interface iActionSlice {
    action: number;
}

const initState: iActionSlice = {
    action: 0
};

const actionSlice = createSlice({
    name: "action",
    initialState: initState,
    reducers: {
        setAction: (state, action: PayloadAction<eAction | string>) => {
            state.action = +eAction[action.payload];
        },
        clearAction: (state) => {
            console.log("clear");
            state.action = +eAction.WAIT;
        }
    }
});

export const { setAction, clearAction } = actionSlice.actions;
export default actionSlice.reducer;