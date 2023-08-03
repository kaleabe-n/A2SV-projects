import Avatar from "./Avatar"
import UserDescription from "./UserDiscription"
import User from "../models"

interface Props{
    user:User
}

let Card:(props: Props)=>JSX.Element = ({user})=>{
    return ( <div className="card my-2 p-5">
        <Avatar path={user.imagePath}/>
        <UserDescription user={user}/>
    </div> )
}
export default Card