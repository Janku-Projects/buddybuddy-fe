import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "@/store/slices/authSlice";
import buddySlice from "@/store/slices/buddySlice";
import uiSlice from "@/store/slices/uiSlice";


const rootReducer = combineReducers({
    auth: authSlice,
    buddy: buddySlice,
    ui: uiSlice
});

export default rootReducer;
