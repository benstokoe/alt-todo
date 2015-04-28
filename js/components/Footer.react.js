import React from 'react';

import TodoActions from '../actions/TodoActions';

class Footer extends React.Component {
    render() {
        return (
            <a href="#"
                onClick={ this._clearAllCompleted }
            >Clear all complete</a>
        );
    }

    _clearAllCompleted() {
        TodoActions.clearComplete();
    }
};

export default Footer;
