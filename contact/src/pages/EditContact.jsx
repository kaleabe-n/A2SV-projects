import { useState } from 'react';
import {Form, redirect, useLoaderData, useParams } from 'react-router-dom'

const EditContact = () => {
    const contact = useLoaderData()
    const {id} = useParams()
    const [name,setName] = useState(contact.name)
    const [desc,setDesc] = useState(contact.description)
    return ( 
        <div className='form'>
            <Form method='POST' action={'/contacts/edit/'+id.toString()}>
                <label htmlFor="name" className='d-block label m-2'>name</label>
                <input type="text" name='name' id='name' placeholder='Enter name'className='d-block form-control m-2'value={name} onChange={(e)=>setName(e.target.value)}/>
                <label htmlFor="description" className='d-block label m-2'>description</label>
                <textarea name="description" id="description" cols="30" rows="10" className='d-inline-block form-control m-2' placeholder='Enter description' value={desc}  onChange={(e)=>setDesc(e.target.value)}></textarea>
                <input type="submit" className="btn btn-primary m-3" value="update"/>
            </Form>
        </div>
     );
}

export const editContactAction = async ({request,params})=>{
    const {id} = params
    const data = await request.formData()
    const submission = {name:data.get('name'),description:data.get('description')}
    const path = 'http://localhost:4000/contacts/' + id.toString()
    console.log(path)
    const response = await fetch(path,{
        method:"PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({...submission,id:id})
    })
    console.log(response)
    if(response.ok){
        return redirect('/contacts')
    }
    return {error:"failed"}
}


 
export default EditContact;