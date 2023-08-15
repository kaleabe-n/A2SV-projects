import { createSlice } from '@reduxjs/toolkit'

//create a state handler
export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [],
    viewState : 'all'
  },
  reducers: {
    //add todo reducer
    addTodo: (state, action) => {
        //add the new todo to the end of the list
        state.value.push(action.payload)
    },

    //remove todo reducer
    removeTodo:(state,action) => {
        let id = action.payload
        //find the element to be removed
        let element = state.value.filter((todo)=>todo.id===id)[0]
        //find the index of the element
        let index = state.value.indexOf(element)
        //remove the element
        state.value.splice(index,1)
    },

    //update todo reducer
    updateTodo:(state,action) => {
        let id = action.payload.id
        //find the element with the specific id
        let element = state.value.filter((todo)=>todo.id===id)[0]
        //find the index of the element
        let index = state.value.indexOf(element)
        //update the element
        state.value[index].content = action.payload.content

    },
    //changing the done state of todos
    toggleDone:(state,action) => {
        let id = action.payload
        //find the element to be marked
        let element = state.value.filter((todo)=>todo.id===id)[0]
        //find the index of the element
        let index = state.value.indexOf(element)
        //change the state of the element
        state.value[index].done = !state.value[index].done
    },
    changeState:(state,action) => {
      state.viewState = action.payload
      console.log(action.payload,state.viewState)
    }
  }
})

// Action creators are generated for each case reducer function
export const { addTodo,removeTodo,updateTodo,toggleDone,changeState } = todoSlice.actions

export default todoSlice.reducer