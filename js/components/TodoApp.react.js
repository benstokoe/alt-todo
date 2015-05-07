import React from 'react';

import TodoStore from '../stores/TodoStore';

import Header from './Header.react';
import MainSection from './MainSection.react';
import Footer from './Footer.react';

function getTodoState() {
    return {
        allTodos: TodoStore.getState().todos,
        areAnyComplete: TodoStore.areAnyComplete()
    }
}

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = getTodoState();
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        TodoStore.listen(this._onChange);
    }

    componentWillUnmount() {
        TodoStore.unlisten(this._onChange);
    }

    render() {
        return (
            <div className="container">
                <Header />
                <MainSection todos={ this.state.allTodos } />
                <Footer areAnyComplete={ this.state.areAnyComplete } />
            </div>
        );
    }

    _onChange() {
        this.setState(getTodoState());
    }
};

export default TodoApp;
