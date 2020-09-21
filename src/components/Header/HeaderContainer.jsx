import {connect} from 'react-redux'
import Header from './Header'
import {getAuthUser, logout} from '../../redux/authReducer'
import React from 'react'

class HeaderComponent extends React.Component{
    logout() {

    }
    render() {
        return <Header user={this.props.user} isAuth={this.props.isAuth} logout={this.props.logout}/>
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {getAuthUser, logout})(HeaderComponent)