import { Link,useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react";
import { deleteContact, getContacts } from "../redux/thunk";


const ContactPage = () => {

    //use selector to access the data
    const {state,value} = useSelector(state=>state.contacts)
    const contacts = value

    //use dispatch to dispatch thunk functions
    const dispatch = useDispatch()

    //use navigate to navigate
    const navigate = useNavigate()
    useEffect(()=>{dispatch(getContacts())},[dispatch])

    //function that handles delete which dispatches deletecontact and refreshes the contacts
    const handleDelete = (id)=>{
        dispatch(deleteContact(id)).then(()=>{
            dispatch(getContacts())
        })
        

    }
    

    return ( 
        <>
            {state==='loading' && <div className="d-flex justify-content-center my-4"><p className="m-auto display-2 d-inline">loading...</p></div>}

            {   state==='normal'
                    &&
                contacts.map((contact)=>{
                    return (<Link to={contact.id.toString()}className="m-3 card p-3" key={contact.id}>
                            <div className="d-flex justify-content-between">
                                <h3 className="display-6">{contact.name}</h3>
                                <div className="buttons">
                                    <button onClick={(e)=>{
                                        e.preventDefault()
                                        navigate(`/contacts/edit/${contact.id}`)
                                    }} className="btn btn-info m-2">update</button>
                                    <button onClick={ async (e)=>{
                                        e.preventDefault()
                                        handleDelete(contact.id)
                                    }} className="btn btn-danger m-2">delete</button>
                                </div>
                            </div>
                            
                            <p>{contact.description}</p>
                        </Link>)
                })
            }
        </>
        
     );
}

 
export default ContactPage;