import React from 'react'
import classes from '../Navigation.module.scss'
const NavigationButton = (props) => {
    return (
        <button id="test" aria-label="Toggle navigation menu" className={[classes['toggle-button'], classes['test']].join(" ")} onClick={props.toggleSidenav}><span className={classes['toggle-button__icon']}></span></button>
    )
}

export default NavigationButton
