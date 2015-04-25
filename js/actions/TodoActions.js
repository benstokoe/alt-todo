import alt from '../alt';

class TodoActions {
    constructor() {
        this.generateActions(
            'create' 
        )
    }
}

export default alt.createActions(TodoActions);
