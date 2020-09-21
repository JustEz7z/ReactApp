import React from 'react'
import style from './users.module.css'
import photo from './userPhotoIcon.jpg'
import Preloader from '../Preloader/Preloader'
import {NavLink} from 'react-router-dom'

const Users = (props) => {
    let totalPagesCount = Math.ceil((props.totalUsersCount / props.pageSize) / 10)
    let pagesArr = []
    for (let i = 1; i <= totalPagesCount; i++) {
        pagesArr.push(i)
    }
    
    return (
        <div>
            {props.isFetching ? <Preloader /> : null}
            <div className={style.selectedBox}>
                {pagesArr.map(p => {
                    return <span key={p} className={true && props.page === p ? style.selected : null} onClick={() => { props.onPageChanged(p, props.pageSize) }}>{p}</span>
                })}
            </div>
            {
                props.users.map(user => {
                    return (
                        <div key={user.id} className={style.flexBox}>
                            <NavLink to={'/profile/'+user.id}><img src={user.photos.small !== null ? user.photos.small : photo} alt="" /></NavLink>
                            <br />
                            <div >
                                <h3>{user.name}</h3>
                                <p>{user.status}</p>
                                <button disabled={props.isActionFollowing.some((id) => id === user.id)} onClick={() => {                                     
                                    if(user.followed){
                                        props.deleteUserFollow(user.id)
                                    }else{
                                        props.postUserFollow(user.id)
                                    }
                                    }
                                    }>{user.followed ? "UnFollow" : "Follow"}</button>
                            </div>
                            <div className={style.location}>
                                <h3>{"user.location.city"}</h3>
                                <h3>{"user.location.country"}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users


