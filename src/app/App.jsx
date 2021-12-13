import React from 'react';
import './app.less'
import './reset.less'

import {useDispatch, useSelector} from "react-redux";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";
import Main from '../components/pages/Main/Main'
import Collection from '../components/pages/Collection/Collection'

const App = () => {
    const dispatch = useDispatch()


    return (
        <HashRouter>
            <div className="container">
                <Switch>
                     <Route exact path="/page/1" component={Main}/>
                     <Route exact path='/page/:currentPage' component={Main}/>
                     <Route path="/card" component={Collection}/>
                     <Redirect to="/page/1"/>
                </Switch>
            </div>
        </HashRouter>
    );
};

export default App;
