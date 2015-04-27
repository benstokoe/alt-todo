import React from 'react';
import { PropTypes } from 'react';

class TodoTextInput extends React.Component {
    constructor(props) {
        super(props)
        this._save = this._save.bind(this);
        this._onKeyDown = this._onKeyDown.bind(this);
    }

    render() {
        return (
            <input
                onBlur={ this._save } 
                onKeyDown={ this._onKeyDown }
            />
        );
    }

    _save(event) {
        this.props.onSave(event.target.value);
        event.target.value = '';
    }

    _onKeyDown(event) {
        if (event.keyCode === 13) {// enter
            this._save(event); 
        }
    }
};

TodoTextInput.PropTypes = {
    onSave: PropTypes.func.isRequired
}

export default TodoTextInput;
