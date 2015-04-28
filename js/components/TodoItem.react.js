import React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';

import TodoActions from '../actions/TodoActions';

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this._onToggleComplete = this._onToggleComplete.bind(this);
    }

    render() {
        const { todo } = this.props;

        return (
            <li className={ classNames({ 'complete': todo.complete }) }>
                <input
                    type="checkbox"
                    checked={ todo.complete } 
                    onChange={ this._onToggleComplete }
                /> 
                { todo.text }
            </li>
        );
    }

    _onToggleComplete() {
        TodoActions.toggleComplete(this.props.todo.id); 
    }
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

export default TodoItem;
