import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface iUISlice {
    header: string;
    isLoading: boolean;
}

const initState: iUISlice = {
    header: "",
    isLoading: false
};

const uiSlice = createSlice({
    name: "ui",
    initialState: initState,
    reducers: {
        setHeader: (state, action: PayloadAction<string>) => {
            state.header = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    }

});

// export actions
export const { setHeader, setIsLoading } = uiSlice.actions;
// export reducers
export default uiSlice.reducer;