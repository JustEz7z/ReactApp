import React from 'react'
import style from'./Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
    return(
        <header className={style.header}>
            <h1>Header</h1>
            <div>{props.user.login ? <div>{props.user.login} <button onClick={props.logout}>logout</button></div> : <div><NavLink to='/login'>Login</NavLink></div>}</div>
        </header>
    )
}

export default Header