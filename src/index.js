import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPanel from './components/MainPanel';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MainPanel />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
