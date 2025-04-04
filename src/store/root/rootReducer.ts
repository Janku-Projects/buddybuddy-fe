import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "@/store/slices/authSlice";
import buddySlice from "@/store/slices/buddySlice";
import uiSlice from "@/store/slices/uiSlice";
import actionSlice from "@/store/slices/actionSlice";
import modelSlice from "@/store/slices/modelSlice";
import modalSlice from "@/store/slices/modalSlice";


const rootReducer = combineReducers({
    auth: authSlice,
    buddy: buddySlice,
    ui: uiSlice,
    action: actionSlice,
    model: modelSlice,
    modal: modalSlice
});

export default rootReducer;
