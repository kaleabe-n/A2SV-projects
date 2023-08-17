import { useAddContactMutation } from "../store/features/contact-api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
    //use state to manage state at componenet level
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [phone,setPhone] = useState('')

    //use the useAddContactMutation hook to send the request
    const [addContact] = useAddContactMutation()


    //use navigate to navigate between pages
    const navigator = useNavigate()


    //function to handle submit button
    const submitHandler= async (e)=>{
        e.preventDefault()
        addContact({name:name,description:description,phone:phone,id:Date.now()}).then(()=>{
            navigator('/contacts')
        })

    }
    

    return ( 
        <div className='form'>
            <form>
                <label htmlFor="name" className='d-block label m-2'>name</label>
                <input type="text" name='name' id='name' placeholder='Enter name'className='d-block form-control m-2' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <label htmlFor="phone" className='d-block label m-2'>phone</label>
                <input type="text" name='phone' id='phone' placeholder='Enter phone'className='d-block form-control m-2' value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                <label htmlFor="description" className='d-block label m-2'>description</label>
                <textarea name="description" id="description" cols="30" rows="10" className='d-inline-block form-control m-2' placeholder='Enter description' value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                <input className="btn btn-primary m-3" value="submit" onClick={submitHandler}/>
            </form>
        </div>
     );
}


 
export default AddContact;