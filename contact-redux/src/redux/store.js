import {configureStore} from '@reduxjs/toolkit'
import contactReducer from './contactSlice'
import  singleContactReducer  from './singleContactSlice'

export const store = configureStore({
    //create store from the two reducers the single contact and all contacts
    reducer:{
        contacts:contactReducer,
        singleContact:singleContactReducer
    }
})