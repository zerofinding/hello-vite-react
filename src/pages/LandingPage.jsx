import React, { Component } from 'react'

import Header from '../parts/Header'
import Home from './Home'

export default class LandingPage extends Component {
    render() {
        return (
        	<>
            <Header {...this.props} />
            <Home {...this.props} />
            </>
        )
    }
}
