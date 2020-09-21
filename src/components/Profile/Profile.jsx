import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer'

const Profile = (props) => {
    return(
        <section>
            <ProfileInfoContainer />
            <MyPostsContainer />
        </section>
    )
}

export default Profile