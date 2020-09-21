import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from 'redux-form'

const MyPosts = (props) => {
    const onSubmit = (value) => {
        props.addPost(value.textarea)
    }
    
    const elementsPosts = props.state.posts.map(p => <Post message={p.message} likes={p.likes} id={p.id} key={p.id}/>)

    return (
        <div className={style.profilePosts}>
            <h3>My Posts</h3>
            <PostReduxForm onSubmit={onSubmit}/>
            <div>
                {elementsPosts} 
            </div>
        </div>
    )
}
const PostsForm = (props) => {
    return <form onSubmit={props.handleSubmit} >
        <Field name='textarea' component={'textarea'}/>
        <button >Enter</button>
    </form>

}

const PostReduxForm = reduxForm({form: 'postTextArea'})(PostsForm)


export default MyPosts