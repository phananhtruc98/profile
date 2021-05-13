import React, { Component } from 'react';
import '@popperjs/core';
import 'bootstrap/dist//css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Popper from 'popper.js';
import 'bootstrap';
import './_custom.scss';
import ReactDOM from 'react-dom';
import Container from './pages/container/container';
import Blogs from './pages/blogs/blogs';
import Header from './pages/header/header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
ReactDOM.render(
    <BrowserRouter basename="/">
        <Header />
        <main>
            <Switch>
                <Route exact path="/"><Container /></Route>
                <Route path="/blogs"><Blogs /></Route>
            </Switch>
        </main>
    </BrowserRouter>, document.getElementById('app'));
