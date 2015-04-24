'use strict';

jest.dontMock('../../stores/TodoStore');
jest.dontMock('../TodoApp.react');

import React from 'react/addons';
import TodoApp from '../TodoApp.react';

const TestUtils = React.addons.TestUtils;

describe('TodoApp', function() {

    it('Shows a Todo', function() {
        const app = TestUtils.renderIntoDocument(
            <TodoApp />
        );

        const todo = TestUtils.findRenderedDOMComponentWithTag(app, 'p');

        expect(todo.getDOMNode().textContent).toEqual('yo');
    });

});
