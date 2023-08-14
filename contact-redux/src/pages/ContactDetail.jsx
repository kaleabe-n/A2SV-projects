import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleContact } from "../redux/thunk";

const ContactDetails = () => {

    //use selector to access the single contact state
    const {state,value,error} = useSelector(state=>state.singleContact)

    //use contact to access variables within the path
    const {id} = useParams()

    //use dispatch to dispatch thunk functions
    const dispatch = useDispatch()
    const contact = value

    //use effect to fetch data
    useEffect(()=>{
        dispatch(getSingleContact(id))
    },[dispatch,id])
    
    return ( 
        <>
            {state==="loading"&&<p>loading</p>}
            {
                state!=="loading"
                &&
                contact
                &&
                <div className="m-5">
                    <h2>Contact: {contact.name}</h2>
                    <p className="m-5">{contact.description}</p>
                </div>
            }
            {error&&<div>error.message</div>}

        </>
        
     );
}

export default ContactDetails;
