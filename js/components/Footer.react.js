import React from 'react';

import TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let allCompleteButton;

        if (this.props.areAnyComplete) {
            allCompleteButton = 
                <a href="#"
                    className="btn btn-primary"
                    onClick={ this._clearAllCompleted }
                >Clear all complete</a>;
        }

        return (
            <div id="footer">
                { allCompleteButton }
            </div>
        );
    }

    _clearAllCompleted() {
        TodoActions.clearComplete();
    }
};

export default Footer;
