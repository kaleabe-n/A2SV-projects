import User from "../models"

interface Props{
    user:User
}

let UserDescription:(user:Props)=>JSX.Element = ({user})=>{
    return ( <div className="my-3 user-desc">
        {user.name&&<div className="d-inline"><span className="text-info display-6 fs-2">{user.name}</span></div>}
        {user.email&&<div className="d-inline"><span className="text-info display-6 fs-2">{user.email}</span></div>}
        {user.description&&<p className="text-center m-3 p-1">{user.description}</p>}
        {user.link&&<a href="/">website link</a>}
    </div> )
}
export default UserDescription