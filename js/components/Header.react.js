import React from 'react';

import TodoActions from '../actions/TodoActions';

import TodoTextInput from './TodoTextInput.react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Todos</h1>
                
                <TodoTextInput
                    onSave={ this.onSave } 
                />
            </div>
        );
    }

    onSave(newTodo) {
        TodoActions.create(newTodo);
    }
};

export default Header;
