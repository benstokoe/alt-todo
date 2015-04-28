import alt from '../alt';

class TodoActions {
    constructor() {
        this.generateActions(
            'create',
            'toggleComplete'
        )
    }
}

export default alt.createActions(TodoActions);
