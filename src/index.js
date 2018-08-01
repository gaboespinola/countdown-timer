import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import coinFlip from './coin-flip';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

/*var mySet = new Set();
for(var i=0;i<100;i++){
    mySet.add(coinFlip(20));
    
}
console.log(mySet);
*/