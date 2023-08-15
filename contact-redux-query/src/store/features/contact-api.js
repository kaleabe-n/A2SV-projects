import {createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:4000'}),
    tagTypes:['Contacts','SingleContact'],
    endpoints:(builder)=>({
        getContacts:builder.query({
            query:()=>"/contacts",
            providesTags:["Contacts"],
            transformResponse:res=>res.sort((a,b)=>b.id-a.id)
        }),
        deleteContact:builder.mutation({
            query:({id})=>({
                url:`contacts/${id}`,
                method:'DELETE',
            }),
            invalidatesTags:["Contacts"]
        }),
        updateContact:builder.mutation({
            query:(contact)=>({
                url:`contacts/${contact.id}`,
                method:'PATCH',
                body:contact
            }),
            invalidatesTags:["Contacts",'SingleContact']
        }),
        addContact:builder.mutation({
            query:(contact)=>({
                url:`contacts/`,
                method:'POST',
                body:contact
            }),
            invalidatesTags:["Contacts"]
        }),
        getSingleContact:builder.query({
            query:(id)=>`/contacts/${id}`,
            providesTags:["SingleContact"]
        }),
    })
})

export const { useGetContactsQuery,useDeleteContactMutation,useUpdateContactMutation,useAddContactMutation,useGetSingleContactQuery } = apiSlice