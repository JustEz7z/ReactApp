import React from 'react'
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.postMessage}>
            <img src="https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg" alt="face"/>
            <div className={style.messageAndLikes}>
                <p>{props.message}</p>
                <p>Likes - {props.likes}</p>
            </div>
        </div>
    )
}


export default Post