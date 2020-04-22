import ActionTypes from '../actions/actionTypes';
import AuthorActionTypes from '../actions/authorActionTypes';
import Author from '../../models/author';
import initialState from './initialState';

export default function courseReducer(state = initialState.authors, action: AuthorActionTypes): Author[] {
    switch (action.type) {
        case ActionTypes.LOAD_AUTHORS_SUCCESS:
            return [...action.authors];
        default:
            return state;
    }
}
