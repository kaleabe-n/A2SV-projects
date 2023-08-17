import { useState } from 'react';
import createBlogStyle from '../styles/addblog.module.css'
import { useRouter } from 'next/router';

//Page to create new blog
const NewBlog = () => {

    //use state to manage the state of the inputs with in the app
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [error,setError] = useState('')

    //router for navigation
    const router = useRouter()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        let hasError = false

        //check if one of the two is empty and set error
        if(title=="" || content == ""){
            setError("both title and content can not be empty")
            return
        }
        const submission = {
            title:title,
            content:content
        }

        //make a post requst
        const res = await fetch('http://localhost:4000/blogs',{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(submission)
        }).catch((e)=>{
            hasError = true
            setError('failed to create post')
        })
        

        //if there is no error go to the homepage
        if(!hasError){
            setError('')
            router.push('/')
        }
    }

    //jsx for the form page
    return ( <div>
        <form onSubmit={handleSubmit} className={createBlogStyle.form}>
            <label htmlFor="title">Title</label>
            <input className={createBlogStyle.inputs} type="text" id='title' name='title' placeholder='Enter blog title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <label htmlFor="content">Content</label>
            <textarea className={createBlogStyle.inputs} name="content" id="content" cols="30" rows="15" value={content} onChange={(e)=>{setContent(e.target.value)}} placeholder='Enter blog content'></textarea>
            {error && <p style={{color:"red"}}>{error}</p>}
            <button type="submit" className={createBlogStyle.button}>post</button>
        </form>
    </div> );
}
 
export default NewBlog;