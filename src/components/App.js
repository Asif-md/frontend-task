import React, { Component } from 'react'
import Todo from "./Todo"

import { Provider } from 'react-redux';
import store from '../store';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div style={{ textAlign: "center", margin: "auto", display: "block" }}>
                    <Todo />
                </div>
            </Provider>
        )
    }
}

export default App;