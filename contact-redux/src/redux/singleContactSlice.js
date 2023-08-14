import { createSlice } from "@reduxjs/toolkit";
import { getSingleContact } from "./thunk";

const singleContactSlice = createSlice({
    name:'single_contact',
    initialState:{
        value: null,
        state: 'normal',
        error:null
    },
    extraReducers(builder){
        //single contact manager for update and contact detail pages
        builder.addCase(getSingleContact.fulfilled,(state,action)=>{
            state.value = action.payload
            state.state = 'normal'
        })
        builder.addCase(getSingleContact.rejected,(state,action)=>{
            state.error = action.error
            state.state = 'normal'
        })
        builder.addCase(getSingleContact.pending,(state,action)=>{
            state.state = 'loading'
        })
    }
    
})

export default singleContactSlice.reducer