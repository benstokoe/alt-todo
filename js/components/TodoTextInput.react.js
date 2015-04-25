import React from 'react';
import { PropTypes } from 'react';

class TodoTextInput extends React.Component {
    constructor(props) {
        super(props)
        this._save = this._save.bind(this);
    }

    render() {
        return (
            <input
                onBlur={ this._save } 
            />
        );
    }

    _save(event) {
        this.props.onSave(event.target.value);
    }
};

TodoTextInput.PropTypes = {
    onSave: PropTypes.func.isRequired
}

export default TodoTextInput;
