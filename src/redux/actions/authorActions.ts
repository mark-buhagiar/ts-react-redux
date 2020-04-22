import { ThunkAction } from 'redux-thunk';
import * as authorsApi from '../../api/authorApi';
import Author from '../../models/author';
import ApplicationState from '../states/ApplicationState';
import ActionTypes from './actionTypes';
import AuthorActionTypes from './authorActionTypes';

export type AuthorThunkAction<R> = ThunkAction<R, ApplicationState, unknown, AuthorActionTypes>;

export function loadAuthorsSuccess(authors: Author[]): AuthorActionTypes {
    return { type: ActionTypes.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors(): AuthorThunkAction<Promise<void>> {
    return async (dispatch): Promise<void> => {
        authorsApi
            .getAuthors()
            .then((authors) => {
                dispatch(loadAuthorsSuccess(authors));
            })
            .catch((error) => {
                throw error;
            });
    };
}
