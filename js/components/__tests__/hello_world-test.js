'use strict';

jest.dontMock('../App.react');

import React from 'react/addons';
import App from '../App.react';

const TestUtils = React.addons.TestUtils;

describe('App', function() {

    it('Shows hello world', function() {
        const app = TestUtils.renderIntoDocument(
            <App />
        );

        const helloWorld = TestUtils.findRenderedDOMComponentWithTag(app, 'p');

        expect(helloWorld.getDOMNode().textContent).toEqual('Hello world');
    });

});
