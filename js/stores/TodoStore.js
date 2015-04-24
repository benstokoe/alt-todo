import alt from '../alt';
import TodoActions from '../actions/TodoActions';

class TodoStore {
    constructor() {
        this.todos = {
            1: { text: 'yo' }
        };
    }
}

export default alt.createStore(TodoStore, 'TodoStore');
