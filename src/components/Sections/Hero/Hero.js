import React from 'react'
import classes from "./Hero.module.scss";
import Avatar from '../../Common/Avatar/Avatar';

const Hero = () => {
    return (
        <header className={classes['hero']}>
            <Avatar></Avatar>
        </header>
    )
}

export default Hero;
