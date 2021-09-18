const redux = require('redux');

const counterReducer = (state = { sum: 0 }, action) => {

    if (action.type === 'increment') {
        return {
            sum: state.sum + 1
        }
    }

    if (action.type === 'decrement') {
        return {
            sum: state.sum - 1
        }
    }

    return state;

}

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latetsState = store.getState();
    console.log(latetsState);
}

store.subscribe(counterSubscriber)

store.dispatch({ type: 'increment' })
store.dispatch({ type: 'decrement' })