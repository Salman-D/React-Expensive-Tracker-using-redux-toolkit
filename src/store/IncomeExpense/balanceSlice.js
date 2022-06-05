import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    balance : 0,
    income:0,
    expense1:0
}

export const balanceSlice = createSlice({
    name : 'balanceCounter',
    initialState,
    reducers: {
        income: (state , action) => {
            state.balance += action.payload;
            state.income+=action.payload
        },
        expense: (state , action) => {
            state.balance -= action.payload;
            state.expense1+=action.payload;
        },
        clear:(state) => {
            state.balance = 0
        },
        // incomeByAmount: (state , action) => {
        //     state.balance += action.payload;
        // }

    }
})

export const  { income , expense , clear , incomeByAmount} = balanceSlice.actions;

export default balanceSlice.reducer;