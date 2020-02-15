import React, { Component } from 'react'
import Routes from '../../Routes';
import Backdrop from '../../components/Backdrop/Backdrop'
import Navigation from '../../components/Navigation/Navigation';
import classes from './Shell.module.scss';
export default class Shell extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation/>
                <div className={classes['center-wrapper']}>
                    <Routes/>
                </div>
                <Backdrop/>
            </React.Fragment>
        )
    }
}
