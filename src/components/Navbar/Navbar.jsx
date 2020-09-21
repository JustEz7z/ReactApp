import React from 'react'
import style from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
    return(
        <nav>
            <ul className={style.navBar}>
                <NavLink to='/profile'><li>Profile</li></NavLink>
                <NavLink to='/dialogs'><li>Message</li></NavLink>
                <NavLink to='/news'><li>News</li></NavLink>
                <NavLink to='/users'><li>Users</li></NavLink>
            </ul>
        </nav>
    )
}

export default Navbar