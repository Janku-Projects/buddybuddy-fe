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
}

const actionSlice = createSlice({
    name: "action",
    initialState: initState,
    reducers: {
        setAction: (state, action: PayloadAction<eAction>) => {
            console.log(1112, getEnumValue(eAction, action.payload))
            console.log(222, action.payload)
            state.action = getEnumValue(eAction, action.payload);
        },
        clearAction: (state) => {
            state.action = eAction.WAIT
        }
    }
});

export const { setAction } = actionSlice.actions;
export default actionSlice.reducer;