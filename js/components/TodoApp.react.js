import React from 'react';

import TodoStore from '../stores/TodoStore';

import Header from './Header.react';
import MainSection from './MainSection.react';

function getTodoState() {
    return {
        allTodos: TodoStore.getState().todos
    }
}

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = getTodoState();
    }

    render() {
        return (
            <div>
                <Header />
                <MainSection todos={ this.state.allTodos } />
            </div>
        );
    }
};

export default TodoApp;
