import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './reactRedux/TodoList';
import { Provider } from 'react-redux'
import store from './store'
// import Donghua from './donghua/Donghua'

const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));