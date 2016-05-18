'use strict';

var redux = require('redux');
var createStore = redux.createStore;
var reducer = require('./reducer');

var initialState = 'John';
var store = createStore(reducer, initialState);

console.log(store);
console.log('state should be John: ', store.getState());

var select = function(state) {
    return state;
};

var currentValue = store.getState();

// It will be called any time an action is dispatched, 
// and some part of the state tree may potentially have changed
var handleChange = function() {
    var previousValue = currentValue;
    currentValue = select(store.getState());
    if (previousValue !== currentValue) {
        console.log('property name changed from ', previousValue, 'to', currentValue);
    }
};

store.subscribe(handleChange);

// dispatch an action
store.dispatch({
    type: 'SET_NAME',
    name: 'Marie Ann'
});
