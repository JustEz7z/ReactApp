import React from 'react'
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {
    return(
        <NavLink to={`/dialogs/${props.id}`}><li className=''>{props.name}</li></NavLink>
    )
}

export default DialogItem