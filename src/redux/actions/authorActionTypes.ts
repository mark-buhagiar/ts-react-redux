import ActionTypes from './actionTypes';
import Author from '../../models/author';

interface LoadAuthorsSuccess {
    type: typeof ActionTypes.LOAD_AUTHORS_SUCCESS;
    authors: Author[];
}

type AuthorActionTypes = LoadAuthorsSuccess;
export default AuthorActionTypes;
