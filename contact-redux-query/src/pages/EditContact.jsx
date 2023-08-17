import { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useUpdateContactMutation,useGetSingleContactQuery } from '../store/features/contact-api';

const EditContact = () => {

    //use navigate hook to navigate
    const navigate = useNavigate()

    //use params to access parameter id
    const {id} = useParams()

    //set state to manage component level states
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [description,setDescription] = useState('')

    //use useUpdateContactMutation to access the edit contact function
    const [updateContact] = useUpdateContactMutation()
    const {data:singleContact,error} = useGetSingleContactQuery(id)

    
    //use effect to set local states after data is set
    useEffect(()=>{
        const func = async ()=>{
            if(singleContact!== undefined){
                setName(singleContact.name)
                setPhone(singleContact.phone)
                setDescription(singleContact.description)
            }
        }
        func()
    },[singleContact])

    //handle updata button
    const updateHandler=(e)=>{
        e.preventDefault()
        updateContact({name,description,id,phone}).then(()=>{
            navigate('/contacts')
        })
    }
    return ( 
        <>
            <div className='form'>
                <form>
                    <label htmlFor="name" className='d-block label m-2'>name</label>
                    <input type="text" name='name' id='name' placeholder='Enter name'className='d-block form-control m-2' value={name} onChange={(e)=>setName(e.target.value)}/>
                    <label htmlFor="phone" className='d-block label m-2'>phone</label>
                    <input type="text" name='phone' id='phone' placeholder='Enter phone'className='d-block form-control m-2' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    <label htmlFor="description" className='d-block label m-2'>description</label>
                    <textarea name="description" id="description" cols="30" rows="10" className='d-inline-block form-control m-2' placeholder='Enter description' value={description}  onChange={(e)=>setDescription(e.target.value)}></textarea>
                    <button className="btn btn-primary m-3" value="update" onClick={updateHandler}>update</button>
                </form>
                {error && <p className="text-danger">{error.message}</p>}
            </div>
        
        </>
     );
}


export default EditContact;