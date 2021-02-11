import React, { Component } from 'react';
import '@popperjs/core';
import 'bootstrap/dist//css/bootstrap.min.css';
import 'bootstrap';
import './_custom.scss';
import ReactDOM from 'react-dom';
import Contact from './components/contact/contact';
import ContactItem from './components/contact/contact-item';
ReactDOM.render(<Contact/>, document.getElementById('app'));
