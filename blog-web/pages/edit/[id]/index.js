import { useRouter } from "next/router";
import { useState } from "react";
import createBlogStyle from '../../../styles/addblog.module.css'

const EditBlog = ({blog}) => {

    //use state to manage the content of the inputs
    const [title,setTitle] = useState(blog.title)
    const [content,setContent] = useState(blog.content)
    const [error,setError] = useState('')

    //use router to navigate
    const router = useRouter()

    //function that handles the submit button
    const handleSubmit = async (e)=>{
        e.preventDefault()
        let hasError = false

        //check if the title or the content is empty
        if(title=="" || content == ""){
            setError("both title and content can not be empty")
            return
        }
        const submission = {
            title:title,
            content:content
        }

        //send patch request
        const res = await fetch(`http://localhost:4000/blogs/${blog.id}`,{
            method:"PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(submission)
        }).catch((e)=>{
            hasError = true
            setError('failed to update post')
        })
        
        // if there is no error navigate to the home page
        if(!hasError){
            setError('')
            router.push('/')
        }
    }
    return ( <div>
        <form onSubmit={handleSubmit} className={createBlogStyle.form}>
            <label htmlFor="title">Title</label>
            <input className={createBlogStyle.inputs} type="text" id='title' name='title' placeholder='Enter blog title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <label htmlFor="content">Content</label>
            <textarea className={createBlogStyle.inputs} name="content" id="content" cols="30" rows="15" value={content} onChange={(e)=>{setContent(e.target.value)}} placeholder='Enter blog content'></textarea>
            {error && <p style={{color:"red"}}>{error}</p>}
            <button type="submit" className={createBlogStyle.button}>update</button>
        </form>
    </div> );
}

export const getStaticProps = async(context)=>{
    const id = context.params.id
    const response = await fetch(`http://localhost:4000/blogs/${id}`)
    const blog = await response.json()
    return {
        props:{
            blog
        }
    }
    
}

export const getStaticPaths= async ()=>{
    const response = await fetch('http://localhost:4000/blogs')
    const blogs = await response.json()
    const ids = blogs.map((blog)=>blog.id)
    const paths = ids.map((id)=>({params:{id:id.toString()}}))
    return {paths,fallback:false}
}
 
export default EditBlog;