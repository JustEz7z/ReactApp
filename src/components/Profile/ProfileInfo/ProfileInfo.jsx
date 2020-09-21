import React from 'react'
import style from './ProfileInfo.module.css'
import Preloader from '../../Preloader/Preloader'
import Status from './Status'

const ProfileInfo = (props) => {
    if(!props.status || !props.profile){
        return <div>
            <Preloader />
        </div>
    }
    return (
            <div>
                <div className={style.profileInfo}>
                    <img src="https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                    <br />
                    <img src={props.profile.photos.large} alt=""/>
                    <Status status={props.status} putAuthUsersStatus={props.putAuthUsersStatus}/>
                </div>
                <div className={style.avaDescription}>
                    ava + description
                </div>
            </div>
    )
}


export default ProfileInfo