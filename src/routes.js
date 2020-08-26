import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch } from 'react-router';
import AutoComplete from './Components/AutoComplete';
import MainPage from './Components/MainPage';
const Routes = () => {
    return(
        <Router>
            <Switch>
            <Route path="/" component={MainPage} exact={true} />
            <Route path="/auto" component={AutoComplete} exact={true} />
            </Switch>
        </Router>
    );
    }
export { Routes }


