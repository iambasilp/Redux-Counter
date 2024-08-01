import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name:"Counter",
    initialState:{
        count:0,
        error:null
    },
    reducers:{

        Increment:(state)=>{
            state.count+=1
            if(state.count > 5){
                state.count = 5
                state.error = "Maximum Reached"
            }else{
                state.error = null
            }
        },
        Decrement:(state)=>{
            state.count-=1
            if(state.count < 0){
                state.count = 0
                state.error = "Minimum Reached"
            }else{
                state.error = null
            }
        },
        Reset:(state)=>{
            state.count=0
        }
    }
})

export const {Increment,Decrement,Reset} = CounterSlice.actions
export default CounterSlice.reducer