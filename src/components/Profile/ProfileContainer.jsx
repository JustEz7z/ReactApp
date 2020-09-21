import Profile from './Profile'
import withLoginRedirect from '../hoc/withLoginRedirect'
import { connect } from 'react-redux'
import { compose } from 'redux'

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default compose(connect(mapStateToProps, {}),withLoginRedirect)(Profile)