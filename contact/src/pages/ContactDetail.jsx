import {  useLoaderData } from "react-router-dom";

const ContactDetails = () => {
    const contact = useLoaderData()
    return ( 
        <div className="m-5">
            <h2>Contact: {contact.name}</h2>
            <p className="m-5">{contact.description}</p>
        </div>
     );
}
 
export let singleContactLoader = async ({params})=>{
    const {id} = params
    const res = await fetch('http://localhost:4000/contacts/' + id.toString())
    return res.json()
}
export default ContactDetails;
