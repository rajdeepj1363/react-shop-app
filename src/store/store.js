import { configureStore } from "@reduxjs/toolkit";
import ItemReducer from "../reducers/Reducers";

const store = configureStore({reducer : {
    item : ItemReducer
}})

export default store