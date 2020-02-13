import React from 'react'
import {Route} from 'react-router-dom';
import * as Pages from './components/Pages';
const Routes = () => {
    return (
        <React.Fragment>
            <Route path="/" exact component={Pages.Home}></Route>
            <Route path="/home" exact component={Pages.Home}></Route>
            <Route path="/about" exact component={Pages.About}></Route>
            <Route path="/projects" exact component={Pages.Projects}></Route>
            <Route path="/skills" exact component={Pages.Skills}></Route>
            <Route path="/contact" exact component={Pages.Contact}></Route>
        </React.Fragment>
    )
}

export default Routes
