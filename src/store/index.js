import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./IncomeExpense/balanceSlice"

export const store = configureStore({
    reducer : {
        balanceCounter : counterReducer,
    }
})