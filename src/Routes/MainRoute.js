import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

import MainContainer from '../Components/MainContainer.js';

const MainRoute = () => {
    return (
        <div>
            <Router>
                <Switch>

                    <Route path="/" exact component={MainContainer} />
                </Switch>
            </Router>
        </div>
    )
}

export default MainRoute