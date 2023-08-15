import { useParams } from "react-router-dom";
import { useGetSingleContactQuery } from "../store/features/contact-api";

const ContactDetails = () => {
    const {id} = useParams()

    //use selector to access the single contact state
    const {data:contact,isSuccess,error,isError,isLoading} = useGetSingleContactQuery(id)

    return ( 
        <>
            {isLoading && <div className="d-flex justify-content-center my-4"><p className="m-auto display-2 d-inline">loading...</p></div>}
            {
                isSuccess
                &&
                <div className="m-5">
                    <h2>Contact: {contact.name}</h2>
                    <p>Phone:{contact.phone}</p>
                    <p className="m-5">{contact.description}</p>
                </div>
            }
            {isError&&<div>{error.message}</div>}

        </>
        
     );
}

export default ContactDetails;
