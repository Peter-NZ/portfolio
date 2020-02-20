import React from 'react'
import classes from '../Navigation.module.scss'
const NavigationButton = (props) => {
    return (
        <button className={classes['toggle-button']} onClick={props.toggleSidenav}><span className={classes['toggle-button__icon']}></span></button>
    )
}

export default NavigationButton
