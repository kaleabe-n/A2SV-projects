import { useLoaderData,Link,useNavigate } from "react-router-dom";


const ContactPage = () => {

    const contacts = useLoaderData()
    const navigate = useNavigate()

    return ( 
        contacts.map((contact)=>{
            return (<Link to={contact.id.toString()}className="m-3 card p-3" key={contact.id}>
                    <div className="d-flex justify-content-between">
                        <h3 className="display-6">{contact.name}</h3>
                        <div className="buttons">
                            <Link to={"edit/"+contact.id.toString()} className="btn btn-info m-2">update</Link>
                            <button onClick={ async ()=>{
                                await fetch('http://localhost:4000/contacts/'+contact.id,{
                                    method:'DELETE'
                                
                                })
                                navigate('/contacts')
                            }} className="btn btn-danger m-2">delete</button>
                        </div>
                    </div>
                    
                    <p>{contact.description}</p>
                </Link>)
        })
     );
}

export const contactsLoader = async () =>{
    const contacts = await fetch('http://localhost:4000/contacts')
    return contacts.json()
}
 
export default ContactPage;