import React from 'react'
import {routeLinks} from '../../Routes';
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './Navigation.module.scss';
const Navigation = () => {
    const NavItems = routeLinks.map(routeLink=><NavigationItem itemSettings={routeLink}/>)
    return (
        <nav className={classes.sidenav}>
            {NavItems}
        </nav>
    )
}

export default Navigation
