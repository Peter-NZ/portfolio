import React from 'react'
import {routeLinks} from '../../Routes';
import NavigationItem from './NavigationItem/NavigationItem'
const Navigation = () => {
    const NavItems = routeLinks.map(routeLink=><NavigationItem itemSettings={routeLink}/>)
    return (
        <nav>
            {NavItems}
        </nav>
    )
}

export default Navigation
