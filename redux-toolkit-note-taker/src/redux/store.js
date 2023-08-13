import { configureStore } from '@reduxjs/toolkit'
import notesReducer from './notesSlice'

//create a new store to store to manage the states
export default configureStore({
  reducer: {
    notes: notesReducer
  }
})