import alt from '../alt';

class TodoActions {
    constructor() {
        this.generateActions(
            'create',
            'toggleComplete',
            'clearComplete'
        )
    }
}

export default alt.createActions(TodoActions);
