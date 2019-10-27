import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Footer from './components/Footer';
import CurrentDate from './components/CurrentDate'
import './components/Main.css'

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<CurrentDate />, document.getElementById("datetime"));

serviceWorker.unregister();
