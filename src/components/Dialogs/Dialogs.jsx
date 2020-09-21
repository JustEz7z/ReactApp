import React from 'react'
import style from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItems from './DialogItems/DialogItems'
import {Field, reduxForm} from 'redux-form'

const Dialogs = (props) => {
    const onSumbit = (text) => {
        props.addMessage(text.textarea)
    }
    const dialogItems = props.store.dialogs.map( d => <DialogItems name={d.name} id={d.id}/>)

    const message = props.store.message.map( m => <Message message={m.message} /> ) 

    return(
        <div className={style.dialogs}>
            <ul className={style.dialogItems}>
                {dialogItems}
            </ul>

            <div className={style.messages}>
                {message}
                <DialogReduxForm onSubmit={onSumbit}/>
            </div>
        </div>
    )
}

const DialogForm = (props) => {
    return <form onSubmit={props.handleSubmit} >
        <Field name='textarea' component={'textarea'}/>
        <button >Enter</button>
    </form>

}

const DialogReduxForm = reduxForm({form: 'messageTextArea'})(DialogForm)

export default Dialogs