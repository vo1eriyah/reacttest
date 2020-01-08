
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';


/*ReactDOM.render(<Bootstraptest />, document.getElementById('root'));*/
ReactDOM.render(<App />, document.getElementById('root'));
/*ReactDOM.render(<CurrentDate />, document.getElementById("datetime"));*/

serviceWorker.unregister();
