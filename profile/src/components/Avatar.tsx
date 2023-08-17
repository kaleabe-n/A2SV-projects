interface Props {
    path:string
}

let Avatar:(props:Props)=>JSX.Element = ({path})=>{
    return ( <div className="Avatar">
        <img src={require("./img.jpg")} alt="user profile" className="profile-image"/>
    </div> )
}
export default Avatar