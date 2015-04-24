import alt from '../alt';
import TodoActions from '../actions/TodoActions';

class TodoStore {
    constructor() {
        this.todos = {
            1: { text: 'Get some milk' },
            2: { text: 'Do something' }
        };
    }
}

export default alt.createStore(TodoStore, 'TodoStore');
