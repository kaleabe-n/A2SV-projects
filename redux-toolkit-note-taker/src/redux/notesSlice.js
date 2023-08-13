import { createSlice } from '@reduxjs/toolkit'

//create a state handler
export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    value: []
  },
  reducers: {
    // add new note
    addNote: (state,action) => {
      state.value.push(action.payload)
    },
    deleteNote:(state,action) => {
      let id = action.payload
      //find the element to be removed
      let element = state.value.filter((note)=>note.id===id)[0]
      //find the index of the element
      let index = state.value.indexOf(element)
      //remove the element
      state.value.splice(index,1)
    },
    updateNote:(state,action) => {
      let id = action.payload.id
      //find the element with the specific id
      let element = state.value.filter((note)=>note.id===id)[0]
      //find the index of the element
      let index = state.value.indexOf(element)
      //update the element
      state.value[index].note = action.payload.note

  },

  }
})

// Action creators are generated for each case reducer function
export const { addNote,deleteNote,updateNote } = notesSlice.actions

export default notesSlice.reducer