import alt from '../alt';
import merge from 'object-assign';

import TodoActions from '../actions/TodoActions';

class TodoStore {
    constructor() {
        this.bindActions(TodoActions);

        this.todos = {};
    }

    update(id, update) {
        this.todos[id] = merge(this.todos[id], update);
    }

    onCreate(text) {
        text = text.trim()
        if (text === '') {
            return false
        }
        // hand waving of course.
        const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36)
        this.todos[id] = {
            id: id,
            complete: false,
            text: text
        }
    }

    onToggleComplete(id) {
        const complete = !this.todos[id].complete;
        this.update(id, { complete });
    }

    onClearComplete() {
        for(let id in this.todos) {
            if (this.todos[id].complete === true) {
                delete this.todos[id];
            }
        };
    }

    static areAnyComplete() {
        const { todos } = this.getState();

        for(let id in todos) {
            if (todos[id].complete === true) {
                return true;
            }
        };
        return false;
    }
}

export default alt.createStore(TodoStore);
