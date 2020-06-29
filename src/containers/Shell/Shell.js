import React, { Component } from 'react'
import Routes from '../../Routes';
import Backdrop from '../../components/Backdrop/Backdrop'
import Navigation from '../../components/Navigation/Navigation';
import classes from './Shell.module.scss';
import LayoutContext from '../../context/LayoutContext';
export default class Shell extends Component {
    state = {
        openSidenav: false
    }
    toggleSidenav = ()=>{
        this.setState(prevState=>({openSidenav: !prevState.openSidenav}));
    }
    render() {
        return (
            <React.Fragment>
                <LayoutContext.Provider 
                value={{
                    openSidenav: this.state.openSidenav,
                    toggleSidenav: this.toggleSidenav
                }}>
                    <Navigation/>
                </LayoutContext.Provider>
                <main className={classes['center-wrapper']}>
                    <Routes/>
                </main>
                <Backdrop/>
            </React.Fragment>
        )
    }
}
