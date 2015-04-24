import React from 'react';
import { PropTypes } from 'react';

class TodoItem extends React.Component {
    render() {
        return (
            <li>{ this.props.todo.text }</li>
        );
    }
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

export default TodoItem;
