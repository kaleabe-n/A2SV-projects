import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import { addContact } from "../redux/thunk";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
    //use state to manage state at componenet level
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')

    //use dispatch to dispatch thunk functions
    const dispatch = useDispatch()

    //selector to access the states
    const selector = useSelector(state=>state.singleContact)
    const { error } = selector

    //use navigate to navigate between pages
    const navigator = useNavigate()


    //function to handle submit button
    const submitHandler= async (e)=>{
        e.preventDefault()
        dispatch(addContact({name:name,description:description,id:Date.now()})).then(()=>{
            navigator('/contacts')
        })

    }
    

    return ( 
        <div className='form'>
            <form>
                <label htmlFor="name" className='d-block label m-2'>name</label>
                <input type="text" name='name' id='name' placeholder='Enter name'className='d-block form-control m-2' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <label htmlFor="description" className='d-block label m-2'>description</label>
                <textarea name="description" id="description" cols="30" rows="10" className='d-inline-block form-control m-2' placeholder='Enter description' value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                <input className="btn btn-primary m-3" value="submit" onClick={submitHandler}/>
            </form>
            {error && <div>error.message</div>}
        </div>
     );
}


 
export default AddContact;