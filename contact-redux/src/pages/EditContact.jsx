import { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { editContact, getSingleContact } from '../redux/thunk';

const EditContact = () => {

    //use selector and use navigate to access state and navigate
    const singleContact = useSelector(state=>state.singleContact)
    const navigate = useNavigate()

    //use params to access parameter id
    const {id} = useParams()

    //set state to manage component level states
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')

    //dispatch to dispatch functions
    const dispatch = useDispatch()

    //use effect to fetch the data ans 
    useEffect(()=>{
        const func = async ()=>{
            dispatch(getSingleContact(id))
        }
        func()
    },[])

    //use effect to set local states after data is set
    useEffect(()=>{
        const func = async ()=>{
            setName(singleContact.value.name)
            setDescription(singleContact.value.description)
        }
        func().then().catch(()=>{})
    },[singleContact])

    //handle updata button
    const updateHandler=(e)=>{
        e.preventDefault()
        dispatch(editContact({name,description,id})).then(()=>{
            navigate('/contacts')
        })
    }
    return ( 
        <>
            <div className='form'>
                <form>
                    <label htmlFor="name" className='d-block label m-2'>name</label>
                    <input type="text" name='name' id='name' placeholder='Enter name'className='d-block form-control m-2' value={name} onChange={(e)=>setName(e.target.value)}/>
                    <label htmlFor="description" className='d-block label m-2'>description</label>
                    <textarea name="description" id="description" cols="30" rows="10" className='d-inline-block form-control m-2' placeholder='Enter description' value={description}  onChange={(e)=>setDescription(e.target.value)}></textarea>
                    <button className="btn btn-primary m-3" value="update" onClick={updateHandler}>update</button>
                </form>
                {singleContact.error && <p className="text-danger">{singleContact.error.message}</p>}
            </div>
        
        </>
     );
}


export default EditContact;