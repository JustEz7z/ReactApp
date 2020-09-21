import React from 'react'
import s from '../Login/login.module.css'

const FormField = ({label, input,type , meta}) => {
    return (
        <div>
            <input {...input} type={type} placeholder={label} className={s.loginInput}/><br />
            <span style={{color: 'red'}}>{meta.touched && (meta.error || meta.warning)}</span>
        </div>
    )
}

export default FormField