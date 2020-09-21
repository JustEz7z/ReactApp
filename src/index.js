import store from './redux/reduxStore'
import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

    render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
         document.querySelector('#root')
    );