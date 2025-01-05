import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface iModelSlice {
    model: {
        name: string
    },
    camera: {
        fov: number,
    }
}

const initState: iModelSlice = {
    model: {name: "chicken_lv_1.obj"},
    camera: {fov: 15}
};

const modelSlice = createSlice({
    name: "model",
    initialState: initState,
    reducers: {
        setModel: (state, action: PayloadAction<string>) => {
            console.log(action.payload)
            state.model.name = action.payload;
        }
    }

});

// export actions
export const { setModel } = modelSlice.actions;
// export reducers
export default modelSlice.reducer;