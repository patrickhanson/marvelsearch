import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ComicBookPage from './ComicBookPage';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL} >
        <Switch>
            <Route exact path="/" >
                <App />
            </Route>
            <Route exact path="/book/:id" >
                <ComicBookPage />
            </Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));

serviceWorker.unregister();
