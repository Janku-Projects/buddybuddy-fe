import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getEnumValue } from "@/Util/util";

export enum eAction {
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
    actionFlag: Boolean;
}

const initState: iActionSlice = {
    action: 0,
    actionFlag: false
};

const actionSlice = createSlice({
    name: "action",
    initialState: initState,
    reducers: {
        setAction: (state, action: PayloadAction<eAction | string>) => {
            state.action = +eAction[action.payload];
            state.actionFlag = true;
        },
        clearAction: (state) => {
            console.log("clear");
            state.action = +eAction.WAIT;
            state.actionFlag = false;
        }
    }
});

export const { setAction, clearAction } = actionSlice.actions;
export default actionSlice.reducer;