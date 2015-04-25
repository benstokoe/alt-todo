import alt from '../alt';

import TodoActions from '../actions/TodoActions';

class TodoStore {
    constructor() {
        this.bindActions(TodoActions);

        this.todos = {};
    }

    onCreate(text) {
        text = text.trim()
        if (text === '') {
            return false
        }
        // hand waving of course.
        var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36)
        this.todos[id] = {
            id: id,
            complete: false,
            text: text
        }
    }
}

export default alt.createStore(TodoStore);
