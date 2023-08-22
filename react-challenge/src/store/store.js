import { configureStore } from "@reduxjs/toolkit";
import { jobsSlice } from "./features/jobsSlice";
import  filterReducer  from './features/filtersSlice'
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({

    reducer:{
        [jobsSlice.reducerPath]:jobsSlice.reducer,
        filters:filterReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(jobsSlice.middleware),
})

setupListeners(store.dispatch)

export default store