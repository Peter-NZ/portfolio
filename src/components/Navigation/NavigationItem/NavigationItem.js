import React from 'react'
import classes from './NavigationItem.module.scss'
import {Link} from 'react-router-dom';
const NavigationItem = (props) => {
    return (
        <Link to={props.itemSettings.path}><i className={`${classes.Test} material-icons`}>{props.itemSettings.icon}</i>{props.itemSettings.title}</Link>
    )
}

export default NavigationItem
