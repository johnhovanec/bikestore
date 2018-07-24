import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'))

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // ReactDOM.render(<App />, document.getElementById('root'));
// // registerServiceWorker();

// ReactDOM.render((
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   ), document.getElementById('root'))