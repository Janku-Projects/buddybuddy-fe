import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface iModelSlice {
    fov: number
}

const initState: iModelSlice = {
    fov: 15
};

const modelSlice = createSlice({
    name: "model",
    initialState: initState,
    reducers: {
        setModel: (state, action: PayloadAction<iModelSlice>) => {
            // state.fov = +action.payload.fov
        }
    }

});

// export actions
export const { setModel } = modelSlice.actions;
// export reducers
export default modelSlice.reducer;