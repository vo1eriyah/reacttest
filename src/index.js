
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AppFlex from './components/AppFlex';
import * as serviceWorker from './serviceWorker';
import Footer from './components/Footer';
import CurrentDate from './components/CurrentDate'
import './components/Main.css'
import Bootstraptest from './components/Bootstraptest'

/*ReactDOM.render(<Bootstraptest />, document.getElementById('root'));*/
ReactDOM.render(<AppFlex />, document.getElementById('root'));
ReactDOM.render(<CurrentDate />, document.getElementById("datetime"));

serviceWorker.unregister();
