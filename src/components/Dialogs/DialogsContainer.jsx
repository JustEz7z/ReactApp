
import Dialogs from './Dialogs'
import {addMessageActionCreator} from '../../redux/dialogReducer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withLoginRedirect from '../hoc/withLoginRedirect'

const mapStateToProps = (state) => {
    return {
        store: state.dialogPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (messageTextArea) => {
            if(messageTextArea){
                dispatch(addMessageActionCreator(messageTextArea))
            }else alert('Ведіть текст!')
        }
    }
}


export default compose(connect(mapStateToProps, mapDispatchToProps), withLoginRedirect)(Dialogs)

