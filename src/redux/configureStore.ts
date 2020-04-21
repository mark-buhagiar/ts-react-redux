import { createStore, Store, Action, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import ApplicationState from './states/ApplicationState';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState?: ApplicationState): Store<ApplicationState> {
    const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return createStore<ApplicationState, Action<any>, unknown, unknown>(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())),
    );
}
