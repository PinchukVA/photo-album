import React from 'react';
import './app.less'
import './reset.less'

import { Route, Switch, Redirect, HashRouter } from "react-router-dom";
import Main from '../components/pages/Main/Main'
import Collection from '../components/pages/Collection/Collection'

const App = () => {
    return (
        <HashRouter>
            <div className="contain">
                <Switch>
                     <Route exact path="/page/1" component={Main}/>
                     <Route exact path='/page/:currentPage' component={Main}/>
                     <Route path="/card/:collectionId" component={Collection}/>
                     <Redirect to="/page/1"/>
                </Switch>
            </div>
        </HashRouter>
    );
};

export default App;
