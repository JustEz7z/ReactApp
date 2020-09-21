import React from 'react'
import appStyle from './App.module.css'
import Navbar from './Navbar/Navbar'
import News from './News/News'
import Footer from './Footer/Footer'
import ProfileContainer from './Profile/ProfileContainer'
import UsersContainer from './Users/UsersContainer'
import DialogsContainer from './Dialogs/DialogsContainer'
import {Route} from 'react-router-dom'
import LoginContainer from './Login/LoginContainer'
import HeaderContainer from './Header/HeaderContainer'

const App = (props) => {
    return (
            <div className={appStyle.mainWrapper}>
                <HeaderContainer />
                <div className={appStyle.routeRow}>
                    <Navbar />
                    <Route exact path='/' render={() => <h4>Main</h4>} />
                    <Route path='/news' render={() => <News />} />
                    <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
                    <Route path='/dialogs' render={ () => <DialogsContainer />} />
                    <Route path='/users' render={ () => <UsersContainer />} />
                    <Route path='/login' render={() => <LoginContainer />} />
                </div>
                <Footer />
            </div>
    )
}

export default App