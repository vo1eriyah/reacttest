
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Footer from './components/Footer/Footer';
import CurrentDate from './components/Deprecated❌/CurrentDate'
import './components/Main.scss'

/*ReactDOM.render(<Bootstraptest />, document.getElementById('root'));*/
ReactDOM.render(<App />, document.getElementById('root'));
/*ReactDOM.render(<CurrentDate />, document.getElementById("datetime"));*/

serviceWorker.unregister();
