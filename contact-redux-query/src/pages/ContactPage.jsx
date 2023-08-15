import { Link,useNavigate } from "react-router-dom";
import { useGetContactsQuery,useDeleteContactMutation } from "../store/features/contact-api";


const ContactPage = () => {


    //use the useGetContactsQuery to access the data
    const {data:contacts,isError,error,isLoading,isSuccess} = useGetContactsQuery()

    //use the useDeleteContactMutation to delete contacts
    const [deletecontact] = useDeleteContactMutation()

    //use navigate to navigate
    const navigate = useNavigate()

    //function that handles delete which dispatches deletecontact and refreshes the contacts
    const handleDelete = (contact)=>{
        // console.log(id)
        deletecontact(contact)
    }
    

    return ( 
        <>
            {isLoading && <div className="d-flex justify-content-center my-4"><p className="m-auto display-2 d-inline">loading...</p></div>}
            {isError && <p className="text-danger">{error.message}</p>}
            {   isSuccess
                    &&
                contacts.map((contact)=>{
                    return (<Link to={contact.id.toString()}className=" mx-5 my-3 card p-3 text-gray" key={contact.id}>
                            <div className="d-flex justify-content-between">
                                <h3 className="display-6">{contact.name}</h3>
                                <div className="buttons">
                                    <button onClick={(e)=>{
                                        e.preventDefault()
                                        navigate(`/contacts/edit/${contact.id}`)
                                    }} className="btn btn-info m-2">update</button>
                                    <button onClick={ async (e)=>{
                                        e.preventDefault()
                                        handleDelete(contact)
                                    }} className="btn btn-danger m-2">delete</button>
                                </div>
                            </div>
                            
                            <p>{contact.phone}</p>
                        </Link>)
                })
            }
        </>
        
     );
}

 
export default ContactPage;