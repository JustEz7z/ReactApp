import React from 'react'
import ProfileInfo from './ProfileInfo'
import {setProfileThunk} from '../../../redux/profileReducer'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {putAuthUsersStatus} from '../../../redux/authReducer'

class ProfileInfoContainer extends React.Component {
    componentDidMount(){
        setTimeout(() => {
            this.props.setProfileThunk(this.props.match.params.userId, this.props.authId , this.props.authStatus)  
        }, 1500)
    }

    render() {
        return <ProfileInfo
        profile={this.props.profile}
        status={this.props.status}
        putAuthUsersStatus={this.props.putAuthUsersStatus}
        />
    }
}
const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authId: state.auth.user.id,
    status: state.profilePage.profileStatus,
    authStatus: state.auth.status
})

export default compose(connect(mapStateToProps,{setProfileThunk, putAuthUsersStatus}), withRouter)(ProfileInfoContainer)