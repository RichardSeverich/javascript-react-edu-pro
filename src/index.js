// React
import React from 'react';
import ReactDOM from 'react-dom';

// App Router
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './redux/reducers/CounterReducer'

const store = createStore (
    reducer
 )

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppRoutes/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
