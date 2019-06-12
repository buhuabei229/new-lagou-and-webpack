import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/components/App/App.js';

ReactDOM.render(
            <Provider store={store}>
              <App/>
            </Provider>,
            document.getElementById('root')
)
