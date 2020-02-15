import React from 'react'
import classes from '../Navigation.module.scss'
import {NavLink} from 'react-router-dom';
const NavigationItem = (props) => {
    return (
        <NavLink exact activeClassName={classes['sidenav__item--active']} className={classes.sidenav__item} to={props.itemSettings.path}><i className={`${classes.sidenav__icon} material-icons`}>{props.itemSettings.icon}</i>{props.itemSettings.title}</NavLink>
    )
}

export default NavigationItem
