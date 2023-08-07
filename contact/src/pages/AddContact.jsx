import {Form, redirect } from 'react-router-dom'

const AddContact = () => {
    return ( 
        <div className='form'>
            <Form method='POST' action='/add'>
                <label htmlFor="name" className='d-block label m-2'>name</label>
                <input type="text" name='name' id='name' placeholder='Enter name'className='d-block form-control m-2'/>
                <label htmlFor="description" className='d-block label m-2'>description</label>
                <textarea name="description" id="description" cols="30" rows="10" className='d-inline-block form-control m-2' placeholder='Enter description'></textarea>
                <input type="submit" className="btn btn-primary m-3" value="submit"/>
            </Form>
        </div>
     );
}

export const addContactAction = async ({request})=>{
    const data = await request.formData()
    const submission = {name:data.get('name'),description:data.get('description')}
    const response = await fetch('http://localhost:4000/contacts',{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(submission)
    })
    if(response.ok){
        return redirect('/contacts')
    }
    return {error:"failed"}
}

 
export default AddContact;