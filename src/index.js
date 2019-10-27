import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Selfinfo from'./components/Self-info';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

/*const info = <Selfinfo name="Valeriya"/>
ReactDOM.render(info, document.getElementById("about"))*/
serviceWorker.unregister();
