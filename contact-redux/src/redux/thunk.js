import { createAsyncThunk } from "@reduxjs/toolkit";

// thunk function that handles adding new contact
const addContact = createAsyncThunk("contacts/add", async (payload,{getState})=>{
    const res = await fetch('http://localhost:4000/contacts',{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(payload)
    })
    
    if(!res.ok){
        throw(Error("error fetching data"))
    }else{
        return await res.json()
    }

})


//thunk function that handles edit a single contact functionality
const editContact = createAsyncThunk("contacts/edit",async(payload,{getState})=>{
    const res = await fetch(`http://localhost:4000/contacts/${payload.id}`,{
        method:"PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(payload)
    })
    if(!res.ok){
        throw(Error("error fetching data"))
    }else{
        return await res.json()
    }
})


//thunk function that handles fetching the list of contacts
const getContacts = createAsyncThunk("contacts/fetch", async (_,{getState})=>{

    const res = await fetch('http://localhost:4000/contacts')
    if(!res.ok){
        throw(Error("error fetching data"))
    }else{
        return await res.json()
    }

})


//thunk function that handles fething an single contact
const getSingleContact = createAsyncThunk("contacts/getSingle",async (payload,{getState})=>{
    const res = await fetch(`http://localhost:4000/contacts/${payload.toString()}`)
    if(!res.ok){
        throw(Error("error fetching data"))
    }else{
        const data = await res.json()
        return data
    }

})


//function that handles deleting a function
const deleteContact = createAsyncThunk("contacts/delete", async (payload,_)=>{
    const res = await fetch(`http://localhost:4000/contacts/${payload.toString()}`,{
        method:"DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
    if(!res.ok){
        throw(Error("error fetching data"))
    }else{
        const data = await res.json()
        return data
    }
})

export {addContact,editContact,getContacts,getSingleContact,deleteContact};