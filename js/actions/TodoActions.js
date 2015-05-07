import alt from '../alt';

class TodoActions {
    constructor() {
        this.generateActions(
            'create',
            'toggleComplete',
            'clearComplete',
            'areAnyComplete'
        )
    }
}

export default alt.createActions(TodoActions);
