import React from 'react'
import classes from '../Navigation.module.scss'
import {Link} from 'react-router-dom';
const NavigationItem = (props) => {
    return (
        <Link className={classes.sidenav__item} to={props.itemSettings.path}><i className={`${classes.sidenav__icon} material-icons`}>{props.itemSettings.icon}</i>{props.itemSettings.title}</Link>
    )
}

export default NavigationItem
