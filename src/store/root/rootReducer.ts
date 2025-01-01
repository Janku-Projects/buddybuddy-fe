import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "@/store/slices/authSlice";
import buddySlice from "@/store/slices/buddySlice";
import uiSlice from "@/store/slices/uiSlice";
import actionSlice from "@/store/slices/actionSlice";


const rootReducer = combineReducers({
    auth: authSlice,
    buddy: buddySlice,
    ui: uiSlice,
    action: actionSlice
});

export default rootReducer;
