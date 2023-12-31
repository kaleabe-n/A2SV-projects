import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jobsSlice = createApi({
    reducerPath: "api",
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:4000'}),
    endpoints:(builder)=>({
        getJobs:builder.query({
            query:()=>'/jobs'
        })
    })
})

export const { useGetJobsQuery } = jobsSlice