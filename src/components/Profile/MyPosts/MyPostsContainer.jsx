import MyPosts from './MyPosts'
import {addPostActionCreator, onPostChangeTextActionCreator} from '../../../redux/profileReducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        state: state.profilePage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (messagePostTextArea) => {
            if(messagePostTextArea){
                dispatch(addPostActionCreator(messagePostTextArea)) 
            } else {
                alert('Ведіть текст!')
            }
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer