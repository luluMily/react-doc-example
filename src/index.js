import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Clock from './components/clock';
import ToggleButton from './components/toggle_button';
import LoginControl from './components/signon';
import NameForm from './components/name_form';
import BoilingVerdict from './components/boiling_verdict';
import Demo from './components/filterableProductTable';

ReactDOM.render(<Demo />, document.getElementById('root'));

registerServiceWorker();
