import React from 'react'
import {connect} from 'react-redux'
import {getAuthUser} from '../../redux/authReducer'
import Login from './Login'
import {authorithation} from '../../redux/authReducer'
import {Redirect} from 'react-router-dom'


class LoginContainer extends React.Component {
    componentDidMount(){
      // this.props.getAuthUser()
    }

    render(){
      if(this.props.isAuth){
        return <Redirect to='/profile' />
      }
      return <Login authorithation={this.props.authorithation}/>
    }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {getAuthUser, authorithation} )(LoginContainer)