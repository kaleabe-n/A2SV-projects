import { useRouter } from "next/router";
import detailstyles from '../../../styles/detail.module.css'

const BlogView = ({blog}) => {
    //router for navigation
    const router = useRouter()

    //function to handle edit button
    const editHandler = (e)=>{
        e.preventDefault()
        router.push(`/edit/${blog.id}`)
    }

    //function to handle delete button
    const deleteHandler = async (e) => {
        e.preventDefault()

        //make delete request
        const res = await fetch(`http://localhost:4000/blogs/${blog.id}`,{
            method:"DELETE"
        })

        //navigate to the home page
        router.push('/')
    }
    return ( <div>
        <div className={detailstyles.detailheader}>
            <h2 className={detailstyles.blogtitle}>{blog.title}</h2>
            <div>
                <button onClick={editHandler} className={detailstyles.button}>update</button>
                <button onClick={deleteHandler} className={detailstyles.deletebutton}>delete</button>
            </div>
        </div>
        <hr />
        
        <p className={detailstyles.blogcontent}>Content:</p>
        <p className={detailstyles.blogcontent}>{blog.content}</p>
    </div> );
}

//get static props to fetch data from the data source
export const getStaticProps = async(context)=>{

    //get id of the current blog
    const id = context.params.id

    //fetch the blog
    const response = await fetch(`http://localhost:4000/blogs/${id}`)
    const blog = await response.json()
    return {
        props:{
            blog
        }
    }
    
}

//get static paths to generate all the paths
export const getStaticPaths= async ()=>{
    const response = await fetch('http://localhost:4000/blogs')
    const blogs = await response.json()
    const ids = blogs.map((blog)=>blog.id)
    const paths = ids.map((id)=>({params:{id:id.toString()}}))
    return {paths,fallback:false}
}
 
export default BlogView;