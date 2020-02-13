import React, { Component } from 'react'
import Routes from '../../Routes';
import Backdrop from '../../components/Backdrop/Backdrop'
import Navigation from '../../components/Navigation';
export default class Shell extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation/>
                <Routes/>
                <Backdrop/>
            </React.Fragment>
        )
    }
}
