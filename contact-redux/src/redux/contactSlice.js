import { createSlice } from '@reduxjs/toolkit'
import { addContact,deleteContact,getContacts } from './thunk'

//create a slice
const contactSlice = createSlice({
    name:"contacts",
    initialState:{
        value:[],
        state:'normal',
        error:null
    },
    extraReducers(builder){
        //add cases for getting contact list
        builder.addCase(getContacts.pending,(state,action)=>{
            state.state = "loading"
        })
        builder.addCase(getContacts.fulfilled,(state,action)=>{
            state.state = "normal"
            state.value = action.payload
        })
        builder.addCase(getContacts.rejected,(state,error)=>{
            state.state = "normal"
            state.error = error
        })


        //add cases for creating a contact
        builder.addCase(addContact.pending,(state,action)=>{
            state.state = "loading"
        })
        builder.addCase(addContact.fulfilled,(state,action)=>{
            state.state = "new_added"
        })
        builder.addCase(addContact.rejected,(state)=>{
            state.state = "failed"
            state.error = Error("failed to create contact")
        })


        //add cases for deleting a contact
        builder.addCase(deleteContact.pending,(state,action)=>{
            state.state = "loading"
        })
        builder.addCase(deleteContact.fulfilled,(state,action)=>{
            state.state = "deleted"
        })
        builder.addCase(deleteContact.rejected,(state)=>{
            state.state = "failed"
            state.error = Error("failed to create contact")
        })
    }
})


export default contactSlice.reducer