import React from 'react';

import TodoStore from '../stores/TodoStore';

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
            <p>{ this.state.allTodos }</p>
        );
    }
};

export default TodoApp;
