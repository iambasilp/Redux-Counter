import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

createAsyncThunk()
const CounterSlice = createSlice({
    name:"Counter",
    initialState:{
        count:0,
        error:null
    },
    reducers:{

        Increment:(state)=>{
            state.count+=1
            if(state.count > 100){
                state.count = 100
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