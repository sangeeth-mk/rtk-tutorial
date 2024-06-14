import { createSlice } from "@reduxjs/toolkit";


const counterSlice2 = createSlice({
    name:"counter",
    initialState:{
        count:10
    },
    reducers:{
        incrementfive:(state)=>{
            state.count = state.count + 5
        },
        decrementfive:(state)=>{
            state.count = state.count - 5
        }
    }
})

export const {incrementfive,decrementfive} = counterSlice2.actions;

export default counterSlice2.reducer;

