import React from 'react';
import { PropTypes } from 'react';

import TodoItem from './TodoItem.react';

class MainSection extends React.Component {
    render() {
        
        const allTodos = this.props.todos;
        let todos = [];

        for (let key in allTodos) {
            todos.push(<TodoItem key={ key } todo={ allTodos[key] } />);
        }

        return (
            <ul>
                { todos }
            </ul>
        );
    } 
};

MainSection.propTypes = {
    todos: PropTypes.object.isRequired
};

export default MainSection;
