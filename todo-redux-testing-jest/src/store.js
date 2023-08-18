import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './todosSlice'

//create a new store to store to manage the states
export default configureStore({
  reducer: {
    todos: todosReducer
  }
})